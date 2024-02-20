const DB = require("../databases/Database");

async function getProducts(req, res)
{
    try 
    {
      const mysql = await DB();
      const query = "SELECT * FROM products";
      const [rows, fields] = await mysql.query(query);
      res.status(200).json(rows);
    } 
    catch (err) 
    {
      res.status(400).json({ error: "Cant get products"});
    }
};

async function postProduct(req, res)
{
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    image: req.file.filename
  }
  
  try{
    const mysql = await DB();
    const insertProduct = `INSERT INTO products VALUES (null, '${newProduct.name}', '${newProduct.price}', '${newProduct.category}', '${newProduct.image}');`;
    const [rows, fields] = await mysql.query(insertProduct);
    const status = rows.affectedRows == 1;
    if(status)
    {
      res.status(200).json({msg: 'Your product is save!'});
    }else {
      res.status(400).json({msg: 'Your product is not save!'});
    }
  }catch(err){
    res.status(400).json({msg: err});
  }
}

module.exports = { getProducts, postProduct };