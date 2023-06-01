import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return defineConfig({
    publicPath: env.NODE_ENV === "production" ? env.VITE_APP_BASE_URL : "/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
