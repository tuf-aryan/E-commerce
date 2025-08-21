
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Link from "next/link";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  item: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ item, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none ">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {item.map((el) => (
            <Link
              href={el.href}
              key={el.href}
              className="w-full p-4 hover:bg-black hover:text-white flex items-center text-left text-base font-medium"
              onClick={()=>onOpenChange(false)}
            >
              {el.children}
            </Link>
          ))}
          <div className="border-t">
           <Link href='/sign-in' onClick={()=>onOpenChange(false)}  className="w-full p-4 hover:bg-black hover:text-white flex items-center text-left text-base font-medium">Log In</Link>
           <Link href="sign-up" onClick={()=>onOpenChange(false)}  className="w-full p-4 hover:bg-black hover:text-white flex items-center text-left text-base font-medium">Start Selling</Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
