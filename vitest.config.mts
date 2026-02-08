import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    include: [
      '__tests__/unit/**/*.{test,spec}.{ts,tsx}',
      '__tests__/integration/**/*.{test,spec}.{ts,tsx}'
    ],
    exclude: ['__tests__/e2e/**'],
    server: {
      deps: {
        // https://github.com/vercel/next.js/issues/77200
        inline: ["next-intl"],
      },
    },
  },
});
