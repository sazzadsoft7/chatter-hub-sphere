
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

export interface PostProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    username: string;
  };
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: number;
  shares: number;
  hasLiked?: boolean;
}

const PostCard = ({
  id,
  author,
  content,
  image,
  createdAt,
  likes,
  comments,
  shares,
  hasLiked = false,
}: PostProps) => {
  const [liked, setLiked] = useState(hasLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const submitComment = () => {
    if (!commentText.trim()) return;
    
    // Here you would normally send this to an API
    console.log("Comment submitted:", commentText);
    setCommentText("");
  };

  return (
    <Card className="mb-4">
      <CardHeader className="p-4 pb-0 flex flex-row items-start">
        <Avatar className="mr-3">
          <AvatarImage src={author.avatar || "/placeholder.svg"} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm sm:text-base">{author.name}</h3>
              <p className="text-xs text-social-darkGray">{createdAt}</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Save post</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
                <DropdownMenuItem>Hide</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <p className="whitespace-pre-line">{content}</p>
        
        {image && (
          <div className="mt-3 rounded-md overflow-hidden">
            <img 
              src={image} 
              alt="Post content" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="flex justify-between items-center mt-4 text-sm text-social-darkGray">
          <div>
            {likeCount > 0 && (
              <span className="flex items-center">
                <ThumbsUp className="h-3.5 w-3.5 text-social-blue mr-1.5" />
                {likeCount}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            {comments > 0 && <span>{comments} comments</span>}
            {shares > 0 && <span>{shares} shares</span>}
          </div>
        </div>
      </CardContent>
      
      <Separator />
      
      <CardFooter className="p-1 flex justify-between">
        <Button 
          variant="ghost" 
          className={`flex-1 ${
            liked ? "text-social-blue" : "text-gray-500"
          }`}
          onClick={handleLike}
        >
          <ThumbsUp className="h-5 w-5 mr-2" />
          Like
        </Button>
        <Button 
          variant="ghost" 
          className="flex-1 text-gray-500"
          onClick={handleComment}
        >
          <MessageSquare className="h-5 w-5 mr-2" />
          Comment
        </Button>
        <Button variant="ghost" className="flex-1 text-gray-500">
          <Share2 className="h-5 w-5 mr-2" />
          Share
        </Button>
      </CardFooter>
      
      {showComments && (
        <div className="p-4 pt-2 bg-gray-50 rounded-b-lg">
          <div className="flex items-start gap-2 mb-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 flex gap-2 items-end">
              <Textarea
                placeholder="Write a comment..."
                className="min-h-[60px] flex-1 resize-none"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <Button 
                size="sm" 
                className="bg-social-blue hover:bg-social-blue/90"
                disabled={!commentText.trim()}
                onClick={submitComment}
              >
                Post
              </Button>
            </div>
          </div>
          
          {comments > 0 && (
            <div className="space-y-3">
              <Comment 
                author="Jane Smith"
                content="This is such a great post! Thanks for sharing 😊"
                createdAt="2h ago"
              />
              <Comment 
                author="Mike Johnson"
                content="I've been thinking about this too. Really interesting perspective."
                createdAt="1h ago"
              />
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

interface CommentProps {
  author: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

const Comment = ({ author, content, createdAt, avatar }: CommentProps) => {
  return (
    <div className="flex gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar || "/placeholder.svg"} />
        <AvatarFallback>{author.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-white rounded-lg p-2 px-3">
          <h4 className="font-semibold text-sm">{author}</h4>
          <p className="text-sm">{content}</p>
        </div>
        <div className="flex gap-3 mt-1 text-xs text-social-darkGray pl-2">
          <button className="hover:underline">Like</button>
          <button className="hover:underline">Reply</button>
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
