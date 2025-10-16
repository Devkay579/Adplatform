import { Card, CardContent, CardHeader, CardIcon, CardTitle } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const Features = () => {
    const { ref, inView } = useInView({threshold: 0.2, triggerOnce: true,});


    return ( 
        <div ref={ref} className={`bg-gray-100 w-full h-auto px-10 pb-20 parent ${inView ? 'start-animations' : ''}`} id="features">
            <h1 className="text-center text-5xl font-bold py-12 max-sm:text-2xl">Comprehensive Features for Growth</h1>
            <div className={`david grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6`}>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInFirst card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/mail.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Newsletter Management
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Create, send and manage your email campaigns with ease, ensuring high <br /> deliverability</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInSecond card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/2.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Advanced <br />Analytics
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Gain deep insights into your audience behavior and campaign performance with detailed reports.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInThird card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/3.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Audience <br /> Targeting
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Precisely segment your audience to deliver highly relevant content and advertisements.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInFourth card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/4.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Revenue <br /> Tracking
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Monitor your earnings and optimize strategies with real-time revenue performance <br /> data.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInFifth card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/5.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            GDPR <br /> Compliance
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Ensure your operations adhere to global data privacy regulations with built-in <br /> tools.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInSixth card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/6.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            SMTP <br /> Intergration
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Seamlessly connect with your preferred SMTP providers for reliable email <br />sending.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInSeventh card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/7.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Publisher Dashboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Manage your content, track reader engagement, and optimize ad placements from one place.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInEight card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/8.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Global <br /> Reach
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Expand your audience worldwide with tools designed for international content distribution.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInNinth card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/9.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Admin <br /> Panel
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Centralized control for platform settings, user management, and overall system <br /> configuration.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInTenth card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/10.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Links <br /> Marketing
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Optimize your campaign links for better click-through rates and deeper user engagement across all channels.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInEleventh card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/11.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Location <br /> Tracking
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Understand audience geographical distribution to tailor localized campaigns and content effectively.</p></CardContent>
                </Card>
                <Card className="border-0 shadow-lg rounded-[5px] opacity-0 animate-fadeInTwelve card hover:shadow-lg hover:scale-105 transition-transform duration-300">
                    <CardIcon>
                        <img src="images/12.png" alt="" />
                    </CardIcon>
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">
                            Cross-Channel Attribution
                        </CardTitle>
                    </CardHeader>
                    <CardContent><p className="opacity-50">Analyze user journeys across multiple touchpoints to accurately credit marketing channels and optimize spend.</p></CardContent>
                </Card>
                
                
            </div>
        </div>
     );
}
 
export default Features;