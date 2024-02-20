const express = require("express")
const cors = require("cors")
const path = require("path")
const RoutesProducts = require('./routes/RoutesProducts')
const RoutesCheckout = require('./routes/RoutesCheckout')

const app = express();
app.use(cors());
app.use(express.json());

app.use("/checkout", RoutesCheckout)
app.use("/products", RoutesProducts)
app.use("/image", express.static(path.join(__dirname, "image/product")));

app.listen(4000, function()
{
    console.log("Listen to the port 4000...");
});