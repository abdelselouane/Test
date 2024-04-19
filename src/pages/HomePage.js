import Header from "../components/Header";
import Banner from "../components/Banner";
import Specials from "../components/Specials";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header></Header>
      <main>
        <Banner></Banner>
        <Specials></Specials>
      </main>
      <Footer></Footer>
    </>
  );
}

export default HomePage;
