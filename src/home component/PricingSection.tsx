import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Price = () => {
    const { ref, inView } = useInView({threshold: 0.2, triggerOnce: true,});


    const [active, setActive] = useState(0);
    const [activebut, setActiveBut] = useState(0);

    const plans = [
        { title: "Basic", price: "$29", anim:"slideLeft", features: ["5,000 Email Sends/month", "Basic Analytics Dashboard", "Community Support", "Standard SMTP Integration", "Limited Audience Segments", "Monthly Reports"], but: "Start Plan" },
        { title: "Pro", price: "$99", anim:"slideUp", features: ["Unlimited Email Sends", "Advanced Analytics Dashboard", "Dedicated Email Support", "Custom SMTP Integration", "Unlimited Audience Segments", "Real-time Revenue Tracking", "A/B Testing", "GDPR Compliance Tools"], but: "Start Pro Plan" },
        { title: "Enterprise", price: "$499", anim:"slideRight", features: ["Custom Email Volume", "Full Suite Analytics & BI", "Priority 24/7 Support", "On-premise SMTP Deployment", "Advanced AI-powered Targeting", "Custom Integrations", "Dedicated Account Manager", "Multi-user Admin Panel", "Premium Security Features"], but: "Contact Sales" }
    ];



    return ( 
        <div ref={ref} className="bg-gray-100 pb-12" id="pricing">
            <div className={`${ inView ? "animate-fadeIn" : "opacity-0"}`}>
                <h1 className={`text-center text-5xl font-bold pt-12 pb-5 max-sm:py-6 max-sm:text-2xl`}>Simple, Transparent Pricing</h1>
                <p className={`text-center text-xl max-sm:text-[15px] max-sm:px-6 opacity-60 pb-10 `}>Choose the plan that best fits your needs,from growing startups to large <br />enterprises. No hidden fees, no long-term contracts.</p>
            </div>

            <div className="flex items-center justify-center">
                <div className={`grid grid-cols-1 sm:grid-cols-3 w-[90%] gap-6 ${inView ? "start-animations": ""}`}>
                    {plans.map((plan, index) => {
                        // const { ref, inView } = useInView({triggerOnce: true, threshold: 0.2 });

                        return(
                            <div key={index} ref={ref} onClick={() => setActive(index)} className={`card p-6 border rounded-[2px] cursor-pointer transition-colors hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col justify-between
                            ${active === index ? "bg-blue-50 border-blue-500" : "bg-white border-gray-300 hover:border-blue-300"} ${plan.anim === "slideLeft" && inView ? "animate-slideLeft" : "" } ${plan.anim === "slideUp" && inView ? "animate-slideUp" : "" } ${plan.anim === "slideRight" && inView ? "animate-slideRight" : "" }`} style={{animationPlayState: inView ? "running" : "paused"}}>
                                <div>
                                    <h3 className="text-2xl sm:text-4xl mb-4 font-bold">{plan.title}</h3>
                                    <p className="mb-4"><span className="text-2xl sm:text-4xl font-bold">{plan.price}</span> <span className="opacity-50">/month</span></p>
                                    <ul>{plan.features.map((feature, i) => (
                                        <li key={i} className="py-1"><span className="text-[#4A67F8]">&#10003;</span><span className="px-2 text-[12px] lg:text-md max-sm:text-lg">{feature}</span></li>
                                    ))}
                                    </ul>
                                </div>
                                <Button onClick={() => setActiveBut(index)} className={` mt-4 border ${active === index ? "bg-[#4A67F8] text-white hover:bg-white hover:border-[#4A67F8] hover:text-black" : "text-black bg-white hover:border-blue-300"}`}>{plan.but}</Button>
                
                        </div>
                        )
                    })}
                </div>
            </div>


        </div>
     );
}
 
export default Price;