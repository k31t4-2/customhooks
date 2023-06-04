import {useState,useEffect} from "react";

export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = await response.json();
      setPosts(posts);
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
