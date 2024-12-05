import { GITHUB_TOKEN } from "astro:env/server";
import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});
