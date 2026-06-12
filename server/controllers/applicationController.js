const Application =
require("../models/Application");

const Job =
require("../models/Job");

/* APPLY */

const applyJob = async(req,res)=>{

try{

const {
jobId,
proposal
} = req.body;

const existing =
await Application.findOne({
job:jobId,
freelancer:req.user._id
});

if(existing){

return res.status(400).json({
message:"Already Applied"
});

}

const application =
await Application.create({

job:jobId,

freelancer:req.user._id,

proposal

});

res.status(201).json(application);

}catch(error){

res.status(500).json({
message:error.message
});

}
};

/* MY APPLICATIONS */

const getMyApplications =
async(req,res)=>{

const applications =
await Application.find({

freelancer:req.user._id

})
.populate("job");

res.json(applications);

};

module.exports={
applyJob,
getMyApplications
};