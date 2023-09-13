"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '../../components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { store } from '../../store/store'
import { Provider } from 'react-redux'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { updateUserIsLoggedIn } from '../../features/authSlice'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vito Forex',
  description: 'Forex trading services at affordable prices',
}

export default function RootLayout({ children }) {
  
  return (
    <Provider store={store}>
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
     
        <Navbar/>
          {children}
        <Footer/>
   
      </body>
    </html>
    </Provider>
  )
}
