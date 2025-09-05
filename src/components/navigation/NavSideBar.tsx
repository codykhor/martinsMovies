// "use client"
//
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Sheet, SheetContent } from "@/components/ui/sheet";
//
// interface SideNavProps {
//     isOpen: boolean;
//     onClose: () => void;
// }
//
// const navItems = [
//     { label: "Home", path: "/", count: 4 },
//     { label: "Pages", path: "/pages", count: 11 },
//     { label: "Movies & TV Shows", path: "/movies", count: 9 },
//     { label: "Blog", path: "/blog", count: 4 },
//     { label: "Contact Us", path: "/contact" },
// ];
//
// export default function NavSideBar({ isOpen, onClose }: SideNavProps) {
//     const pathname = usePathname();
//
//     return (
//         <Sheet open={isOpen} onOpenChange={onClose}>
//             <SheetContent className="w-80 bg-[#1C1C1C] border-l-0">
//                 <div className="flex flex-col h-full">
//                     <h2 className="text-2xl text-white mb-4">MENU</h2>
//                     <div className="flex-1">
//                         {navItems.map((item) => (
//                             <Link
//                                 key={item.path}
//                                 href={item.path}
//                                 className={`flex items-center justify-between px-2 py-3 ${pathname === item.path ? "text-primary" : "text-gray-300 hover:text-primary"
//                                     }`}
//                             >
//                                 <span>{item.label}</span>
//                                 {item.count && (
//                                     <span
//                                         className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                                         {item.count}
//                                     </span>
//                                 )}
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             </SheetContent>
//         </Sheet>
//     );
// }
