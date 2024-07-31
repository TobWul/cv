import { remark } from "remark";
import gfm from "remark-gfm";
import htmlPlugin from "remark-html";

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const html = await remark().use(gfm).use(htmlPlugin).process(markdown);
  return html.toString();
};
