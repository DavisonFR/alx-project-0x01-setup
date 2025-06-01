import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import HeaderComponent from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: PostData) => {
    console.log("New Post Added:", newPost);
  };

  return (
    <div className="flex flex-col h-screen">
      <HeaderComponent />
      <button onClick={() => setModalOpen(true)}>Add Post</button>
      {isModalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />}
    </div>
  );
};
