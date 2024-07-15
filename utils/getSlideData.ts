import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import { SlideType } from "@/types";
import meta from "@/content/_meta.json";

const contentDirectory = path.join(process.cwd(), "content");

export async function getSlideData(id?: string): Promise<SlideType[]> {
  const fileNames = fs.readdirSync(contentDirectory);

  const slides = await Promise.all(
    fileNames
      .filter((fileName) => fileName.includes(".md"))
      .map(async (fileName) => {
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const result = matter(fileContents);

        // Support github flavored markdown
        const processedContent = await remark()
          .use(gfm)
          .use(html)
          .process(result.content);
        const contentHtml = processedContent.toString();

        return {
          id: fileName.replace(/\.md$/, ""),
          metadata: result.data as SlideType["metadata"],
          content: contentHtml,
        };
      }),
  );

  if (id) {
    return slides.filter((slide) => slide.id === id);
  }

  // Sort slides according to the order specified in _meta.json
  slides.sort((a, b) => {
    // If not mentioned in meta.json, Fall back to alphabetical sort
    if (meta.order.indexOf(b.id) === -1) return b.id.localeCompare(a.id);
    // Use position in meta.json to sort
    const orderA = meta.order.indexOf(a.id);
    const orderB = meta.order.indexOf(b.id);

    return orderA - orderB;
  });

  return slides;
}
