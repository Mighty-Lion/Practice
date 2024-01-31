
var express= require('express');
var cors = require('cors');
const fetch = (...args) => {
    import('node-fetch').then(({default: fetch}) => fetch(...args));
}
var bodyParser = require('body-parser');

const CLIENT_ID = "6551a3dcf40761866249";
const CLIENT_SECRET = "f8152ba4e303a81f53d1615c1f8942aa51fdae8e";

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/getAccessToken', async function(req, res) {
    console.log(req.query.code)

    const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`
    await fetch(`https://github.com/login/oauth/access_token${params}`, {
        method: "POST",
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
})

// getUserData
// access token is going  to be  passed in as  an Authorized header

app.get('/getUserData', async function (req, res) {
    req.get("Authorization"); // Bearer ACCESSTOKEN
    await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Authorization": req.get("Authorization")
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        res.json(data);
    })
})

app.listen(4000, function () {
    console.log('CORS Server running on port 4000')
})