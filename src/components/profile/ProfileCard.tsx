
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Briefcase, Calendar } from "lucide-react";

interface ProfileCardProps {
  compact?: boolean;
}

const ProfileCard = ({ compact = false }: ProfileCardProps) => {
  return (
    <Card>
      <CardContent className={compact ? "p-3" : "p-6"}>
        <div className="flex flex-col items-center text-center">
          <Avatar className={compact ? "h-16 w-16" : "h-24 w-24"}>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <h3 className={`font-bold ${compact ? "mt-2 text-lg" : "mt-4 text-2xl"}`}>John Doe</h3>
          {!compact && <p className="text-social-darkGray mt-1">@sazzadali</p>}
          
          {!compact && (
            <>
              <p className="mt-3 text-sm text-gray-600">
                Software developer passionate about creating meaningful applications that solve real problems
              </p>
              
              <div className="w-full mt-4 space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-gray-400" />
                  <span>Software Engineer at TechCorp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>Joined April 2023</span>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6 text-sm">
                <div>
                  <div className="font-bold">250</div>
                  <div className="text-gray-500">Posts</div>
                </div>
                <div>
                  <div className="font-bold">1.2k</div>
                  <div className="text-gray-500">Friends</div>
                </div>
                <div>
                  <div className="font-bold">3.5k</div>
                  <div className="text-gray-500">Followers</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-social-blue hover:bg-social-blue/90">
                Edit Profile
              </Button>
            </>
          )}
          
          {compact && (
            <Button variant="outline" size="sm" className="mt-3 w-full text-xs">
              View Profile
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
