const hc=require('./getalldata')
test("testing getall",async ()=>{
    let c=await hc.getall()
    expect(c.length).toBe(756)
})
test("testing getbyplace",async ()=>{
    let c=await hc.getbyplace("Pune")
    expect(c[0].city).toBe('Pune')
})
test("testing getbydlapplied",async ()=>{
    let c=await hc.getbydlapplied(0)
    expect(c[0].dl_applied).toBe('0')
})