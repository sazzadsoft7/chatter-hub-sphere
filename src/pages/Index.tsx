
import { useState } from "react";
import Navbar from "@/components/navigation/Navbar";
import LeftSidebar from "@/components/feed/LeftSidebar";
import RightSidebar from "@/components/feed/RightSidebar";
import CreatePostCard from "@/components/feed/CreatePostCard";
import PostCard, { PostProps } from "@/components/feed/PostCard";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Newspaper, Clock, Bookmark } from "lucide-react";

// Mock data for posts
const MOCK_POSTS: PostProps[] = [
  {
    id: "1",
    author: {
      name: "Jane Smith",
      username: "janesmith",
      avatar: "/placeholder.svg"
    },
    content: "Just launched my new portfolio website! Check it out and let me know what you think. 😊 #webdesign #portfolio",
    createdAt: "2 hours ago",
    likes: 42,
    comments: 12,
    shares: 3
  },
  {
    id: "2",
    author: {
      name: "Tech Insights",
      username: "techinsights",
      avatar: "/placeholder.svg"
    },
    content: "The future of web development is here with AI-assisted coding. What are your thoughts on how this will change the industry?",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    createdAt: "5 hours ago",
    likes: 128,
    comments: 32,
    shares: 15
  },
  {
    id: "3",
    author: {
      name: "Michael Johnson",
      username: "michaelj",
      avatar: "/placeholder.svg"
    },
    content: "Had an amazing hiking trip this weekend! The views were absolutely breathtaking. 🏔️",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    createdAt: "1 day ago",
    likes: 89,
    comments: 14,
    shares: 5
  },
  {
    id: "4",
    author: {
      name: "Sarah Williams",
      username: "sarahw",
      avatar: "/placeholder.svg"
    },
    content: "Just finished reading this incredible book on personal development. Highly recommend to anyone looking to improve their mindset and habits!",
    createdAt: "1 day ago",
    likes: 65,
    comments: 8,
    shares: 2
  }
];

const Index = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("feed");

  return (
    <div className="min-h-screen bg-social-gray">
      <Navbar />
      
      <main className="social-container pt-4 pb-16">
        {/* Mobile Tabs */}
        {isMobile && (
          <Tabs defaultValue="feed" className="mb-4">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="feed" onClick={() => setActiveTab("feed")}>
                <Newspaper className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="friends" onClick={() => setActiveTab("friends")}>
                <Users className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="saved" onClick={() => setActiveTab("saved")}>
                <Bookmark className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="memories" onClick={() => setActiveTab("memories")}>
                <Clock className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}
        
        <div className="feed-container">
          <LeftSidebar />
          
          <div className="col-span-1 md:col-span-2">
            <CreatePostCard />
            
            <div className="hidden md:flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Feed</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Latest</Button>
                <Button variant="ghost" size="sm">Popular</Button>
              </div>
            </div>
            
            {MOCK_POSTS.map(post => (
              <PostCard key={post.id} {...post} />
            ))}
            
            <div className="flex justify-center my-6">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
          
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
