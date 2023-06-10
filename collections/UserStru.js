
const usersData = require('../model/UserData')


const createUser = async (req ,res) => {
    console.log(req.body);
   const newUsers = new usersData ({
    id : req.body.id,  
    name : req.body.name,
    age : req.body.age,
    email : req.body.email
   })

   try{
    await newUsers.save();
     res.status(201).json(newUsers)
   }catch(err) {
    res.status(401).json({message : "error".err})
   }
}

const getStudent = async (req ,res) =>{
    try {
        const student = await usersData.find();
        res.status(200).json(student);
    }
    catch(err) {
      res.status(401).json({message : "Error".err});
    }
}


const specficuserdata = async (req ,res) => {
  const id = req.params.id;
   try{
   const Userdata = await usersData.findOne({id : id});
     res.status(201).json(Userdata)
   }catch(err) {
    res.status(401).json({message : "error".err})
   }
}




const delteusers = async (req ,res) => {
    const _id = req.params._id;
   const newUsers = new usersData ({
    id : req.body.id,  
    name : req.body.name,
    age : req.body.age,
    email : req.body.email
   })

   try{
    await  usersData.findOneAndDelete({
        _id : _id
     })
     res.status(201).json({_id : _id})
   }catch(err) {
    res.status(401).json({message : "error".err})
   }
}

const updataUsersData = async (req ,res) => {
  console.log(req.body);
  const id = req.params.id;
  const newUsers = new usersData ({
    id : req.body.id,
    name: req.body.name,
    age : req.body.age,
    email : req.body.email
  })

  try {
    const student = await usersData.findOneAndUpdate(
    {
      id : id   
    },
    {
      name : req.body.name
    }
    )
    res.status(201).json({id: id});
  }catch(err) {
   res.status(401).json({message : message.err});
  }
}



module.exports.createUser = createUser;
module.exports.getStudent = getStudent;
module.exports.specficuserdata = specficuserdata;
module.exports.delteusers = delteusers;
module.exports.updataUsersData = updataUsersData