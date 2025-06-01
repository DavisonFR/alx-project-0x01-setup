import { PostData, PostModalProps } from "@/interfaces";
import React, { useState } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostData>({
    userId: 1,
    title: "",
    body: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" name="userId" value={post.userId} onChange={handleChange} />
          <input type="text" name="title" placeholder="Title" value={post.title} onChange={handleChange} />
          <textarea name="body" placeholder="Body" value={post.body} onChange={handleChange} />
          <button type="submit">Add Post</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
