import { Logo } from "@/components/libraryIcons";
// import { Facebook, Twitter, GooglePlus, Instagram } from './libraryIcons';

export default function Footer() {
    return (
        <footer className="bg-slate-700 text-white">
            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Logo className="w-8 h-8 text-white" />
                            <span className="text-xl font-semibold">Martin's Movies</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque,
                            ducimus, atque. Praesentium suscipit provident explicabo
                            dignissimos nostrum numquam deserunt earum accusantium et fugit.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Movify</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Forum</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">My Account</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Watch List</a></li>
                        </ul>
                    </div>

                    {/* Latest News */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Latest News</h3>
                        <div className="space-y-3">
                            <div>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block">Blog Post 1</a>
                                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">JANUAR 13, 2018</p>
                            </div>
                            <div>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block">Blog Post 2</a>
                                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">JANUAR 13, 2018</p>
                            </div>
                            <div>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm block">Blog Post 3</a>
                                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">JANUAR 13, 2018</p>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque,
                            ducimus, atque.
                        </p>
                        {/* <div className="flex space-x-3">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <GooglePlus className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-slate-600">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <div className="flex flex-wrap gap-4 text-sm">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy & Cookies</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Legal Disclaimer</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
                        </div>
                        <p className="text-sm text-gray-400">All Rights Reserved by Martin's Movies.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
