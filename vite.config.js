import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api':{
        target:'http://localhost:8000',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }//so this creates a proxy for the api so that we dont get the cors error and we can directly fetch the data from the api so whenever we have /api in the url it will be replaced by the target url
      //so when deploy only change is needed here in the proxy to change the target url rest all remains same
    }
  },
})
