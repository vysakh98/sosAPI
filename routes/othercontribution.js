var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
/*middleware to set headers*/

/* Get all records from othercontributions*/

router.get("/data",(req,res)=>{
	models.Othercontribution.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to othercontributions*/

router.post("/data/post/:id/:Organization/:Description/:Amount/:sosid",(req,res)=>{
    let id=req.params.id
	let Organization=req.params.Organization
	let Description=req.params.Description
	let Amount=req.params.Amount
	let sosid=req.params.sosid
	models.Othercontribution.create({Othresid:id,Organization:Organization,Description:Description,Amount:Amount,sosId:sosid}).then(result=>{
res.send({
		status:'success',
		result:result
	})
})
	.catch(err=>{
		res.send({
		status:'error',
		err:err
	})
	});
	
})
/*Http-put request-to update a record on othercontributions*/
router.put("/data/update/all/:id/:Organization/:Description/:Amount/:sosid",(req,res)=>{
	let id=req.params.id
	let Organization=req.params.Organization
	let Description=req.params.Description
	let Amount=req.params.Amount
	let sosid=req.params.sosid
	models.Othercontribution.update({
    	Organization:Organization,
    	Description:Description,
    	Amount:Amount,
    	sosId:sosid

	},

		{
		where:{Othresid:id}
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
		error:err
	})
	});
})


/*Http-delete request- delete a particular record from othercontributions*/

router.delete("/data/delete/:id",(req,res)=>{
	let id=req.params.id
	models.Othercontribution.destroy({
			where:{
			Othresid:id
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


