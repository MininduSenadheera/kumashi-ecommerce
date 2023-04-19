const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.static('public'));
//limiting image size to 50mb
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const ProductRouter = require("./routes/ProductRouter");
const CartRouter = require("./routes/CartRouter");
const OrderRouter = require("./routes/OrderRouter");

//getting the database url
const URL = process.env.MONGO_URI;

//connect to database url with the given options
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//database connection
mongoose.connection.once("open", function() {
    console.log("Database connection success");
}); 

//when http://localhost:5000/product ran it will execute ProductRouter.js file
app.use("/product", ProductRouter);
//when http://localhost:5000/cart ran it will execute CartRouter.js file
app.use("/cart", CartRouter);
//when http://localhost:5000/order ran it will execute OrderRouter.js file
app.use("/order",OrderRouter);

//defining a port (5000) to run the application
const PORT = process.env.PORT ;

//running the app in previously defined port
const server = app.listen(PORT,() =>{
    console.log(`Server is up and running on: ${PORT}`);
})

//if the server crashed show it simply and stop the server
process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged error: ${error}`);
    server.close(() => process.exit(1));
})
