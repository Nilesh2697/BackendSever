const validator = (req,res,next) => {
    if(req.method== "POST"){
        const payload = req.body;
        if(payload.title && payload.price && payload.author && payload.genre){
            if((typeof payload.title ===  "string")
             && (typeof payload.price === 'number' )
              && (typeof payload.author === "string")
              && (typeof payload.genre === "string"))
            {
                next()
            }
            else
            {
                res.send("validator failed")
            } 
        }
        else
        {
            res.send("validator failed")
        }
    }
    else{
    next()
}
}

module.exports = {validator}