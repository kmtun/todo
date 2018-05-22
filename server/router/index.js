const router = require('express').Router();

const controllers = {
    GET: (req, res) => {
        console.log("GET REQUEST");
        res.status = 200;
        res.end();
    },

    POST: (req, res) => {
        console.log("POST REQUEST");
        console.log(req);
        res.status = 301;
        res.end();
    }
}

router.route('/add')
.post(controllers.POST);

router.route('/')
.get(controllers.GET);

module.exports = {
    router,
    controllers
}