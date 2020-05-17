var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()

router.get("/data/all/:id",(req,res)=>{
	let id=req.params.id
	models.ProjectBudjet.findAll( {where: {ProjectBudjetId : id },include: [{ model: models.LOC },{ model: models.Personalcost },{model: models.Travel},{model: models.SubContracting},{model: models.MAW},{model: models.PEM},{model: models.ProjectSupplie}]}).then(results=>{
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
router.get("/data",(req,res)=>{
   models.ProjectBudjet.findAll({}).then(results=>{
	res.send({
	status:'sucess',
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

router.post("/data/post/:ProjectBudjetId/:ProjectName/:LeadOrganization",(req,res)=>{
    let ProjectBudjetId=req.params.ProjectBudjetId
    let ProjectName=req.params.ProjectName
    let LeadOrganization= req.params.LeadOrganization
	models.ProjectBudjet.create({ProjectBudjetId:ProjectBudjetId,ProjectName:ProjectName,LeadOrganization}).then(results=>{
	res.send({
	status:'sucess',
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


module.exports=router