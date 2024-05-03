const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send("hola");
    console.log("hola");
})

const productsRouter = require("../routes/productRouter");
app.use("/libros", productsRouter);

const userRouter = require("../routes/userRouter");
app.use("/usuarios", userRouter);

const categoryRouter = require("../routes/categoriesRouter");
app.use("/categorias", categoryRouter);

const ordersRouter = require("../routes/ordersRouter");
app.use("/orders", ordersRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});