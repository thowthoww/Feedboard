var express = require('express');
var router = express.Router();

var mongojs = require('mongojs');

// TODO: put login & pwd in hidden file
var db = mongojs('mongodb://thowthoww:C4p*u8%25k%25YJj@ds129720.mlab.com:29720/heroku_4w5mkt7l', ['heroes']);

// GET All Heroes
router.get('/heroes', function(req, res)
{
	db.heroes.find(function(err, heroes)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(heroes);
		}
	});
});

// TODO: merge with '/heroes'
router.get('/hero/', function(req, res)
{
	db.heroes.find({
		name: { $regex: req.query.name, $options: 'i' }
	},
	function(err, heroes)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(heroes);
		}
	});
});

// GET One Hero with the provided ID
router.get('/hero/:id', function(req, res, next)
{
	db.heroes.findOne({
		_id: mongojs.ObjectId(req.params.id)
	}, function(err, hero)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(hero);
		}
	});
});

// POST/SAVE a Hero
router.post('/hero', function(req, res)
{
	var hero = req.body;
	if(!hero.name)
	{
		res.status(400);
		res.json({
			"error": "Invalid Data"
		});
	}
	else
	{
		db.heroes.save(hero, function(err, hero)
		{
			if(err)
			{
				res.send(err);
			}
			else
			{
				console.log(hero);
				res.json(hero);
			}
		})
	}
});

// PUT/UPDATE a Hero
router.put('/hero/:id', function(req, res)
{
	var hero = req.body;
	var updObj = {};
	if(hero.name)
	{
		updObj.name = hero.name;
	}
	if(!updObj)
	{
		res.status(400);
		res.json({
			"error": "Invalid Data"
		});
	}
	else
	{
		db.heroes.update({
			_id: mongojs.ObjectId(req.params.id)
		}, updObj, {}, function(err, result)
		{
			if(err)
			{
				res.send(err);
			}
			else
			{
				res.json(result);
			}
		});
	}
});

// DELETE a Hero
router.delete('/hero/:id', function(req, res)
{
	db.heroes.remove({
		_id: mongojs.ObjectId(req.params.id)
	}, '', function(err, result)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(result);
		}
	});
});

module.exports = router;
