var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

/*middleware to set headers*/

/* Get all records from Personalcosts*/

router.get("/data",(req,res)=>{
	models.Personalcost.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to Personalcosts*/

router.post("/data/post/",(req,res)=>{
    let PersonalCostId=req.body.PersonalCostId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type
	models.Personalcost.create({PersonalCostId:PersonalCostId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Total:Total,Description:Description,Type:Type,ProjectBudjetId:ProjectBudjetId}).then(result=>{
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

/*Http-put request-to update a record on Personalcosts*/

router.put("/data/update/all/",(req,res)=>{

	let PersonalCostId=req.body.PersonalCostId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type

	models.Personalcost.update({

		PersonalCostId:PersonalCostId,
		JobTitle:JobTitle,
		Units:Units,
		NoOfUnits:NoOfUnits,
		UnitValue:UnitValue,
		Type:Type,
		Total:Total,
		Description:Description,
		ProjectBudjetId:ProjectBudjetId
	},

		{
		where:{PersonalCostId:PersonalCostId}
	})
	
	.then(results=>{
		res.send({
		status:'success',
		result:results
	})
	})
	.catch(err=>{
		console.log(err)
		res.send({
		status:'err',
		error:err
	})
	});
});


/*Http-delete request- delete a particular record from Personalcosts*/

router.delete("/data/delete/:PersonalCostId",(req,res)=>{
	let PersonalCostId=req.params.PersonalCostId
	models.Personalcost.destroy({
			where:{
			PersonalCostId:PersonalCostId
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


