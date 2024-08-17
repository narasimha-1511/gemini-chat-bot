const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.send("Now we are in gemini api route hehe");
})

router.post('/chat' , (req , res) => {
    console.log(req.body);
    const {message} = req.body;
    res.json(
        {
            message: `this is the response ${message}`
        }
    );
})


module.exports = router;