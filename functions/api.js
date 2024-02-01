import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/", (req, res) => {
    res.json({
        'path': 'Home',
        'firstName': 'Aslan',
        'lastName': 'Abaev'
    })
});

router.get("/json", (req, res) => {
    res.json({
        'path': 'json',
        'author': 'Aslan Abaev',
    })
});

api.use('/.netlify/functions/api', router)

module.exports.handler = serverless(api);