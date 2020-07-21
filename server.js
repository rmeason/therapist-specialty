const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
//const multer = require("multer");
// var storage = multer.diskStorage({ 
//   destination: (req, file, cb) => { 
//       cb(null, 'uploads') 
//   }, 
//   filename: (req, file, cb) => { 
//       cb(null, file.fieldname + '-' + Date.now()) 
//   } 
// }); 

//var upload = multer({dest: "public/uploads/"});
// const ejs = require("ejs");
// const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();


// app.set('view engin', 'ejs');

// app.use(express.static('./public'));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//app.use(upload.single("image"));

app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/therapistspecialty");


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


// mongodb://rmeason:password123!@#@ds031952.mlab.com:31952/heroku_3gp42wqq