var express = require('express')
var router = express.Router()
var rm = require("../modals/order_module");

/* Get the full list of rim */
router.get("/", function(req, res) {
    rm.getOrderList(function(err, result) {
        if (err) {
            //logger.error(`Rim>list>${err}`)
            res.end(JSON.stringify(err));
            //console.log(err);

        } else {
            //res.end(JSON.stringify(result));
            res.send(result);
        }
    });
})

router.post('/validateUser', (req, res) => {
	console.log("dfasd");
	let data = req.body;
console.log(data);
	rm.validateUser(data, function(err, result) {
		if (err) {
			//logger.error(`Rim>getGlobalSeriesCode>${err}`)
			res.end(JSON.stringify(err));
			//console.log(err);

		} else {
			//res.end(JSON.stringify(result));
			res.send(result);

		}
	});

});

router.post('/createOrder', (req, res) => {
	console.log("dfasd");
	let data = req.body;
console.log(data);
	rm.createOrder(data, function(err, result) {
		if (err) {
			//logger.error(`Rim>getGlobalSeriesCode>${err}`)
			res.end(JSON.stringify(err));
			//console.log(err);

		} else {
			//res.end(JSON.stringify(result));
			res.send(result);

		}
	});

});
router.post('/updateOrder', (req, res) => {
let data = req.body;

	rm.updateOrder(data, function(err, result) {
		if (err) {
			//logger.error(`Rim>getGlobalSeriesCode>${err}`)
			res.end(JSON.stringify(err));
			//console.log(err);

		} else {
			//res.end(JSON.stringify(result));
			res.send(result);

		}
	});

});

module.exports = router;

