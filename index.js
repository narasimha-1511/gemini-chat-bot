const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

const PORT  = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , 'public')));

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , 'public' , 'index.html'));
});

app.get('/api/gemini' , (req , res) => {
    res.send("We are setting routes for this !!");   
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});