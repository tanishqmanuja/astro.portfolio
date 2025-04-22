/* Source: https://github.com/shishkin/astro-pagefind */

import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import type { AstroIntegration } from "astro";
import { createIndex, type PagefindServiceConfig } from "pagefind";
import sirv from "sirv";

const INTEGARTION_NAME = "pagefind";

/**
 * Pagefind Astro integration options.
 */
export interface PagefindOptions {
  /**
   * `PagefindServiceConfig` passed to pagefind's `createIndex`
   */
  indexConfig?: PagefindServiceConfig;
}

export default function pagefind({
  indexConfig,
}: PagefindOptions = {}): AstroIntegration {
  let clientDir: string | undefined;
  return {
    name: INTEGARTION_NAME,
    hooks: {
      "astro:config:setup": ({ config, logger }) => {
        if (config.output === "server") {
          logger.warn(
            "Output type `server` does not produce static *.html pages in its output and thus will not work with astro-pagefind integration.",
          );
        }
        if (config.adapter) {
          clientDir = fileURLToPath(config.build.client);
        }
      },
      "astro:server:setup": ({ server, logger }) => {
        const outDir =
          clientDir ??
          path.join(server.config.root, server.config.build.outDir);

        if (!existsSync(path.join(outDir, "pagefind"))) {
          logger.warn(
            "Unable to find pagefind files. Make sure to run `build` command once",
          );
        }

        logger.debug(`Serving pagefind from ${outDir}`);
        const serve = sirv(outDir, {
          dev: true,
          etag: true,
        });
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/pagefind/")) {
            serve(req, res, next);
          } else {
            next();
          }
        });
      },
      "astro:build:done": async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const { index, errors: createErrors } = await createIndex(indexConfig);
        if (!index) {
          logger.error("Failed to create index");
          createErrors.forEach((e) => logger.error(e));
          return;
        }
        const { page_count, errors: addErrors } = await index.addDirectory({
          path: outDir,
        });
        if (addErrors.length) {
          logger.error("Failed to index files");
          addErrors.forEach((e) => logger.error(e));
          return;
        } else {
          logger.info(`${page_count} pages indexed`);
        }
        const { outputPath, errors: writeErrors } = await index.writeFiles({
          outputPath: path.join(outDir, "pagefind"),
        });
        if (writeErrors.length) {
          logger.error("Failed to write index");
          writeErrors.forEach((e) => logger.error(e));
          return;
        } else {
          const rout = path.relative(outDir, outputPath);
          logger.info(
            `Index files written to \`${path.basename(outDir)}/${rout}\``,
          );
        }
      },
    },
  };
}
