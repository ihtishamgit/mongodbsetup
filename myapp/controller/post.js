const Post=require("../model/post")

module.exports={
     createPost: async (req, res) => {
     var post=new Post({
         firstName:req.body.firstName,
         lastName:req.body.lastName,
     })

    await post.save(function(err){
         if(err){
             console.log(err)
         }else{
             res.send({
                 success:true,
                 user:post
             })
         }
     })
    },
    userDetail: async(req,res)=>{
        Post.find({}, function(err, posts) {
            if(err){
                console.log(err);
            }
            else{
                res.send({
                    posts
                });    
            }
              
          });
        
    }
}