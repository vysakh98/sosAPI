var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
var models  = require('../models')

const app=express()

/*middleware to set headers*/

/* request to get all information about soscontribution and Othercontributions */

router.get("/data/",(req,res)=>{
	models.Soscontribution.findAll({where: {Sosid : 1 },include: [{ model: models.Othercontribution }]}).then(results=>{
		res.send({
			status:'success',
			result:results
			
		})

	})
	.catch(err=>{
		console.log(err)
		res.send({
			status:'error',
			result:err
			
		})
	})
	})

router.post("/data/post/:id/:val",(req,res)=>{
	let id=req.params.id
	let Amount=req.params.val
	models.Soscontribution.create({sosid:id,Amount:Amount}).then(results=>{
		res.send({
			status:'success',
			result:results
		})
	})
	.catch(err=>{
		res.send(
			{error:err}
			)
	})
})

/*request to update soscontribution */

router.put("/data/update/:val/",(req,res)=>{
	let Amount=req.params.val
	models.Soscontribution.update({
		Amount:Amount
	},
	{
	where:{
     sosid:1
        }
	}).then(result=>{
		res.send({
		status:'success',
		result:result
	})

	})
	.catch(err=>{
		console.log(err)
	});
})


module.exports=router


