import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-input-range/lib/css/index.css';
import 'react-grid-dropdown/dist/style.css'

import "../styles/scss/app.scss";
import "../styles/scss/about.scss";
import "../styles/scss/autopreneur.scss";
import "../styles/scss/become-a-dealer.scss";
import "../styles/scss/brand-new-brand.scss";
import "../styles/scss/brand-new.scss";
import "../styles/scss/brandnew-details.scss";
import "../styles/scss/budget.scss";
import "../styles/scss/buy.scss";
import "../styles/scss/car-overview.scss";
import "../styles/scss/cardetails.scss";
import "../styles/scss/chat.scss";
import "../styles/scss/deals.scss";
import "../styles/scss/dropdown.scss";
import "../styles/scss/faq-accordion.scss";
import "../styles/scss/feedback.scss";
import "../styles/scss/feedback-button.scss";
import "../styles/scss/footer.scss";
import "../styles/scss/header.scss";
import "../styles/scss/hero.scss";
import "../styles/scss/home.scss";
import "../styles/scss/list.scss";
import "../styles/scss/loan.scss";
import "../styles/scss/import-car.scss";
import "../styles/scss/partnership.scss";
import "../styles/scss/security.scss";
import "../styles/scss/sell-car.scss";
import "../styles/scss/service.scss";
import "../styles/scss/socials.scss";
import "../styles/scss/corporate.scss";
import "../styles/scss/ride-hailing.scss";
import "../styles/scss/swap-car.scss";
import "../styles/scss/usedcar.scss";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
      <title>car45</title>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
        integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
        crossOrigin="anonymous"></script>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
