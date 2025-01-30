import { defineConfig} from "electron-vite";
import react from "@vitejs/plugin-react-swc";
import {UserConfigExport} from "vite";

export default defineConfig({
  main: {} as UserConfigExport,
  preload: {} as UserConfigExport,
  renderer: {
    plugins: [react()]
  }
});
