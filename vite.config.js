<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
=======

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
>>>>>>> 8af41ba (Assistant checkpoint: Updated Vite config for Replit deployment)

export default defineConfig({
<<<<<<< HEAD
  base: "/personal_website/",
  plugins: [react()],
=======
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  }
>>>>>>> 8af41ba (Assistant checkpoint: Updated Vite config for Replit deployment)
});
