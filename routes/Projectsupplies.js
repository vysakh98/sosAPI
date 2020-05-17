var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
/*middleware to set headers*/

/* Get all records from ProjectSupplies*/

router.get("/data",(req,res)=>{
	models.ProjectSupplie.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to ProjectSupplies*/

router.post("/data/post/",(req,res)=>{
    let ProjectSupplieId=req.body.ProjectSupplieId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.ProjectSupplie.create({ProjectSupplieId:ProjectSupplieId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Type:Type,ProjectBudjetId:ProjectBudjetId,Description:Description,Total:Total}).then(result=>{
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

/*Http-put request-to update a record on ProjectSupplies*/
router.put("/data/update/all/",(req,res)=>{

	let ProjectSupplieId=req.body.ProjectSupplieId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type

	models.ProjectSupplie.update({

		ProjectSupplieId:ProjectSupplieId,
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
		where:{ProjectSupplieId:ProjectSupplieId}
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

/*Http-delete request- delete a particular record from ProjectSupplies*/

router.delete("/data/delete/:ProjectSupplieId",(req,res)=>{
	let ProjectSupplieId=req.params.ProjectSupplieId
	models.ProjectSupplie.destroy({
			where:{
			ProjectSupplieId:ProjectSupplieId
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


