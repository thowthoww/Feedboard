var express = require('express');
var router = express.Router();

var dbJson = require('../db.json');
var mongojs = require('mongojs');

var db = mongojs(dbJson['connecString'], ['users']);

// GET Users
router.get('/users', function(req, res)
{
	var name = req.query.name;
	if(name==null) name = "";

	db.users.find({
		name: { $regex: name, $options: 'i' }
	}, function(err, users)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(users);
		}
	});
});

// GET One User with the provided ID
router.get('/user/:id', function(req, res, next)
{
	db.users.findOne({
		_id: mongojs.ObjectId(req.params.id)
	}, function(err, user)
	{
		if(err)
		{
			res.send(err);
		}
		else
		{
			res.json(user);
		}
	});
});

// POST/SAVE a User
router.post('/user', function(req, res)
{
	var user = req.body;

	if(!user.name)
	{
		res.status(400);
		res.json({
			"error": "Invalid Data"
		});
	}
	else
	{
		db.users.save(user, function(err, result)
		{
			if(err)
			{
				res.send(err);
			}
			else
			{
				res.json(result);
			}
		})
	}
});

// PUT/UPDATE a User
router.put('/user/:id', function(req, res)
{
	var user = req.body;
	var updObj = {};

	if(user.name)
	{
		updObj.name = user.name;
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
		db.users.update({
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

// DELETE a User
router.delete('/user/:id', function(req, res)
{
	db.users.remove({
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
