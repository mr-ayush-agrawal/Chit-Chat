import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: "3000",
    proxy: {
      "/auth": {
        target: "http://localhost:5000/",
      },
      "/users" : {
        target: "http://localhost:5000/users"
      },
      "/messges" : {
        target: "http://localhost:5000/messages"
      },
    }
  }
})
