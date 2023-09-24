import { resolve } from 'path'
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root =  resolve(__dirname,'src')
const outDir =  resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build:{
    outDir,
    emptyOutDir:true,
    rollupOptions:{
      input:{
        main: resolve(root,'index.html'),
        Signup: resolve(root,'Signuppage','index.html'),
        Login: resolve(root,'Loginpage','index.html'),
      }
    }
  }

})
