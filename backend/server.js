const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.static('public'));
app.use(cors());

const ProductRouter = require("./routes/ProductRouter");

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
app.use("/product",ProductRouter);

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
