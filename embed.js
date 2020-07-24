const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => {console.log(`Error connectiong to db: ${err}`)})

// POST - title content
const postSchema = new mongoose.Schema({
  title: String,
  content: String
})

const Post = mongoose.model('Post', postSchema)

// USER - email, name
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
})

const User = mongoose.model('User', userSchema)

// const newUser = new User({
//   email: 'hermione@hogwarts.edu',
//   name: 'Hermione Granger'
// })

// newUser.posts.push({
//   title: 'how to brew polyjuice potion',
//   content: 'go ask the half blood prince'
// })

// newUser.save((err, user) => {
//   err ? console.log(err) : console.log(user)
// })

User.findOne({name: 'Hermione Granger'}, (err, user) => {
  if(err){
    console.log(err)
  } else{
    user.posts.push({
      title: '3 things I really hate',
      content: 'voldemort'
    })
    user.save((err, usr) => {
      err ? console.log(err) : console.log(usr)
    })
  }
})
