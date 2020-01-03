const con21=require('./connection21nov')
const getall=async()=>{
    let a=await con21.find()
    // console.log(a)
    return a
}
const getbyplace=async(cit)=>{
    let a=await con21.find({city:cit})
    return a
}
const getbydlapplied=async(z)=>{
    let a=await con21.find({dl_applied:z})
    return a
}
//  const runner=()=>{
//      getbyplace("Hyderabad").then((d)=>{
//          console.log(d)
//      })
//  }
//  runner()
module.exports={getall,getbyplace,getbydlapplied}