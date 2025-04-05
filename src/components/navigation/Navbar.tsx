
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Users, 
  MessageSquare, 
  Bell, 
  Menu, 
  Search,
  User
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="social-container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="text-social-blue text-2xl font-bold">
              SocialHub
            </Link>
            
            {!isSearchOpen && !isMobile && (
              <div className="ml-4 relative w-64">
                <Input
                  placeholder="Search"
                  className="pl-10 bg-social-gray rounded-full text-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            )}
          </div>

          {/* Mobile search button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
          
          {/* Desktop Nav Links */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-1">
              <NavButton icon={<Home className="h-5 w-5" />} active />
              <NavButton icon={<Users className="h-5 w-5" />} />
              <NavButton icon={<MessageSquare className="h-5 w-5" />} />
              <NavButton icon={<Bell className="h-5 w-5" />} />
            </div>
          )}

          {/* User Menu */}
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu toggle */}
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/" className="flex items-center">
                      <Home className="mr-2 h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/friends" className="flex items-center">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Friends</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/messages" className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/notifications" className="flex items-center">
                      <Bell className="mr-2 h-4 w-4" />
                      <span>Notifications</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Mobile Search Bar (expanded when clicked) */}
        {isSearchOpen && isMobile && (
          <div className="pb-3 px-2">
            <div className="relative">
              <Input
                placeholder="Search"
                className="pl-10 bg-social-gray rounded-full text-sm w-full"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  active?: boolean;
}

const NavButton = ({ icon, active = false }: NavButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`h-12 w-12 rounded-md ${
        active
          ? "text-social-blue after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-social-blue"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {icon}
    </Button>
  );
};

export default Navbar;
