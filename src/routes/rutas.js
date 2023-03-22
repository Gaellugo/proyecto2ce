const{ Router }= require('express');
     const router=Router();
const superheroes =require('./data.json');



router.get('/',(req,res) => {
 
    res.json(superheroes);
});

module.exports=router;