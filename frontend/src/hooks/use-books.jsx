import { useEffect, useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/libros");
      const data = await response.json();
      console.log("Data received from backend:", data);
      setBooks(data);
    };

    fetchData();
  }, []);

  return { books, loading };
};

export default useBooks;
