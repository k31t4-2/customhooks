import useFetchData from "../hooks/useFetchDate";

export const User = () => {

  // 共通化した部分をコンポーネント化してimportして使い回す。
  const { data } =
  useFetchData("https://jsonplaceholder.typicode.com/users")

  return (
    <div>
      <h1>ユーザ一覧</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
