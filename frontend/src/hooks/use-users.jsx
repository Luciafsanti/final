import axios from "axios";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs-react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState({});

  const compareUsers = (username, password) => {
    if (
      !users.find((user) => user.username === username) ||
      !bcrypt.compareSync(
        password,
        users.filter((user) => user.username === username).password
      )
    ) {
      console.log(errors);
      setError({ message: "Usuario o contraseña incorrectos" });
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/usuarios").then((response) => {
      setUsers(response.data);
      setLoading(false);
    }, []);
  }, []);

  return { users, loading, compareUsers };
};
export default useUsers;
