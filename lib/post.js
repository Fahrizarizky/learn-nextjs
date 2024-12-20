import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import grayMatter from "gray-matter";

export const getPost = async (slug) => {
  const text = await readFile(`./content/blog/${slug}.md`, "utf-8");
  const {
    data: { date, title, describe },
    content,
  } = grayMatter(text);
  const body = marked(content);
  return { date, body, title, describe };
};

export const getAllPost = async () => {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const allpost = [];
  for (const file of slugs) {
    const post = await getPost(file);
    allpost.push(post);
  }
  return allpost;
};
