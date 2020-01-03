const conf=require("./config")
const mongoose=require('mongoose')
mongoose.connect(conf.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const con=mongoose.connection;
con.once('open',function(){
    console.log("connected to database")
})
const cricketschema=new mongoose.Schema({
    
      "id": Number,
      "season": Number,
      "city": String,
      "date": String,
      "team1": String,
      "team2": String,
      "toss_winner": String,
      "toss_decision": String,
      "result": String,
      "dl_applied": String,
      "winner": String,
      "win_by_runs": Number,
      "win_by_wickets": Number,
      "player_of_match": String,
      "venue": String,
      "umpire1": String,
      "umpire2": String,
      "umpire3": String
})
const datamodel=mongoose.model('cricket',cricketschema);
datamodel.insertMany(require("./data.js"),()=>{console.log("Ho gyaa upload")})


