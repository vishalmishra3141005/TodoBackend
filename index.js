

const express = require("express");


require("dotenv").config();


const app = express();



const PORT = process.env.PORT || 3000;


app.use(require("./routes"));


app.listen(PORT, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server up and running ${PORT}`);
    }
});