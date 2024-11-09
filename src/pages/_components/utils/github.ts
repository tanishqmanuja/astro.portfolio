import { GITHUB_TOKEN } from "astro:env/server";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
});

function parseRepoUrl(url: string): { owner: string; repo: string } {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (match) {
    return { owner: match[1], repo: match[2] };
  }

  throw new Error(`Invalid GitHub repository URL: ${url}`);
}

export async function getStars(repoUrl: string) {
  return Promise.resolve(repoUrl)
    .then(parseRepoUrl)
    .then(({ owner, repo }) => octokit.repos.get({ owner, repo }))
    .then(({ data }) => data.stargazers_count)
    .catch(() => null);
}

export async function getTotalPublicRepos(username: string) {
  const user = await octokit.users.getByUsername({ username });
  return user.data.public_repos;
}

export async function getTotalStars(username: string) {
  let totalStars = 0;
  let page = 1;

  while (true) {
    const response = await octokit.rest.search.repos({
      q: `user:${username}+sort:stars-desc`,
      per_page: 100,
      page,
    });

    const items = response.data.items;
    totalStars += items.reduce((acc, item) => acc + item.stargazers_count, 0);

    if (items.length < 100) {
      break;
    }

    page++;
  }

  return totalStars;
}
