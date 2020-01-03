const logger=function(req,res,next){
    console.log("==============")
    console.log("params="+req.params)
    console.log("type of request="+req.method)
    console.log("path="+req.path)
    console.log("timestamp="+new Date())
    console.log("ip of client="+req.connection.remoteAddress)
    next()
}
module.exports={logger}