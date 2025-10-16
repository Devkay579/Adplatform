import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
    return ( 
        <footer>
            <div className="max-w-[90%] lg:w-3/4 mx-auto px-2 sm:px-6 lg:px-8">
                <div className="  mt-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-8 text-left justify-items-center">
                    <div className=" space-y-2">
                        <img src="" alt="logo" />
                        <h1 className="opacity-50">Empowering publishers and advertisers with advanced tools <br /> for growth and compliance.</h1>
                        <div className="flex gap-2">
                            <Facebook className="w-5 h-5" />
                            <Twitter className="w-5 h-5" />
                            <Linkedin className="w-5 h-5" />
                            <Youtube className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="font-bold mb-2">Product</h3>
                            <ul className="space-y-2">
                                <li className="opacity-50">Features</li>
                                <li className="opacity-50">Solutions</li>
                                <li className="opacity-50">Pricing</li>
                                <li className="opacity-50">Intergration</li>
                            </ul>
                        
                    </div>
                    <div className="">
                        <h3 className="font-bold mb-2">Company</h3>
                            <ul className="space-y-2">
                                <li className="opacity-50">About us</li>
                                <li className="opacity-50">Careers</li>
                                <li className="opacity-50">Press</li>
                                <li className="opacity-50">Partners</li>
                            </ul>
                        
                    </div>
                    <div className="">
                        <h3 className="font-bold mb-2">Resources</h3>
                            <ul className="space-y-2">
                                <li className="opacity-50">Blog</li>
                                <li className="opacity-50">Case Studies</li>
                                <li className="opacity-50">Whitepapers</li>
                                <li className="opacity-50">Support</li>
                            </ul>
                        
                    </div>
                    <div className="">
                        <h3 className="font-bold mb-2">Legal</h3>
                            <ul className="space-y-2">
                                <li className="opacity-50">Privacy policy</li>
                                <li className="opacity-50">Terms of service</li>
                                <li className="opacity-50">GDPR</li>
                            </ul>
                        
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-200 py-6 text-gray-500 text-center">
                <p>&copy; 2025 AdEngine Pro. All rights reserved.</p>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;