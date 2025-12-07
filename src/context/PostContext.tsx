import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: number;
  content: string;
  timestamp: Date;
  splashCount: number;
  echoCount: number;
  userAvatar: string;
  media?: string;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'splashCount' | 'echoCount'>) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const usePosts = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostProvider');
  }
  return context;
};

interface PostProviderProps {
  children: ReactNode;
}

export const PostProvider: React.FC<PostProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      content: 'Welcome to Tide! This is a sample post.',
      timestamp: new Date(Date.now() - 10 * 60 * 1000),
      splashCount: 5,
      echoCount: 2,
      userAvatar: 'https://via.placeholder.com/60/FFD700/000000?text=You',
    },
  ]);

  const addPost = (newPost: Omit<Post, 'id' | 'splashCount' | 'echoCount'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now(), // Simple ID
      splashCount: 0,
      echoCount: 0,
    };
    setPosts(prevPosts => [post, ...prevPosts]); // Add to top
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};