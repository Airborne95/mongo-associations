const mongoose = require('mongoose')
const Post = require('./models/post')
const User = require('./models/user')
mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => {console.log(`Error connectiong to db: ${err}`)})


Post.create({
  title: 'How to cook pt 4',
  content: 'change it up'
}, (err, post) => {
  User.findOne({email: 'bob@gmail.com'}, (err, foundUser)=>{
    if(err){
      console.log(err)
    } else {
      foundUser.posts.push(post)
      foundUser.save((err, data) => {
        err ? console.log(err) : console.log(data)
      })
    }
  })
})

// User.create({
//   email: 'bob@gmail.com',
//   name: 'Bob Belcher'
// })

// Find user
// find all posts for that user