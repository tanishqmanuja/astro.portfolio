import BlueSkyIcon from "./assets/socials/bluesky.svg";
import DiscordIcon from "./assets/socials/discord.svg";
import GitHubIcon from "./assets/socials/github.svg";
import GMailIcon from "./assets/socials/gmail.svg";
import LinkedInIcon from "./assets/socials/linkedin.svg";
import XIcon from "./assets/socials/x.svg";
import type { Social } from "./types";

export const URL = "https://tqman.pages.dev";
export const AUTHOR = "Tanishq Manuja";

export const GITHUB_USERNAME = "tanishqmanuja";
export const TWITTER_USERNAME = "tanishqmanuja";

export const SKILLS = [
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "C",
  "C++",
  "Angular",
  "React",
  "Astro",
  "Node",
  "Bun",
  "Express",
  "Ionic",
  "Capacitor",
  "MySQL",
  "SQLite",
  "Git",
  "Docker",
  "Linux",
  "Bash",
];

export const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/tanishqmanuja",
    title: `${AUTHOR} on GitHub`,
    Icon: GitHubIcon,
  },
  {
    name: "X",
    href: "https://x.com/tanishqmanuja",
    title: `${AUTHOR} on Twitter`,
    Icon: XIcon,
  },
  {
    name: "BlueSky",
    href: "https://tanishqmanuja.bsky.social",
    title: `${AUTHOR} on Bluesky`,
    Icon: BlueSkyIcon,
  },
  {
    name: "GMail",
    href: "mailto:tanishqmanuja@gmail.com",
    title: `Send an email to ${AUTHOR}`,
    Icon: GMailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tanishqmanuja/",
    title: `${AUTHOR} on LinkedIn`,
    Icon: LinkedInIcon,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/534785364926136323",
    title: `${AUTHOR} on Discord`,
    Icon: DiscordIcon,
  },
] as const satisfies Social[];
