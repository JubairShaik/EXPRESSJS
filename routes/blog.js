const express = require('express')
const  router = express.Router()
const path = require('path')
const blogs = require('../data/blogs') 



router.get('/',(req,res)=>{
    //  res.sendFile(path.join(__dirname,"../templates/index.html"))
    res.render("home")
})

router.get('/blog',(req,res)=>{

    // blogs.forEach(e => {
    //     console.log(e.title)
    // });
    //  res.sendFile(path.join(__dirname,"..views/BlogHome.html"))
    res.render("blogHome",{
        blogs:blogs
    })

})

router.get('/blogpost/:slug',(req,res)=>{

    myBlog = blogs.filter((e)=>{
        return e.slug == req.params.slug
    })
    res.render("BlogPage",{
        title:myBlog[0].title,
        content:myBlog[0].content
    })

    // console.log(myBlog)
    // res.sendFile(path.join(__dirname,"../views/BlogPage.html"))
})



module.exports = router  



