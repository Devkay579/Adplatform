import { Button } from "@/components/ui/button";

const Hero = () => {
    return ( 
        <div className=" relative mt-10 z-10 h-[35rem] animate-fade-in" id="home">
            <div className=" absolute top-0 inset-0 bg-cover bg-center opacity-100" style={{backgroundImage: "url('images/hero3.jpg')"}}></div>
            <div className="relative z-20 flex py-[3.5rem] md:py-[10rem] lg:py-[7rem] justify-between mx-6 lg:mx-12 gap-1 max-sm:flex-col">
                <div className="w-[50%] max-sm:w-full max-sm:mx-2">
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-white">Unlock Your Audience Potential With AdEngine Pro</h1>
                    <p className="my-6 text-gray-900 font-[500] text-white">The all in one platform for publishers and advertisers to manage newsletters, analyze performance, and drive revenue growth efficiency</p>
                    <Button className="bg-[#4A67F8] text-white hover:bg-white hover:text-black hover:border hover:border-[1px] hover:border-[#4A67F8] cursor-pointer  animate-bounce-sm">Get Started Now</Button>
                </div>
                <div className="w-[50%] max-sm:w-full animate-bounce-sm">
                    <img src="images/hero.png" alt="hero" className="" />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;