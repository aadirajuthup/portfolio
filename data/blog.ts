import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import { h } from "hastscript"; // Helper for creating HAST nodes

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

// SVG for Clipboard Icon
const clipboardIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`;

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true }) // Allow raw HTML from remark
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(() => (tree, file) => {
      visit(tree, "element", (node: any, index, parent: any) => {
        if (node.tagName === "pre") {
          // Ensure parent and index are valid before proceeding
          if (!parent || typeof index !== 'number') return;

          // Create the button element
          const buttonNode = h(
            "button",
            {
              className: "copy-button absolute top-2 right-2 z-10 p-1.5",
              onclick: "copyCode(this)",
              "aria-label": "Copy code to clipboard",
              title: "Copy code",
            },
            // Use type: 'raw' for direct SVG string insertion with rehypeStringify
            { type: 'raw', value: clipboardIconSVG }
          );

          // Create a wrapper div
          const wrapperNode = h(
            "div",
            { className: "code-block-wrapper relative" }, // Add relative positioning to the wrapper
            node, // The original pre node
            buttonNode // The button node
          );

          // Replace the original pre node with the wrapper node in the parent
          parent.children.splice(index, 1, wrapperNode);
        }
      });
    })
    .use(rehypeStringify, { allowDangerousHtml: true }) // Allow raw HTML for SVG and onclick
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
