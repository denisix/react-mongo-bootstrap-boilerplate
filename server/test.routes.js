const 	express = require('express'),
	Test = require('./test')

const 	router = express.Router();

router.route('/add').post((req,res) => {
	new Test({
		foo: req.body.foo,
	}).save()
		.then(() => res.status(200).send('OK'))
		.catch(err => res.status(400).send("unable to save to database"))	
})

router.route('/update/:id').post((req,res) => {
	Test.updateOne({_id: req.body._id}, {
		foo: req.body.foo,
	}, (err) => {
    		if (err) res.send(err);
		res.send('Test updated.');
	})
})

router.route('/delete/:id').get((req, res) => {
	console.log('delete id=', req.params.id)
	Test.deleteOne({_id: req.params.id})
		.then(() => res.status(200).send('OK'))
		.catch(err => res.status(400).send("unable to delete"))	
})

router.get('/list', (req, res) => {
	Test.find({}, (err, data) => {
		if(err) {
			res.send(err)
			return
		}
		res.json(data)
	})
})

router.route('/get/:id').get((req, res) => {
	Test.findOne({_id: req.params.id}, (err, data) => {
		if(err) {
			res.send(err)
			return
		}
		res.json(data)
	})
})


module.exports = router;
