const express = require('express')
const router = express.Router()
// const members = require('../../Members')
const uuid = require('uuid')
const model = require('../../models/membermodel')

let memberarray;

router.get('/:id',(req,res) => {
    model.find({_id : req.params.id}, (err,members) => {
      if(err) throw err;
      else{
        memberarray = members;
        res.redirect('/');
      } 
    })    
});

router.post('/', (req, res) => {
  
    const newMember = new model({
      ...req.body,
      id: uuid.v4(),
      status: 'active'        
    })

    // if (!newMember.name || !newMember.email) {
    //   return res.status(400).json({ msg: 'Please include a name and email' });
    // }
  
    // members.push(newMember);
    // res.json(members);
  
    newMember.save((err,member) => {
      if(err) return console.error(err);
      console.log("done");
    });
    res.json(newMember);
  });

    router.put('/:id',(req,res) => {

      const reqdata = req.body;
      model.findByIdAndUpdate(req.params.id, reqdata, function(err,docs){
        if(err) {
          console.log(err);
        }
        else{
          res.json(docs);
        }
  })
}) 

  router.delete('/:id', (req,res) => {
    
        model.findByIdAndRemove(req.params.id, (err) => {
          if(err) console.log(err);
          res.end();
        })
    })

// module.exports = router;
// module.exports = memberarray;

module.exports = router;