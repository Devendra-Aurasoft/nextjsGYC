import '../styles/globals.css'
import '../styles/about.css'
import '../styles/slider.css'
import '../styles/blog.css'
import '../styles/college.css'
import '../styles/popupform.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout';
import "remixicon/fonts/remixicon.css"
import "../styles/terms.module.css"
import "../styles/form.css"
import "../styles/header.css"
import { store } from "../store/store.js"
import { Provider } from 'react-redux'
import { wrapper } from '../store/store'
import { ToastContainer } from 'react-toastify'
import Router from 'next/router'
import { useState } from 'react'
import Loader from "../components/Loader"
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
    console.log("routing is connecting .... ", url);
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
    console.log("routing is connecting Completed .... ", url);
  })
  return <>
    <Provider store={store}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        {Loading && <Loader />}
        <Component {...pageProps} />
        <ToastContainer position="top-right" limit={1} />
      </Layout>
    </Provider>
  </>
}

export default MyApp
