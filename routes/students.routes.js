import express from 'express' ;
//Apelle de notre model
import * as store from "../store/students.store.js"

const router = express.Router();

//Endpoint

router.get("/",(_,res) =>{
    const items =store.getAll({page: 1 , limit: 100}).data ;
   //  res.json(items);
    res.render("students/index", {items});
})

router.get("/students",(_,res) =>{
    const items = store.getAll({page: 1 , limit: 100}).data ;
    res.json(items);
    //res.render("students/index", {items});
})

router.post("/api",(req, res) =>{
    const created = store.create(req.body);
    res.status(201).json(created);
})

export default router ;