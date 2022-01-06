const express = require('express');
const app = express();


require(dotenv).config();


const Port = process.env.PORT || 5000 ;

const path = require('path');


app.use(express.static(path.join(__dirname,'public')));




app.listen(Port, () => {
    console.log(`Listening to port ${Port}`);
})