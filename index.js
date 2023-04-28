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

function toggleMobileMenu() {
    var e = document.getElementById("m-menu-button")
      , o = document.getElementById("m-menu");
    e.children[1].classList.contains("block") ? (e.children[1].classList.replace("block", "hidden"),
    e.children[2].classList.replace("hidden", "block"),
    o.classList.replace("hidden", "block")) : (e.children[1].classList.replace("hidden", "block"),
    e.children[2].classList.replace("block", "hidden"),
    o.classList.replace("block", "hidden"))
}