
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Mock data for friend suggestions
const FRIEND_SUGGESTIONS = [
  {
    id: 1,
    name: "Sarah Johnson",
    mutual: 5,
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Mike Williams",
    mutual: 3,
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Emma Clark",
    mutual: 7,
    avatar: "/placeholder.svg"
  }
];

const FriendSuggestions = () => {
  const { toast } = useToast();

  const handleAddFriend = (id: number, name: string) => {
    // Simulate API call
    toast({
      title: "Friend request sent",
      description: `You sent a friend request to ${name}`
    });
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">People You May Know</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {FRIEND_SUGGESTIONS.map(friend => (
          <div key={friend.id} className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={friend.avatar} />
              <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{friend.name}</p>
              <p className="text-xs text-muted-foreground">{friend.mutual} mutual friends</p>
            </div>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => handleAddFriend(friend.id, friend.name)}
            >
              Add
            </Button>
          </div>
        ))}
        
        <Button variant="link" className="text-social-blue w-full mt-2">
          See More
        </Button>
      </CardContent>
    </Card>
  );
};

export default FriendSuggestions;
