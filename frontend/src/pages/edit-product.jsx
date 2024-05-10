import FormContainer from "../components/form/formContainer";
import FormComponent from "../components/form/form";
import FormInput from "../components/form/formInput";
import FormTitle from "../components/form/formTitle";
import FormButton from "../components/form/formButton";
import { useState } from "react";
import axios from "axios";
import ErrorSpan from "../components/form/error-span";
import { useNavigate, useParams } from "react-router-dom";
import useBooks from "../hooks/use-books";

const EditProduct = () => {
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
  console.log(books);
  const { book_id } = useParams();
  console.log(book_id);
  const book = books.find((book) => book.book_id === Number(book_id));

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

  const handleUpdate = (e) => {
    e.preventDefault();

    if (confirm("¿Guardar cambios?")) {
      axios
        .put("http://localhost:3000/libros/" + book_id, {
          newTitle: title || book.title,
          newAuthor: author || book.author,
          newISBN: ISBN || book.ISBN,
          newPrice: price || book.price,
          newStock: stock || book.stock,
          newCategory_id: categoryId || book.category_id,
          newImage_url: imageUrl || book.image_url,
          newDescription: description || book.description,
        })
        .then(function (response) {
          console.log(response);
          navigate("/productos");
          alert("Producto editado exitosamente");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <FormContainer>
      <FormTitle>
        <h2>Nuevo producto</h2>
      </FormTitle>
      <FormComponent onSubmit={handleUpdate} action="/productos">
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
        <FormButton>Editar</FormButton>
      </FormComponent>
    </FormContainer>
  );
};

export default EditProduct;
