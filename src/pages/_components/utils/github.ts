import { octokit } from "@/utils/github/client";

export async function getStars(owner: string, repo: string) {
  return octokit.repos
    .get({ owner, repo })
    .then(({ data }) => data.stargazers_count);
}

export async function getTotalPublicRepos(username: string) {
  return octokit.users
    .getByUsername({ username })
    .then(({ data }) => data.public_repos);
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
