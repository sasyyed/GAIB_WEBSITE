import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function stripStylesheetCrossorigin() {
  const strip = (html) =>
    html.replace(
      /(<link\b(?=[^>]*\brel=["']stylesheet["'])[^>]*?)\s+crossorigin(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?/gi,
      "$1",
    );

  return {
    name: "gaib-strip-stylesheet-crossorigin",
    enforce: "post",
    generateBundle(_, bundle) {
      for (const asset of Object.values(bundle)) {
        if (asset.type === "asset" && asset.fileName.endsWith(".html")) {
          asset.source = strip(String(asset.source));
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), stripStylesheetCrossorigin()],
});
