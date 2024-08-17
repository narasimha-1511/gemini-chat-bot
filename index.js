const express = require('express');
const app = express();

require('dotenv').config();

const PORT  = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send('Hello World this is literraly crazy');
});

app.get('/api/gemini' , (req , res) => {
    res.send("We are setting routes for this !!");   
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});