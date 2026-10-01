import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// base "./": el build (carpeta dist) funciona desde cualquier carpeta o hosting estático
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
