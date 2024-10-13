// hello world;

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3020

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/travellors')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
    username: String,
    fname: String,
    lname: String,
    email: String,
    password: String
})

const guideSchema = new mongoose.Schema({
    username: String,
    fname: String,
    lname: String,
    email: String,
    password: String
})

const Users = mongoose.model("users", userSchema)
const Guides = mongoose.model("guide", guideSchema)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'userLogin.html'))
})

app.get('/TourGuideLogin.html', (req, res)=>{
    res.sendFile(path.join(__dirname, 'TourGuideLogin.html'))
})

app.post('/post', async (req, res)=>{
    const { username, fname, lname, email, password } = req.body
    const user = new Users({
        username,
        fname,
        lname,
        email,
        password
    })
    await user.save()
    console.log(user)
    res.send("Form submitted successful")
})

// Route handler for tour guide form submission
app.post('/tourguide/post', async (req, res) => {
    const { username, fname, lname, email, password, experience } = req.body
    const tourGuide = new Guides({
        username,
        fname,
        lname,
        email,
        password,
        experience
    })
    await tourGuide.save()
    console.log(tourGuide)
    res.send("Tour guide form submitted successfully")
})

app.listen(port, () => {
    console.log("Server started")
})

