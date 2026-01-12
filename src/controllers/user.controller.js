import {asyncHandler} from "../utils/asynchhandler.js"

const registerUser = asyncHandler(async (req,res)=>{
     res.status(200).json({
        message:"ok"
    })
})

export {registerUser}