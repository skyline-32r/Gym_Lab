import { useEffect } from 'react'
import Head from 'next/head'
// import '@/styles/globals.scss'
// import '@/styles/product.scss'
// import '@/styles/cart.css'
import '@/styles/globals.css'
import { createTheme, colors, ThemeProvider } from '@mui/material'
import '@/styles/layout.css'
import '@/styles/online-courses/react-video-player.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import ActiveLinkProvider from '@/context/active-link-context'
import Layout from '@/components/layout'
import { AuthContextProvider } from '@/context/auth-context'
import { CartContextProvider } from '@/context/navbar-cart/index'
import MuiNavbar from '@/components/testing/MuiNavbar'
const theme = createTheme({
  palette: {
    secondary: {
      main: '#00f0ff',
    },
    text: {
      // primary: '#fff',
    },
  },
  typography: {
    allVariants: {
      // color: 'white',
      // color:'black',
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ActiveLinkProvider>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Head>
                <title>GymLab</title>
              </Head>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </LocalizationProvider>
          </ThemeProvider>
        </ActiveLinkProvider>
      </CartContextProvider>
    </AuthContextProvider>
  )
}
