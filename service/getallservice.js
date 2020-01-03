const getallmodel=require('./model/getalldata')
const getall=async()=>{
    let a=await getallmodel.getall()
    let b=a.map((kc)=>{
        let d={season:kc.season,
            city:kc.city,
        date:kc.date,
    team1:kc.team1,
    team2:kc.team2,
    toss_winner:kc.winner,
    toss_decision:kc.toss_decision,
    result:kc.result,
    dl_applied:kc.dl_applied,
    winner:kc.winner,
    win_by_runs:kc.win_by_runs,
    win_by_wickets:kc.win_by_wickets,
    player_of_match:kc.player_of_match,
    venue:kc.venue,
    umpire1:kc.umpire1,
    umpire2:kc.umpire2,
    umpire3:kc.umpire3
}
return d

    })
    return b
}
const getallbyplace=async(data)=>{
    let a=await getallmodel.getbyplace(data)
    let b=a.map((kc)=>{
        let d={season:kc.season,
            city:kc.city,
        date:kc.date,
    team1:kc.team1,
    team2:kc.team2,
    toss_winner:kc.winner,
    toss_decision:kc.toss_decision,
    result:kc.result,
    dl_applied:kc.dl_applied,
    winner:kc.winner,
    win_by_runs:kc.win_by_runs,
    win_by_wickets:kc.win_by_wickets,
    player_of_match:kc.player_of_match,
    venue:kc.venue,
    umpire1:kc.umpire1,
    umpire2:kc.umpire2,
    umpire3:kc.umpire3
}
return d

    })
    return b
}
const getallbydl_applied=async(data)=>{
    let a=await getallmodel.getbydlapplied(data)
    let b=a.map((kc)=>{
        let d={season:kc.season,
            city:kc.city,
        date:kc.date,
    team1:kc.team1,
    team2:kc.team2,
    toss_winner:kc.winner,
    toss_decision:kc.toss_decision,
    result:kc.result,
    dl_applied:kc.dl_applied,
    winner:kc.winner,
    win_by_runs:kc.win_by_runs,
    win_by_wickets:kc.win_by_wickets,
    player_of_match:kc.player_of_match,
    venue:kc.venue,
    umpire1:kc.umpire1,
    umpire2:kc.umpire2,
    umpire3:kc.umpire3
}
return d

    })
    return b

}
module.exports={getall,getallbyplace,getallbydl_applied}
// const runner=()=>{
//       getall().then((d)=>{
//           console.log(d[0])
//       })
//   }
//   runner()