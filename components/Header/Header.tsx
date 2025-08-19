// "use client";
// import styles from "./Header.module.css";
// import Link from "next/link";
// import JoloLogo from "@/public/images/JoloLogo.svg";
// import Image from "next/image";
// import Badge from "../Badge/Badge";
// import { FaGooglePlay, FaApple } from "react-icons/fa";
// export default function Header() {
//   return (
//     <header className="w-full bg-[var(--joloOrange)] shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         <Link href="/" className="text-xl font-bold">
//           <Image src={JoloLogo} alt="Jolo Logo" width={32} height={32} />
//         </Link>

//         <nav className="flex gap-6 text-[var(--background-color)]">
//           <Link href="/Partners" className="hover:text-blue-500">
//             Partners
//           </Link>
//           <Link href="/Company" className="hover:text-blue-500">
//             Company
//           </Link>
//           <Link href="/Customers" className="hover:text-blue-500">
//             Customers
//           </Link>
//           <Link href="/contact" className="hover:text-blue-500">
//             Contact
//           </Link>
//           {/* download Apps for Apple and Playstore */}
//           <Badge href="/download">
//             <FaGooglePlay className="w-5 h-5" />
//             <FaApple className="w-5 h-5" />
//           </Badge>
//         </nav>
//       </div>
//     </header>
//   );
// }
"use client";
import Link from "next/link";
import JoloLogo from "@/public/images/JoloLogo.svg";
import Image from "next/image";
import Badge from "../Badge/Badge";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-[var(--joloOrange)] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src={JoloLogo} alt="Jolo Logo" width={40} height={40} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-8 text-[var(--background-color)] font-medium">
          <Link href="/Partners" className="hover:text-blue-500">
            Partners
          </Link>
          <Link href="/Company" className="hover:text-blue-500">
            Company
          </Link>
          <Link href="/Customers" className="hover:text-blue-500">
            Customers
          </Link>
          <Link href="/contact" className="hover:text-blue-500">
            Contact
          </Link>
        </nav>

        {/* Play and App store  */}
        <div className="flex-shrink-0">
          <Badge href="/download">
            <FaGooglePlay className="w-5 h-5" />
            <FaApple className="w-5 h-5" />
          </Badge>
        </div>
      </div>
    </header>
  );
}
