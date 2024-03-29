import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  devServer: {
    proxy: {
      "/chatgpt-server": {
        // target: "http://124.223.14.000",
        target: "http://10.100.117.000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // transpileDependencies: true,
  // // lintOnSave:false,
  // devServer: {
  //   port: 8080, // 端口
  //   proxy: {
  //     '/api': {  //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
  //       target: 'http://localhost:80',  //这里写路径 
  //       pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
  //       ws: true,  //用于支持websocket
  //       changeOrigin: true   //用于控制请求头中的host值
  //     },
  //   }
  // }
})
