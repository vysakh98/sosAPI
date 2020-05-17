var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
/*middleware to set headers*/

/* Get all records from SubContractings*/

router.get("/data",(req,res)=>{
	models.SubContracting.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to SubContractings*/

router.post("/data/post/",(req,res)=>{
    let SubContractingId=req.body.SubContractingId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.SubContracting.create({SubContractingId:SubContractingId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Type:Type,ProjectBudjetId:ProjectBudjetId,Description:Description,Total:Total}).then(result=>{
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
/*Http-put request-to update a record on SubContractings*/
router.put("/data/update/all/",(req,res)=>{
	let SubContractingId=req.body.SubContractingId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.SubContracting.update({
		SubContractingId:SubContractingId,
		JobTitle:JobTitle,Units:Units,
		NoOfUnits:NoOfUnits,
		UnitValue:UnitValue,
		Type:Type,
		ProjectBudjetId:ProjectBudjetId,
		Description:Description,
		Total:Total
	},

		{
		where:{SubContractingId:SubContractingId}
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


/*Http-delete request- delete a particular record from SubContractings*/

router.delete("/data/delete/:SubContractingId",(req,res)=>{
	let SubContractingId=req.params.SubContractingId
	models.SubContracting.destroy({
			where:{
			SubContractingId:SubContractingId
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


