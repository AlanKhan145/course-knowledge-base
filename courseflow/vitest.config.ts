import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/unit/**/*.test.ts"],
    exclude: ["tests/e2e/**", "node_modules/**"],
    // discovery tests build real folder trees in os.tmpdir(); allow for a slow disk
    testTimeout: 30_000,
    hookTimeout: 30_000,
  },
});
