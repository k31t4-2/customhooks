import { useState, useEffect } from "react";

// このファイルは、
// 「データを取得する処理」のコンポーネント。
// user / post　ファイルは同じ記述なので、コンポーネントとして使い回す。

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    fetchPost();
  }, [url]);
  return { data };
};

export default useFetchData;
