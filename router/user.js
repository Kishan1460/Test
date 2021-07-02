const express = require('express');
const router = express.Router();
const User = require('../model/user');
const { v4: uuid4 } = require('uuid');

//Insert a candidate into database
router.post('/user',async(req,res) => {
    const user = new User({
        uuid: uuid4(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        firstRound: req.body.firstRound,
        secondRound: req.body.secondRound,
        thirdRound: req.body.thirdRound,
        avgScore: (parseInt(req.body.firstRound) + parseInt(req.body.secondRound)+parseInt(req.body.thirdRound))/3
    })
    try {
      await user.save()
      res.status(201).send({ user })  
    } catch (e) {
      res.status(400).send(e)  
    }
})

//Api to get average scores of all candidates
router.get('/avgscore', (req,res) => {
  User.find({}).select('avgScore')
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  })
})

//Api to get highest scoring candidate
router.get('/highestscore',(req,res) => {
  User.findOne().sort({avgScore:-1})
  .then((result) => {
    res.send(result)
  })
  .catch((err) => {
    console.log(err);
  })
})

module.exports = router;