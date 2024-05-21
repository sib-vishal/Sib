import Head from 'next/head';
import Layout from '../comps/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import '../public/assets/css/style.css';
import '../public/assets/css/responsive.css';

function MyApp({ Component, pageProps }) {

  return (
    <HelmetProvider>
      <Layout>
        <Head>
          <meta charset="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="DC.title" content="SIB Infotech" />
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Mumbai" />
          <meta name="geo.position" content="18.938771;72.835336" />
          <meta name="ICBM" content="18.938771, 72.835336" />

          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no, shrink-to-fit=no" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="YahooSeeker" content="Index,Follow" />
          <meta name="document-distribution" content="Global" />
          <meta name="language" content="English" />
          <meta property="og:locale" content="en_IN" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="SIB Infotech - Digital Marketing Company in India" />
          <meta property="og:image:alt" content="SIB Infotech Logo" />
          <meta property="og:image:type" content="webp" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@sibinfotech" />
          <meta name="twitter:creator" content="@sibinfotech" />
          <meta name="twitter:label1" content="Time to read" />
          <meta name="twitter:data1" content="2 minutes" />
          <meta name="abstract" content="Website Designing And Digital Marketing Services Company India" />
          <meta name="Classification" content="Business" />
          <meta name="Classification" content="SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience." />
          <meta name="dc.source" content="https://www.sibinfotech.com/" />
          <meta name="dc.title" content="Website Designing And Digital Marketing Services Company India" />
          <meta name="dc.keywords" content="Best Web Design Agency Mumbai, Web designing agency, Website Designing Company In Mumbai,website design services in india, web design services india, Website development agency, Web development company, Best Web Development Company Mumbai, Web development company in India." />
          <meta name="dc.subject" content="SIB Infotech" />
          <meta name="dc.description" content="SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience." />
          <link rel="publisher" href="https://www.google.com/search?q=sib+infotech" />
          <meta name="Author" content="SIB Infotech" />
          <meta name="page-topic" content="Website Designing & Development, Digital Marketing Company Mumbai India " />
          <meta name="copyright" content="SIB Infotech" />
          <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
          <meta name="rating" content="safe for kids" />
          <meta name="googlebot" content=" index, follow " />
          <meta name="bingbot" content=" index, follow " />
          <meta name="reply-to" content="contact@sibinfotech.com" />
          <meta name="allow-search" content="yes" />
          <meta name="revisit-after" content="daily" />
          <meta name="distribution" content="global" />
          <meta name="Rating" content="General" />
          <meta name="expires" content="never" />

          <link rel="preload" href="/assets/images/banner/banner-video.mp4" as="video/mp4" />
          <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
          <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
          <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
          <link rel="preload" href="https://unpkg.com/aos@2.3.1/dist/aos.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
          <noscript><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" /></noscript>
          <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /></noscript>
          <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" /></noscript>
          <noscript><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /></noscript>

          {/* <link rel="apple-touch-icon" href="/logo192.png" /> */}
          {/* <link rel="manifest" href="/manifest.json" /> */}

        </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </HelmetProvider>
  )
}

export default MyApp
