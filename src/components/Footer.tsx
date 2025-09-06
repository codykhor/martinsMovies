import {GoogleIcon, Logo} from "@/components/libraryIcons";
import {Facebook, Instagram, Twitter, LucideIcon} from 'lucide-react';
import Link from "next/link";

const usefulLinks = [
    {label: "About Martin's Movies", href: "#"},
    {label: "Blog", href: "#"},
    {label: "Forum", href: "#"},
    {label: "My Account", href: "#"},
    {label: "Watch List", href: "#"},
];

const newsItems = [
    {title: "Blog Post 1", href: "#", date: "JANUARY 13, 2018"},
    {title: "Blog Post 2", href: "#", date: "JANUARY 13, 2018"},
    {title: "Blog Post 3", href: "#", date: "JANUARY 13, 2018"},
];

const socialLinks = [
    {Icon: Facebook, href: "#", props: {fill: "white"}, hoverColor: "hover:bg-blue-600 hover:border-blue-600"},
    {Icon: Twitter, href: "#", props: {fill: "white"}, hoverColor: "hover:bg-sky-500 hover:border-sky-500"},
    {Icon: GoogleIcon, href: "#", hoverColor: "hover:bg-red-600 hover:border-red-600"},
    {Icon: Instagram, href: "#", hoverColor: "hover:bg-amber-700 hover:border-amber-700"},
];

const legalLinks = [
    {label: "Privacy & Cookies", href: "#"},
    {label: "Terms & Conditions", href: "#"},
    {label: "Legal Disclaimer", href: "#"},
    {label: "Community", href: "#"},
];

const LinkItem = ({href, children, className = ""}: {
    href: string;
    children: React.ReactNode;
    className?: string
}) => (
    <a href={href} className={`hover:text-primary transition-colors text-base ${className}`}>
        {children}
    </a>
);

const SocialIcon = ({Icon, href, props = {}, hoverColor = "hover:bg-purple-600 hover:border-purple-600"}: {
    Icon: LucideIcon | React.ComponentType<any>;
    href: string;
    props?: any;
    hoverColor?: string;
}) => (
    <Link href={href}
          className={`w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center ${hoverColor} transition-all duration-300`}
    >
        <Icon className="w-3 h-3" {...props} />
    </Link>
);

const NewsItem = ({title, href, date}: { title: string; href: string; date: string }) => (
    <div>
        <LinkItem href={href} className="block">
            {title}
        </LinkItem>
        <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">{date}</p>
    </div>
);

export default function Footer() {
    return (
        <footer className="bg-[#3e4555] text-white">
            <div className="mx-auto px-4 py-28 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4 mb-2">
                        <div className="flex items-center space-x-2 mb-10">
                            <Logo className="w-7 h-7 text-white"/>
                            <span className="text-2xl font-semibold text-nowrap">Martin's Movies</span>
                        </div>
                        <p className="text-white text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque,
                            ducimus, atque. Praesentium suscipit provident explicabo
                            dignissimos nostrum numquam deserunt earum accusantium.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-10 text-white">
                        <h3 className="text-2xl font-semibold">Useful Links</h3>
                        <ul className="space-y-2">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <LinkItem href={link.href}>{link.label}</LinkItem>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Latest News */}
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold text-white">Latest News</h3>
                        <div className="space-y-3">
                            {newsItems.map((item, index) => (
                                <NewsItem
                                    key={index}
                                    title={item.title}
                                    href={item.href}
                                    date={item.date}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-10">
                        <h3 className="text-2xl font-semibold text-white">Follow Us</h3>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque,
                            ducimus, atque.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <SocialIcon
                                    key={index}
                                    Icon={social.Icon}
                                    href={social.href}
                                    props={social.props}
                                    hoverColor={social.hoverColor}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom footer */}
            <div className="border-t border-slate-600">
                <div className="max-w-7xl mx-auto px-4 py-8 md:max-w-[1140px]">
                    <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                        <div className="flex flex-wrap gap-4 text-base justify-center lg:justify-start">
                            {legalLinks.map((link, index) => (
                                <LinkItem key={index} href={link.href}>
                                    {link.label}
                                </LinkItem>
                            ))}
                        </div>
                        <p className="text-base text-center lg:text-right">All Rights Reserved by Martin's Movies.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
