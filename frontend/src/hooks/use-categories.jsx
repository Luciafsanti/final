import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterCategories = (title) => {
    let newCategories = categories.filter((category) => {
      return (
        category.title.toLowerCase().includes(title.toLowerCase()) ||
        category.author.toLowerCase().includes(title.toLowerCase())
      );
    });
    setFilteredCategories(newCategories);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/categorias").then((response) => {
      setCategories(response.data);
    }, []);
  }, []);

  return { categories, filterCategories, filteredCategories };
};

export default useCategories;
