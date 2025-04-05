
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Image, Film, Smile } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CreatePostCard = () => {
  const [postText, setPostText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCreatePost = async () => {
    if (!postText.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Post created",
        description: "Your post has been published successfully!",
      });
      setPostText("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="mb-4">
      <CardContent className="pt-4">
        <div className="flex items-start gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              className="resize-none border-none focus-visible:ring-0 p-0 text-base placeholder:text-muted-foreground"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              rows={1}
            />
          </div>
        </div>
        
        <div className="flex items-center mt-4 pt-3 border-t">
          <div className="flex flex-1 gap-2">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Image className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Photo</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Film className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Video</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <Smile className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Feeling</span>
            </Button>
          </div>
          <Button 
            onClick={handleCreatePost} 
            disabled={!postText.trim() || isSubmitting}
            className="bg-social-blue hover:bg-social-blue/90"
          >
            Post
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
