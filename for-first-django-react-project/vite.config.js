import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({command, mode })=>{
  if (command === 'serve') {
    return {
      plugins: [react()],
      // server:{
      //   proxy:{
      //     '/api':{
      //       target:'http://localhost:8000',
            
            
            
      //     },
          
      //   },
      // },
    }
  } else {
    return {
      base:'/static/',
      // server:{
      //   proxy:{
      //     '/api':{
      //       target:'http://localhost:8000',
            
            
           
      //     },
         
      //   },
      // },
      plugins: [react()],
      build:{
        
        rollupOptions:{
          input:{
            'react_app':'src/main.jsx'
          },
          output:{
            entryFileNames:"react_app/assets/[name].js",
            assetFileNames:"react_app/assets/[name][extname]",
          }
    
        }
      },
    }
  }


})

  

