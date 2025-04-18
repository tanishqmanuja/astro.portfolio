import { readFile } from "fs/promises";
import { join } from "path";

import { getCollection } from "astro:content";

import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

import ProjectOG from "@/components/project/ProjectOG";
import { FONTS_DIR } from "@/constants";
import { slugify } from "@/utils/slug";

interface Props {
  title: string;
}

async function loadLocalFont(path: string) {
  return readFile(join(FONTS_DIR, path));
}

export const GET: APIRoute<Props> = async ({ props }) => {
  const NothingFont = await loadLocalFont("ndot57.otf");
  const DepartureMonoFont = await loadLocalFont("departure-mono-regular.otf");

  return new ImageResponse(ProjectOG({ title: props.title }), {
    width: 1200,
    height: 675,
    fonts: [
      {
        name: "Nothing",
        data: NothingFont,
      },
      {
        name: "Departure Mono",
        data: DepartureMonoFont,
      },
    ],
  });
};

export async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.map((project) => ({
    params: { project: slugify(project.slug) },
    props: {
      title: project.data.title,
    } satisfies Props,
  }));
}
