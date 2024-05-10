import FormContainer from "../components/form/formContainer";
import FormComponent from "../components/form/form";
import FormInput from "../components/form/formInput";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";
import { useState } from "react";
import axios from "axios";
import ErrorSpan from "../components/form/error-span";
import { useNavigate } from "react-router-dom";
import useBooks from "../hooks/use-books";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { books } = useBooks();

  console.log(
    title,
    author,
    ISBN,
    price,
    stock,
    categoryId,
    imageUrl,
    description,
    errors
  );

  console.log(
    !title,
    !author,
    !price,
    !ISBN,
    !stock,
    !categoryId,
    !imageUrl,
    !description
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let errorFinded = false;
    if (
      !title ||
      !author ||
      !price ||
      !ISBN ||
      !stock ||
      !categoryId ||
      !imageUrl ||
      !description ||
      books.find((book) => book.ISBN === ISBN)
    ) {
      setErrors((prev) => ({
        ...prev,
        newBook: {
          message: books.find((book) => book.ISBN === ISBN)
            ? "Este libro ya existe."
            : "Son requeridos todos los campos",
        },
      }));
      errorFinded = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        username: null,
      }));
    }

    if (errorFinded) {
      return;
    }

    axios
      .post("http://localhost:3000/libros", {
        title: title,
        author: author,
        ISBN: ISBN,
        price: price,
        stock: stock,
        category_id: categoryId,
        image_url: imageUrl,
        description: description,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
        alert("Producto añadido exitosamente");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>Registrarse</h2>
      </FormTitle>
      <FormComponent onSubmit={handleSubmit} action="/">
        {errors.newBook && <ErrorSpan>{errors.newBook.message}</ErrorSpan>}
        <FormInput
          type="text"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Autor"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="ISBN"
          onChange={(e) => setISBN(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="Precio"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <FormInput
          type="number"
          placeholder="Stock"
          onChange={(e) => setStock(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="ID de categoria"
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Imagen de portada"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <FormInput
          type="text"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormButton>Registrarse</FormButton>
      </FormComponent>
    </FormContainer>
  );
};

export default NewProduct;
