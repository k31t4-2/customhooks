import {useState,useEffect} from "react";

export const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const users = await response.json();
      setUsers(users);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <h1>ユーザ一覧</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
