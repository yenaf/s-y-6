const { where } = require('sequelize');
const {Player, Profile} = require('../models/index');

exports.getPlayers = async (req,res) =>{
  try{
    const players = await Player.findAll();
    res.json(players);
  }catch(err){
    console.error(err);
    res.status(500).send('interrnal server Error');
  }
  // res.render('players',{title : '전체 선수 조회 '});
}

exports.getPlayer = async (req,res) =>{
  try{
    console.log(req.params.player_id);
    const {player_id} = req.params;

    // select * from player where player_id = 1
    const player = await Player.findOne({
      where : {player_id},
      include : [ //join
        {
          model : Profile,
          attributes : ['position','salary']
        }
      ]
    });
    res.json(player);
  }catch(err){
    console.error(err);
    res.status(500).send('interrnal server Error');
  }
}

exports.postPlayer = async (req, res) => {
  try {
      console.log(req.body)
      const {name, age, team_id} = req.body;
      const newPlayer = await Player.create({
          name, age, team_id
      });

      res.json(newPlayer);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

exports.patchPlayer = async (req, res) => {
  try {
      const {player_id} = req.params;;
      const {team_id} = req.body;
      
      const updatedPlayer = await Player.update(
        // 무엇을 바꾸는데?
        {team_id},
        // 누구를 바꿔야하는데?
        {where : {player_id}}
      );

      res.json(updatedPlayer);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}

exports.deletePlayer = async (req, res) => {
  try {
      const {player_id} = req.params;
      const isDeleted = await Player.destroy({
        where : {player_id}
      })
      console.log(isDeleted);

      if(isDeleted){
        return res.send(true);
      }else{
        return res.send(false);
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
}