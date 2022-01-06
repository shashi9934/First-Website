const express = require('express');
const app = express();


const Port = 5000 || process.env.PORT;

const path = require('path');


app.use(express.static(path.join(__dirname,'public')));




app.listen(Port, () => {
    console.log(`Listening to port ${Port}`);
})