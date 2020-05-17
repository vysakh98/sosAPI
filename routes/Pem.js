var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
/*middleware to set headers*/

/* Get all records from PEMs*/

router.get("/data",(req,res)=>{
	models.PEM.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to PEMs*/

router.post("/data/post/",(req,res)=>{
    let PEMId=req.body.PEMId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.PEM.create({PEMId:PEMId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Type:Type,ProjectBudjetId:ProjectBudjetId,Description:Description,Total:Total}).then(result=>{
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
/*Http-put request-to update a record on PEMs*/
router.put("/data/update/all",(req,res)=>{
	let PEMId=req.body.PEMId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.bodyProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.PEM.update({
		PEMId:PEMId,
		JobTitle:JobTitle,Units:Units,
		NoOfUnits:NoOfUnits,
		UnitValue:UnitValue,
		Type:Type,
		ProjectBudjetId:ProjectBudjetId,
		Description:Description,
		Total:Total
	},

		{
		where:{PEMId:PEMId}
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


/*Http-delete request- delete a particular record from PEMs*/

router.delete("/data/delete/:PEMId",(req,res)=>{
	let PEMId=req.params.PEMId
	models.PEM.destroy({
			where:{
			PEMId:PEMId
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


