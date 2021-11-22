
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

const Web3 = require('web3');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');

let recover = async function (req, res) {
    try {
        if (!req.body.data || !req.body.signature) res.status(500);
        const pub = await web3.eth.accounts.recover(req.body.data, req.body.signature);
        const nonce = req.body.data.slice(req.body.data.length - 13, req.body.data.length);
        res.status(200).json(
            {
                statusCode: 200,
                data:{
                    public_key: pub,
                    nonce: nonce
                }
            }
        );
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            statusCode: 500,
            error: error });
    }
};

module.exports = {
    recover: recover
};