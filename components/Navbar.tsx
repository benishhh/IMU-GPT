import Image from "next/image";
import Link from "next/link";
import logobiale from '../img/logobiale.png'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeToggler from "@/components/ThemeToggler";
import { Button } from '@/components/ui/button';
import { MenuIcon } from "lucide-react";


const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    return (
        <div className='bg-primary dark:bg-slate-700 text-white py-2 px-2 flex justify-between fixed top-0 left-0 right-0 z-50'>
            <Link href='/' className='hidden md:block'>
                <Image src={logobiale} alt='IGPT' width={40} />
            </Link>
            <Button
                className="md:hidden p-2 text-white bg-gray-900 dark:bg-gray-700"
                onClick={toggleSidebar}
            >
                 <MenuIcon className="h-6 w-6 text-white" />
            </Button>
            <div className="flex items-center">
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                            <AvatarFallback className="text-black">BP</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/auth'>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Navbar;
