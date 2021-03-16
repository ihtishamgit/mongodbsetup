const express=require("express")
const router=express.Router();
const post=require("../controller/post")
router.post("/",post.createPost)
router.get("/",()=>{
    console.log("faisal")
})
router.get("/userdetail",post.userDetail)



module.exports=router;