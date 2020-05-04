var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
/*middleware to set headers*/

/*request to get all info on other contributions*/
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


/*request to post  info about other contributions*/

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
/*request to updateall*/
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

/*request to update Organization*/

router.put("/data/update/Organization/:id/:Organization",(req,res)=>{
	let id=req.params.id
	let Organization=req.params.Organization
	models.Othercontribution.update({
    	Organization:Organization,
	},

		{
		where:{Othersid:id}
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

/*request to update  Description */

router.put("/data/update/Description/:id/:Description",(req,res)=>{
	let id=req.params.id
	let Description=req.params.Description
	models.Othercontribution.update({
    	Description:Description,
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

/*request to update  Amount */

router.put("/data/update/Amount/:id/:Amount",(req,res)=>{
	let id=req.params.id
	let Amount=req.params.Amount
	models.Othercontribution.update({
    	Amount:Amount,
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

/*request to delete a particular  info from other contributions*/

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


