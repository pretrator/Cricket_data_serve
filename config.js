const data={}
if(process.env.ENV==="prod"){
    data.MONGO_URL=process.env.MONGO_URL
    data.PORT=process.env.PORT
}
else{
    data.MONGO_URL='mongodb://localhost/cricdat'
    data.PORT=3333
}
module.exports=data