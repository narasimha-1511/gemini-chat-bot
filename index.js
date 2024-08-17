const express = require('express');
const path = require('path');
const router = require('./routes/route');
const app = express();

require('dotenv').config();

const PORT  = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , 'public')));
app.use(express.json());  

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , 'public' , 'index.html'));
});

app.use('/api/gemini' , router);

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});