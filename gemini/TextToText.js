const { GoogleGenerativeAI } = require('@google/generative-ai');
const { text } = require('express');

require('dotenv').config();

const gemAI = new GoogleGenerativeAI(process.env.API_KEY);

const modl = gemAI.getGenerativeModel({ model : process.env.MODEL});

async function textToText(text) {

    const res = await modl.generateContent(text);
    const response = await res.response;
    return response.text();

}

// textToText("what is the weather in bangalore").then((res) => {
//     console.log(res);
// });
//I have teseted this funtin this is crazt

module.export  = textToText;