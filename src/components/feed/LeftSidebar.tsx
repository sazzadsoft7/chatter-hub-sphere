
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import {
  User,
  Users,
  Bookmark,
  Clock,
  Calendar,
  ChevronDown,
  Star,
  Flag,
  Heart,
  ShoppingBag,
  PanelLeft
} from "lucide-react";
import ProfileCard from "../profile/ProfileCard";
import { useIsMobile } from "@/hooks/use-mobile";

const LeftSidebar = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null;
  }

  return (
    <aside className="hidden md:block md:col-span-1">
      <div className="sticky top-16">
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="pr-4 py-4">
            <ProfileCard compact />
            
            <nav className="mt-4 space-y-1">
              <SidebarLink to="/profile" icon={<User className="h-5 w-5" />} label="Profile" />
              <SidebarLink to="/friends" icon={<Users className="h-5 w-5" />} label="Friends" />
              <SidebarLink to="/saved" icon={<Bookmark className="h-5 w-5" />} label="Saved" />
              <SidebarLink to="/memories" icon={<Clock className="h-5 w-5" />} label="Memories" />
              <SidebarLink to="/events" icon={<Calendar className="h-5 w-5" />} label="Events" />
              
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                <ChevronDown className="h-5 w-5 mr-3" />
                <span>See More</span>
              </Button>
            </nav>
            
            <div className="border-t my-4"></div>
            
            <div>
              <h3 className="font-semibold text-gray-500 text-sm px-3 mb-2">Your Shortcuts</h3>
              <nav className="space-y-1">
                <SidebarLink to="/groups/tech" icon={<Star className="h-5 w-5" />} label="Tech Enthusiasts" />
                <SidebarLink to="/groups/food" icon={<Heart className="h-5 w-5" />} label="Food Lovers" />
                <SidebarLink to="/pages/news" icon={<Flag className="h-5 w-5" />} label="Daily News" />
                <SidebarLink to="/marketplace" icon={<ShoppingBag className="h-5 w-5" />} label="Marketplace" />
              </nav>
            </div>
            
            <div className="mt-6 px-3 text-xs text-gray-500">
              <p>Privacy · Terms · Advertising · Cookies · More · SocialHub © 2025</p>
            </div>
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarLink = ({ to, icon, label }: SidebarLinkProps) => (
  <Button asChild variant="ghost" className="w-full justify-start text-gray-600">
    <Link to={to}>
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  </Button>
);

export default LeftSidebar;
