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

/*request to post amount of soscontribution */

router.post("/data/post/:id/:val/",(req,res)=>{
	let val=req.params.val
	let id=req.params.id
	models.Soscontribution.create({sosid:id,Amount:val}).then(result=>{

		res.send({
		status:'success',
		result:result
	})

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
	.catch(err=>{
		console.log(err)
	})

	})
})

/* request to delete soscontribution */

router.delete("/data/delete/:id/",(req,res)=>{
	let id=req.params.id
	models.Soscontribution.destroy({
			where:{
			sosid:id
			}
		})
		.then(results=>{
			res.send({
		status:'success',
		result:results
	})
		})
		.catch(err=>{
			res.send({
		status:'err',
		err:err
	})
		});
})


module.exports=router


