const express = require("express");
const app = express();
const people = require('./routes/people')
const authRoutes = require('./routes/auth')
const cookieParser = require('cookie-parser');


//static assets
app.use(express.static("./methods-public"));
//pase from data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// parse cookies
app.use(cookieParser());

//authentication routes under the '/logon' prefix
app.use("/auth", authRoutes);


app.use('/api/people',people)
// app.use('/login', router)

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});



























// // import express module with require
// const express = require("express");
// const { products, people } = require("./data");
// const { router } = require("./routes/people");

// // create app by calling express()
// const app = express();

// //implement an app.get for ....
// // app.get('/api/v1/people',(req, res)=> {
// //   res.json()
// // })

// // creating the logger middleware
// const logger = (req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
//   next();
// }

// // using logger middleware with a route
// app.get('/', logger, (req, res) => {
//   res.send('Hello, world!')
// })

// //using logger middleware globally
// app.use(logger)

// //GET Method to fetch People
// // app.get('/api/v1/people', (req, res) => {
// //   res.json(people);
// // })

// //middleware for parsing body (before POST route)
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// //POST method to add people
// // app.post('/api/v1/people', (req, res)=> {
// //   if (!req.body.name) {
// //     return res.status(400).json({ success: false, message: "Please provide a name"})
// //   }
// //   people.push({ id: people.length +1, name: req.body.name })
// //   res.status(201).json({ success: true, name: req.body.nae });
// // })

// app.use("/api/v1/people", router);


// // express.static - middleware (html, css, js)
// app.use(express.static("./public"));

// // app.get for URL /api/v1/test return JSON
// app.get("/api/v1/test", (req, res) => {
//   res.json({ message: "It worked!" });
// });

// // return all products as JSON
// app.get("/api/v1/products", (req, res) => {
//   res.json(products);
// });

// //retrieve a particular product by ID
// app.get("/api/v1/products/:productID", (req, res) => {
//   const idToFind = parseInt(req.params.productID);
//   const product = products.find((p) => p.id === idToFind);
//   if (product) {
//     res.json(product); // return product as a JSON response
//   } else {
//     res.status(404).json({ message: "That product was not found." }); //return product not found
//   }
// });

// // app.get for query
// app.get("/api/v1/query", (req, res) => {
//   //extract the search and limit parameters from req.query
//   const { search, limit, maxPrice } = req.query;
//   let filteredProducts = [...products];
//   if (search) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.name.toLowerCase().includes(search.toLowerCase())
//     );
//   }
//   // apply the limit
//   if (limit) {
//     const limitNumber = parseInt(limit);
//     filteredProducts = filteredProducts.slice(0, limitNumber);
//   }
//   // if user only wants items less than $20
//   if (maxPrice) {
//     const maxPriceNumber = parseFloat(maxPrice);
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price < maxPriceNumber
//     );
//   }
//   res.json(filteredProducts);
// });

// // 404 page not found error
// app.all("*", (req, res) => {
//   res.status(404).send("Page not found");
// });
// // tell server to listen on port 3000
// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
