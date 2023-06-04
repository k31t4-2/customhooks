import useFetchData from "../hooks/useFetchDate";

export const Post = () => {

  // 共通化した部分をコンポーネント化してimportして使い回す。
  const { data } =
    useFetchData("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
