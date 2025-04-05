
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/navigation/Navbar";
import ProfileCard from "@/components/profile/ProfileCard";
import PostCard from "@/components/feed/PostCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Camera } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-social-gray">
      <Navbar />
      
      <div className="relative">
        {/* Cover Image */}
        <div className="h-56 bg-gradient-to-r from-blue-400 to-purple-500 relative">
          <Button 
            variant="secondary" 
            size="sm" 
            className="absolute bottom-4 right-4 flex items-center gap-1"
          >
            <Camera className="h-4 w-4" />
            <span>Edit Cover</span>
          </Button>
        </div>
        
        {/* Profile Image - positioned to overlap */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <Avatar className="h-40 w-40 border-4 border-white">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button 
              variant="secondary" 
              size="icon" 
              className="absolute bottom-1 right-1 rounded-full h-8 w-8 bg-white hover:bg-gray-100"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Profile Details */}
      <div className="mt-24 text-center">
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p className="text-social-darkGray">Software Developer | Tech Enthusiast</p>
        
        <div className="flex justify-center gap-2 mt-4">
          <Button className="bg-social-blue hover:bg-social-blue/90">Add Friend</Button>
          <Button variant="outline">Message</Button>
        </div>
      </div>
      
      {/* Tabs & Content */}
      <div className="social-container mt-6 pb-10">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <IntroCard />
                <PhotosCard />
              </div>
              
              <div className="md:col-span-2 space-y-4">
                {MOCK_POSTS.map(post => (
                  <PostCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="about">
            <div className="max-w-2xl mx-auto mt-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">About</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Bio</h3>
                      <p>
                        Software developer with 5 years of experience building web applications.
                        Passionate about creating user-friendly interfaces and solving complex problems.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Work</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="font-medium">Software Engineer at TechCorp</div>
                          <div className="text-social-darkGray text-sm">2020 - Present</div>
                        </div>
                        <div>
                          <div className="font-medium">Frontend Developer at WebSolutions</div>
                          <div className="text-social-darkGray text-sm">2018 - 2020</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Education</h3>
                      <div className="space-y-2">
                        <div>
                          <div className="font-medium">Computer Science, University of Technology</div>
                          <div className="text-social-darkGray text-sm">2014 - 2018</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                      <div className="space-y-1 text-sm">
                        <div>
                          <span className="font-medium mr-2">Email:</span>
                          <span>john.doe@example.com</span>
                        </div>
                        <div>
                          <span className="font-medium mr-2">Website:</span>
                          <span>johndoe.dev</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="friends">
            <div className="max-w-4xl mx-auto mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Friends</h2>
                    <Button variant="outline" size="sm">Find Friends</Button>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                      <FriendCard key={i} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const IntroCard = () => (
  <Card className="mb-4">
    <CardContent className="p-4">
      <h2 className="font-bold text-lg mb-3">Intro</h2>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>Lives in San Francisco, CA</span>
        </div>
        <div className="flex items-center gap-2">
          <span>💼</span>
          <span>Works at TechCorp</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🎓</span>
          <span>Studied at University of Technology</span>
        </div>
        <div className="flex items-center gap-2">
          <span>🗓️</span>
          <span>Joined April 2023</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full mt-4 text-sm">
        Edit Details
      </Button>
    </CardContent>
  </Card>
);

const PhotosCard = () => (
  <Card>
    <CardContent className="p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold text-lg">Photos</h2>
        <Button variant="link" className="p-0 h-auto text-social-blue">See All</Button>
      </div>
      
      <div className="grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Image className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const FriendCard = () => (
  <div className="text-center">
    <Avatar className="h-24 w-24 mx-auto">
      <AvatarImage src="/placeholder.svg" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <h3 className="font-medium mt-2">Jane Smith</h3>
    <Button variant="ghost" size="sm" className="mt-1 text-xs text-social-blue">
      View Profile
    </Button>
  </div>
);

// Mock Data for Posts
const MOCK_POSTS = [
  {
    id: "1",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content: "Just finished working on a new feature for my app. Can't wait to share it with everyone! 🚀 #coding #webdev",
    createdAt: "2 hours ago",
    likes: 24,
    comments: 5,
    shares: 2,
    hasLiked: true,
  },
  {
    id: "2",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content: "Beautiful sunset at the beach today! 🌅",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    createdAt: "1 day ago",
    likes: 152,
    comments: 18,
    shares: 7,
  },
  {
    id: "3",
    author: {
      name: "John Doe",
      username: "johndoe",
    },
    content: "Excited to announce that I'll be speaking at the upcoming tech conference next month! If you're attending, let's connect! 🎤",
    createdAt: "3 days ago",
    likes: 87,
    comments: 14,
    shares: 5,
  },
];

export default Profile;
