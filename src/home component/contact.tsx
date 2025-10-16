import { useInView } from "react-intersection-observer";

const Contacts = () => {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});


    return ( 
        <div ref={ref} id="contact" className={`pb-10 border-b-[1px] border-gray-200 ${inView ? "animate-fadeIn" : "opacity-0"}`}>
            <h1 className="text-center text-5xl font-bold pt-12 pb-5 max-sm:py-6 max-sm:text-2xl">Get In Touch With us</h1>
            <p className="text-center text-xl max-sm:text-[15px] max-sm:px-6 opacity-50">Have questions, feedback, or a partnership inquiry? We'd love to hear from you</p>
            <p className="text-center text-xl max-sm:text-[15px] max-sm:px-6 opacity-50 pb-10">Fill out the form below and we'll get back to you shortly.</p>

            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-[90%] sm:w-[75%] pb-12">
                    <div className="w-full border border-gray-300 rounded-[5px]">
                        <div className="px-6 pt-6 pb-6">
                            <label className="block py-2 text-lg">Your Name</label>
                            <input type="text" placeholder="John Doe" required className="w-full border border-gray-300 h-12 rounded-[5px] px-2" />
                        </div>
                        <div className="px-6 pb-6">
                            <label className="block py-2 text-lg">Your Email</label>
                            <input type="email" name="" id="" placeholder="John.doe@example.com" required className="w-full border border-gray-300 h-12 rounded-[5px] px-2" />
                        </div>
                        <div className="px-6 pb-6">
                            <label className="block py-2 text-lg">Your Message</label>
                            <textarea name="" id="" placeholder="Type your message here..." required className="w-full border border-gray-300 rounded-[5px] px-2 h-32"></textarea>
                            <input type="hidden" name="_captcha" value="false" />
                        </div>
                        <div className="px-6 pb-6">
                            <input type="submit" value="Send message" className="w-full bg-[#4A67F8] h-10 text-white rounded-[2px] text-lg hover:border hover:border-[#4A67F8] hover:text-black hover:bg-white hover:shadow-lg hover:scale-105 transition-transform duration-300" />
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contacts;