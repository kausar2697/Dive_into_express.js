// const express= require('express')
// const morgan = require('morgan')  //middle ware

// const app= express()

// app.use(morgan('dev'))  //middle ware for all route

// app.get('/about',morgan('dev'),(req,res)=>{   //middleware only for a specific route
//     res.send('<h1>i am about</h1>')
// })

// app.get('/',(req,res)=>{
//     res.send('<h1>i am listening</h1>')
// })

// app.get('*', (req,res)=>{
//     res.send('<h1>404 Not Found</h1>')
// })

// const PORT = process.env.PORT || 8080
// app.listen(PORT, ()=>{
//     console.log(`server is running on port : ${PORT}`)
// })

//###################################################################################
//**********************************Router****************************** */

// const express= require('express')
// const morgan = require('morgan')  //middle ware
// const userRouter = require('./route')
// const postRouter = require('./postRoute')

// const app= express()

// app.use(morgan('dev'))  //middle ware for all route

// //user router
// // const router = express.Router()
// // router.get('/login',(req,res)=>{
// //     res.send('login page')
// // })

// // router.get('/logout',(req,res)=>{
// //     res.send('logout page')
// // })

// // router.get('/signup',(req,res)=>{
// //     res.send('signup page')
// // })
// //user router end

// app.use('/user', userRouter) //connect router to the app
// app.use('/post',postRouter)



// //Dynamic route**********
// app.get('/product/:proid',(req,res)=>{  //Dynamic route
//     res.send('Show products')
// })


// //extract request params************
// app.get('/product/:prodid/reviews/:revid',(req,res)=>{
//     console.log(req.params)      //  { prodid: '889', revid: '32' }
//     res.send(`product id : ${req.params.prodid} & reviews id : ${req.params.revid}`)
// })


// //extracting Query String***************
// app.get('/product/',(req,res)=>{
//     console.log(req.query)      //  { id: '45', name: 'kausar' }
   
// })

// app.get('/',(req,res)=>{
//     res.send('<h1>i am listening</h1>')
// })

// app.get('*', (req,res)=>{
//     res.send('<h1>404 Not Found</h1>')
// })

// const PORT = process.env.PORT || 8080
// app.listen(PORT, ()=>{
//     console.log(`server is running on port : ${PORT}`)
// })


//###################################################################################
//**********************************Separate Controllers****************************** */


const express= require('express')
const morgan = require('morgan')  //middle ware
const userRouter = require('./route')
const postRouter = require('./postRoute')
const { 
    root,
    error
}= require('./controller')

const app= express()

app.use(morgan('dev'))  //middle ware for all route



app.use('/user', userRouter) //connect router to the app
app.use('/post',postRouter)



app.get('/',root)

app.get('*',error)

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`server is running on port : ${PORT}`)
})