const express = require('express');
const router = express.Router();
const textToText  = require('./../gemini/TextToText');

router.get('/' , (req , res) => {
    res.send("Now we are in gemini api route hehe");
})

router.post('/chat' , async (req , res) => {
    console.log(req.body);
    const {message} = req.body;

    const response = await textToText(message);

    res.json(
        {
            message: response
        }
    );
})


module.exports = router;