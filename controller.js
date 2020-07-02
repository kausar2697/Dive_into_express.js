
exports.root = (req,res)=>{
    res.send('<h1>i am listening</h1>')
}

exports.error = (req,res)=>{
    res.send('<h1>404 Not Found</h1>')
}