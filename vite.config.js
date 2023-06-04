import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["date-fns"],
      external: ["react-date-range"],
      // ...other rollup options
    },
  },
});
