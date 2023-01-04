/// <reference types="vitest" />
import * as fs from "fs";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import paths from "vite-tsconfig-paths";

import { dependencies } from "./package.json";

/**
 * We need to improve chunking on build to prevent one large compiled js file.
 * The below should help chunk the node modules up and reduce the file size
 */
const vendor = ["react", "react-dom"];
function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach((key) => {
    if (vendor.includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default ({ mode }) => {

  // Deal with env vars (for local mainly)
  const deploying = !!process.env.VERCEL || !!process.env.CI;
  if (!deploying) {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };
  }

  // Return the config
  return defineConfig({
    plugins: [react(), paths()],
    server: !deploying && {
      open: true,
      host: process.env.HOST,
      port: parseInt(process.env.PORT, 10),
      https: {
        cert: fs.readFileSync(process.cwd() + "/ssl/server.crt"),
        key: fs.readFileSync(process.cwd() + "/ssl/server.key"),
      },
    },
    preview: !deploying && {
      open: true,
      host: "frontend-build.mckeogh.io",
      port: 7001,
      https: {
        cert: fs.readFileSync(process.cwd() + "/ssl/server.crt"),
        key: fs.readFileSync(process.cwd() + "/ssl/server.key"),
      },
    },
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor,
            ...renderChunks(dependencies),
          },
        },
      },
    },
    test: {
      globals: true, // for @testing-library/jest-dom. We still must import in each test for correct typings however.
      watch: false,
      mockReset: true,
      clearMocks: true,
      restoreMocks: true,
      passWithNoTests: true,
      environment: "jsdom",
      include: ["./tests/**/*.test.{ts,tsx}"],
      setupFiles: "./tests/setup.vitest.ts",
      css: {
        modules: { 
          classNameStrategy: "non-scoped",
        },
      },
    },
  });
};
