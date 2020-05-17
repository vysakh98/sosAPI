var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
/*middleware to set headers*/

/* Get all records from MAWs*/

router.get("/data",(req,res)=>{
	models.MAW.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to MAWs*/

router.post("/data/post/",(req,res)=>{
    let MAWId=req.body.MAWId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Type=req.body.Type
	let Description=req.body.Description
	let Total=req.body.Total
	models.MAW.create({MAWId:MAWId,JobTitle:JobTitle,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Type:Type,ProjectBudjetId:ProjectBudjetId,Description:Description,Total:Total}).then(result=>{
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
/*Http-put request-to update a record on MAWs*/

router.put("/data/update/all/",(req,res)=>{

	let MAWId=req.body.MAWId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type

	models.MAW.update({

		MAWId:MAWId,
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
		where:{MAWId:MAWId}
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



/*Http-delete request- delete a particular record from MAWs*/

router.delete("/data/delete/:MAWId",(req,res)=>{
	let MAWId=req.params.MAWId
	models.MAW.destroy({
			where:{
			MAWId:MAWId
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


