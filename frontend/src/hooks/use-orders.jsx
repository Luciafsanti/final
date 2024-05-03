import axios from "axios";
import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  const [orderDetailByOrderID, setOrderDetailByOrderID] = useState([]);

  const findOrderDetailByOrderID = (order_id) => {
    if (order_id) {
      axios
        .get(`http://localhost:3000/orders/${order_id}/order-detail`)
        .then((response) => {
          setOrderDetailByOrderID(response.data);
          console.log(orderDetailByOrderID);
        }, []);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/orders").then((response) => {
      setOrders(response.data);
    }, []);
  }, []);

  return { orders, findOrderDetailByOrderID, orderDetailByOrderID };
};

export default useOrders;
