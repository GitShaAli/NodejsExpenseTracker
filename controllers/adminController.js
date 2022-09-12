// postNewUser
const User = require('D:/NodejsExpenseTracker/models/user');


exports.signup = (req, res, next) => {
    const nameIn = req.body.name;
    const emailIn = req.body.email;
    const pass = req.body.password;
    console.log("name :"+nameIn);
    if(nameIn == undefined || nameIn.length === 0 || pass==undefined || pass.length===0 ||emailIn==undefined||emailIn.length===0 ){
      return res.status(400).json({err:"Something is missing"})
    }
    User.create({
      name: nameIn,
      email:emailIn,
      password: pass,
    })
      .then(() => {
        res.status(201).send('Status: Created')
        console.log('user Created');
      })
      .catch(err => {
        res.status(500).json(err);
      });
  };


