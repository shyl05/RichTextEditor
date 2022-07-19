var express = require('express');
var router = express.Router();
var TextData = require('../models/textdata'); 

/* GET */
router.get('/', function(req, res, next) {
    TextData.find(function(err,data){
        if(err){
            res.send(err)
        }
        res.send(data)
    })
});

/* POST */
router.post('/', async function(req, res, next) {
    let body = req.body;
    let text = new TextData(body);
    await text.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.send(err)
    })
});


/* PUT */
router.put('/:id',((req,res)=>{
    const id=req.params.id
    const body=req.body
    console.log(body)
    TextData.findByIdAndUpdate(id,body,{new:true})
    .then((val)=>{
        res.send(val)
    })
    .catch((err)=>{
        res.send(err)
    })
}))

module.exports = router;
