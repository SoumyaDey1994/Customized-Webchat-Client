const path = require("path");
const express = require("express");
const cors = require("cors");
//Define Port Number
const port = process.env.port || process.env.PORT || 4000;
// Instance of Express Class
const app = express();
// middleware functions
app.use(express.static('public'));
app.use(cors());
//Express routes/endpoints
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
// start the express server
app.listen(port , ()=>{
    console.log('Server is listening to port %s', port);
});

