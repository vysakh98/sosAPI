var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
/*middleware to set headers*/

/* Get all records from Travels*/

router.get("/data",(req,res)=>{
	models.Travel.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to Travels*/

router.post("/data/post/",(req,res)=>{
    let TravelId=req.body.TravelId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.Travel.create({TravelId:TravelId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Type:Type,ProjectBudjetId:ProjectBudjetId,Description:Description,Total:Total}).then(result=>{
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
/*Http-put request-to update a record on Travels*/
router.put("/data/update/all/",(req,res)=>{
	let TravelId=req.body.TravelId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.Travel.update({
		TravelId:TravelId,
		JobTitle:JobTitle,Units:Units,
		NoOfUnits:NoOfUnits,
		UnitValue:UnitValue,
		Type:Type,
		ProjectBudjetId:ProjectBudjetId,
		Description:Description,
		Total:Total
	},

		{
		where:{TravelId:TravelId}
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


/*Http-delete request- delete a particular record from Travels*/

router.delete("/data/delete/:TravelId",(req,res)=>{
	let TravelId=req.params.TravelId
	models.Travel.destroy({
			where:{
			TravelId:TravelId
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


