let express = require('express');
let app = express();
const initAPIs = require("./routes");
var cors = require('cors');
let port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
initAPIs(app);

app.use(cors());

app.listen(port);

console.log('RESTful API server started on: ' + port);