export function isGithubUrl(url: string): boolean {
  return url.startsWith("https://github.com/");
}

export function parseGithubUrl(url: string): { owner: string; repo: string } {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (match && match[1] && match[2]) {
    return { owner: match[1], repo: match[2] };
  }

  throw new Error(`Unable to parse GitHub repository URL: ${url}`);
}
