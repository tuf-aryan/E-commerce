"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});
interface NavProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}
const NavbarItem = ({ href, isActive, children }: NavProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-transparent hover:bg-transparent rounded-full hover:border-primary  px-3 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}> {children}</Link>
    </Button>
  );
};

const navbarThings = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  const [sideBarOpen ,setSideBarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          FunRoad
        </span>
      </Link>

      <NavbarSidebar open={sideBarOpen} onOpenChange={setSideBarOpen} item={navbarThings} />
      <div className="flex items-center gap-4 hidden lg:flex">
        {navbarThings.map((el) => (
          <NavbarItem
            key={el.href}
            href={el.href}
            isActive={pathname === el.href}
          >
            {el.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
        asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href='/sign-in'>
          Log in
          </Link>
        </Button>
        <Button
        asChild
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-pink-400 bg-black text-white hover:text-black transition-colors text-lg"
        >
          <Link href="/sign-up">
          Start Selling
          </Link>
        </Button>
      </div>
      <div className="flex lg:hidden items-center justify-center">
       <Button variant='ghost' className="size-12 border-transparent bg-white" onClick={()=>setSideBarOpen(true)}>
        <MenuIcon/>
       </Button>
      </div>
    </nav>
  );
};

export default Navbar;
