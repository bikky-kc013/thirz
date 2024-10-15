import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox";
import TermsAndCondition from "../components/TermsAndCondition";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSellers></BestSellers>
      <TermsAndCondition></TermsAndCondition>
      <NewsLetterBox></NewsLetterBox>
    </div>
  );
};

export default Home;
