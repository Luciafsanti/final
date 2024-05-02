import axios from "axios";
import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const [categoryById, setategoryById] = useState();

const findCategoryById = (category_id) => {
  if(category_id){
  axios.get(`http://localhost:3000/categorias/${category_id}`).then((response) => {
    setategoryById(response.data);
  }, []);}
}

  useEffect(() => {
    axios.get("http://localhost:3000/categorias").then((response) => {
      setCategories(response.data);
    }, []);
  }, []);



  return { categories, findCategoryById, categoryById };
};

export default useCategories;
