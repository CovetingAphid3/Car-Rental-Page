import Pricing from "./Pricing";
import ContactUs from "../Components/ContactUs";
import Header from "../Components/Header";


const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Pricing />
      <ContactUs />
    </div>
  );
};

export default Home;
