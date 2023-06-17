let express = require('express');
const path = require("path");
let app = express();
require('dotenv').config();
const bodyParser = require("body-parser");

app.use('/public', express.static(path.join(__dirname, 'public')));

const absolutePath = path.join(__dirname, 'views', 'index.html');
app.get("/", function(req, res) {
  res.sendFile(absolutePath);
});


// app.use((req,res,next)=>{
//     const {method, path, ip} = req;
//     console.log(method + " " + path +" " + "-" + " " + ip)
//     next();
// })
// app.get("/json", function(req, res) {
//     const messageStyle = process.env.MESSAGE_STYLE;
//     if (messageStyle === "uppercase") {
//       return res.json({ message: "HELLO JSON" });
//     }
    
//     res.json({ message: "Hello json" });
//   });


// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString();  // Hypothetical synchronous operation
//     next();
//   }, function(req, res) {
//     res.send({time: req.time});
//   });


// app.get('/:word/echo', (req, res) => {
//     const word = req.params.word;
//     res.json({ echo: word });
//   });


// app.route('/name').get((req, res) => {
//     const firstName = req.query.first || 'Unknown';
//     const lastName = req.query.last || 'Unknown';
//     const fullName = `${firstName} ${lastName}`;
  
//     if (firstName === 'Mick' && lastName === 'Jagger') {
//       res.json({ name: fullName });
//     } else if (firstName === 'Keith' && lastName === 'Richards') {
//       res.json({ name: fullName });
//     } else {
//       res.sendStatus(404); // Not Found
//     }
//   })
  
//   .post((req, res) => {
//     // Handle POST request for /name if needed
//     res.sendStatus(405); // Method Not Allowed
//   });


app.use(bodyParser.urlencoded({extended: false}))
  app.post("/name",(req,res)=>{
    try{
        const firstName = req.body.first;
    const lastName = req.body.last;
        const fullName = `${firstName} ${lastName}`
        res.json({ name: fullName })
    }
    catch(err){
        res.json({message:err})
    }
   
  })
module.exports = app;
