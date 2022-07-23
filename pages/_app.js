import Footer from "../components/layout/footer/Footer";
import Header from "../components/layout/header/Header";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="darkTheme">
      <Header />
      <div className="body">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
