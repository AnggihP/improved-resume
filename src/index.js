const express = require('express')
const app = express();
const router = express.Router();

const path = __dirname + '/';
const port = 8800;

router.use(function (req, res, next) {
    console.log('/' + req.method);
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
    console.log('Listening on port ' + port + '...');
});