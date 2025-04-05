
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import FriendSuggestions from "./FriendSuggestions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const RightSidebar = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null;
  }

  return (
    <aside className="hidden md:block md:col-span-1">
      <div className="sticky top-16">
        <ScrollArea className="h-[calc(100vh-5rem)]">
          <div className="pl-4 py-4 space-y-4">
            <FriendSuggestions />
            <BirthdayCard />
            <TrendingTopics />
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

const BirthdayCard = () => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">Birthdays</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-social-lightBlue flex items-center justify-center text-social-blue text-lg">
          🎂
        </div>
        <p className="text-sm">
          <strong>Jane Smith</strong> and <strong>2 others</strong> have birthdays today.
        </p>
      </div>
    </CardContent>
  </Card>
);

const TrendingTopics = () => (
  <Card>
    <CardHeader className="pb-3 flex flex-row items-center justify-between">
      <CardTitle className="text-lg">Trending</CardTitle>
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <X className="h-4 w-4" />
      </Button>
    </CardHeader>
    <CardContent className="space-y-4">
      {TRENDING_TOPICS.map((topic, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">{topic.category}</p>
            {topic.new && <Badge variant="outline" className="text-[10px] h-4">New</Badge>}
          </div>
          <p className="font-medium">{topic.title}</p>
          <p className="text-xs text-muted-foreground">{topic.engagement}</p>
        </div>
      ))}
      
      <Button variant="link" className="text-social-blue w-full mt-2 p-0">
        Show more
      </Button>
    </CardContent>
  </Card>
);

const TRENDING_TOPICS = [
  {
    category: "Technology",
    title: "The future of AI in everyday applications",
    engagement: "4.5k people talking about this",
    new: true
  },
  {
    category: "Entertainment",
    title: "New blockbuster movie breaks box office records",
    engagement: "12.3k people talking about this"
  },
  {
    category: "Sports",
    title: "Championship finals scheduled for next weekend",
    engagement: "8.7k people talking about this"
  }
];

export default RightSidebar;
