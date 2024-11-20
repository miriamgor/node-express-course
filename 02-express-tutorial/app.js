// import express module with require
const express = require('express');
const { products } = require('./data');

// create app by calling express()
const app = express();

// express.static - middleware (html, css, js)
app.use(express.static('./public'));

// app.get for URL /api/v1/test return JSON 
app.get('/api/v1/test', (req, res)=> {
    res.json({ message: "It worked!"});
}
);

// return all products as JSON
app.get('/api/v1/products', (req, res)=> {
    res.json(products);
})

//retrieve a particular product by ID
app.get('/api/v1/products/:productID', (req, res)=> {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p)=> p.id === idToFind);
    if (product) {
        res.json(product); // return product as a JSON response
    } else {
        res.status(404).json({ message: 'That product was not found.' }); //return product not found
    }
})

// app.get for query 
app.get('/api/v1/query', (req, res)=> {
    //extract the search and limit parameters from req.query
    const { search, limit, maxPrice } = req.query;
    let filteredProducts = [...products]; 
    if (search) {
        filteredProducts = filteredProducts.filter((product)=>
        product.name.toLowerCase().includes(search.toLowerCase()));
    }
    // apply the limit 
    if (limit) {
        const limitNumber = parseInt(limit); 
        filteredProducts = filteredProducts.slice(0, limitNumber);
    }
    // if user only wants items less than $20
    if (maxPrice) {
        const maxPriceNumber = parseFloat(maxPrice);
        filteredProducts = filteredProducts.filter((product) => product.price < maxPriceNumber);
    }

    res.json(filteredProducts);
})

// products that cost less than $20 only
// app.get('/api/v1/query', (req, res)=> {
//     const { search, maxPrice, filter } = req.query;
//     let filteredProducts = [...products];
//     if (search) {
//         filteredProducts = filteredProducts.filter((product)=>
//         product.name.toLowerCase().includes(search.toLowerCase())
//     );
//     }
//     if (maxPrice) {
//         const maxPriceNumber = parseFloat(maxPrice);
//         filteredProducts = filteredProducts.filter((product) => product.price < maxPriceNumber);
//     }
  
//     res.json(filteredProducts);
// });

// 404 page not found error
app.all('*', (req, res)=> {
    res.status(404).send('Page not found');
})
// tell server to listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});