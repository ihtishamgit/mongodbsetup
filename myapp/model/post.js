const mongoose=require("mongoose")


const post_schema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Post",post_schema)