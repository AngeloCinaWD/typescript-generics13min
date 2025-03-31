// file creato a mano
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // posso mettere qui le impostazioni che voglio in fase di run server
    // oppure nel package.json: "dev": "vite --host 0.0.0.0 --port 4200" (guardare vite cli)
    port: 4300,
    host: '0.0.0.0',
  },
});
