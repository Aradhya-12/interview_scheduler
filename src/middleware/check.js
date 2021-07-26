const interview= require('../models/interviews')
const User= require('../models/user.js')

const check= async(req, res, next)=>{
    if(req.body.user.length<2){
        return res.status(404).send({error: "Must have atleast two users"})
    }
    const users= req.body.user
    const startTime= req.body.startTime
    const endTime= req.body.endTime

    //chechking if scheduled time is possible or not
    if(startTime > endTime)
    return res.status(404).send({error: "Start time must be before end time"})

    //checking selected users' availibility for scheduled interview
    for(user of users) {
        const  user_check= await User.findOne({_id: user._id})
        for(item of user_check.interviews){
            const Interview= await interview.findOne({_id: item})
            if(!(Interview?.endTime <= startTime || Interview?.startTime >= endTime))
            return res.status(404).send({error: "User "+ user_check.email + " is not free in the given slot!" })
        }
    }
    next()
}
module.exports= check