import Contacts from "@/home component/contact";
import Features from "@/home component/features";
import Footer from "@/home component/footer";
import Hero from "@/home component/hero";
import Navbar from "@/home component/nav";
import Platform from "@/home component/platform";
import Price from "@/home component/price";

const Home = () => {
    return ( 
        <div>
            <Navbar/>
            <Hero />
            <Features />
            <Platform />
            <Price />
            <Contacts />
            <Footer />
        </div>
     );
}
 
export default Home;