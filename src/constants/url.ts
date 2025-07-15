type TMode = "gh-pages" | "test" | "dev";
const mode: TMode = "gh-pages";

const CONFIG = {
  "gh-pages": {
    URL_PREFIX: "/finik-landing/data/",
    PATH_PREFIX: "/finik-landing/",
  },
  dev: {
    URL_PREFIX: "/finik-landing/data/",
    PATH_PREFIX: "/finik-landing/",
  },
  test: {
    URL_PREFIX: "/new/data/",
    PATH_PREFIX: "/new/",
  },
} as const;

export const URL_PREFIX = CONFIG[mode].URL_PREFIX;
export const PATH_PREFIX = CONFIG[mode].PATH_PREFIX;
