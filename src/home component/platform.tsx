import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Platform = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});
   
    const tabs = [
        {
            name: "Publisher Analysis",
            content: [
                { text: "Publisher Analytics Dashboard", text2: "A comprehensive overview for publishers to track audience engagement, content performance, and monetization trends. Visualize your top-performing articles, reader demographics, and advertising revenue streams.", img: "images/platform1.png"},
                { text: "Platform Performance Trends", text2: "Visualize key metrics such as revenue and subscriber growth over time. Our intuitive charts help you pinpoint trends, identify peak performance periods, and make data-driven decisions to optimize your strategies.", img: "images/platform2.png"}
            ]
        },
        {
            name: "Advertiser Insights",
            content: [
                { text: "Advertiser Insights Dashboard", text2: "Empower advertisers with detailed campaign performance data, ad spend efficiency, and audience reach metrics. Understand your return on investment and optimize ad creatives for maximum impact.", img: "images/platform3.png"},
                { text: "Platform Performance Trends", text2: "Visualize key metrics such as revenue and subscriber growth over time. Our intuitive charts help you pinpoint trends, identify peak performance periods, and make data-driven decisions to optimize your strategies.", img: "images/platform2.png"}
            ]
        },
        {
            name: "Newsletter Performance",
            content: [
                { text: "Optimize your Email Campaigns", text2: "Dive deep into your newsletter's success with metrics on open rates, click-throughs, subscriber growth, and conversion tracking. Identify engagement patterns and refine your email strategies to maximize reach and revenue.", img: "images/platform4.png"},
                { text: "Platform Performance Trends", text2: "Visualize key metrics such as revenue and subscriber growth over time. Our intuitive charts help you pinpoint trends, identify peak performance periods, and make data-driven decisions to optimize your strategies.", img: "images/platform2.png"}
            ]
        },
    ];
   
   
   
    return ( 
        <div ref={ref} className={`mb-12 ${inView ? "animate-tiltReveal" : "opacity-0"}`} id="platform">
            <h1 className="text-center text-5xl font-bold pt-12 pb-6 max-sm:text-2xl">Your Platform, Your Insights</h1>
            <div className="flex justify-center mb-8">
                {tabs.map((tab, idx) => (
                    <Button key={idx} onClick={() => setActiveTab(idx)} className={` w-[30%] max-sm:text-[10px] text-center md:text-lg lg:w-[25%] rounded-none ${activeTab === idx ? "bg-[#4A67F8] text-white": "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                        {tab.name}

                    </Button>
                ))}
            </div>
            <div className="flex flex-col gap-6 justify-center items-center">
                {tabs[activeTab].content.map((item, i) => (
                    <div key={i} className=" w-[90%] lg:w-[75%] flex max-md:flex-wrap gap-2 max-md:gap-4 p-6 rounded-[5px] border-1 border-gray-500">
                        <div className={`w-[50%] max-md:w-full ${i % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
                            <p className="text-xl md:text-2xl lg:text-4xl mt-10 max-md:mt-2 font-[700]">{item.text}</p>
                            <p className="mt-8 max-md:mt-2 opacity-60">{item.text2}</p>
                        </div>
                        <img src={item.img} alt="" className={`w-[50%] max-md:w-full ${i % 2 !== 0 ? "md:order-1" : "md:order-2"}`} />
                    </div>
                ))}
                
            </div>
        </div>
     );
}
 
export default Platform;