const Sequelize = require('sequelize'); //sequelize 패키지 불러옴
const playerModel = require('./Player');
const config = require(__dirname + '/../config/config.json')["development"]; //config.json을 찾기위한 경로[config.json의 development키의 값을 가져옴]
const db = {}; //빈객체

const sequelize = new Sequelize(config.database, config.username, config.password, config); //sequelize 객체 생성

const PlayerModel = require('./Player')(sequelize,Sequelize);
const ProfileModel = require('./Profile')(sequelize,Sequelize);
const TeamModel = require('./Team')(sequelize,Sequelize);

// 모델간 관계 연결
// 1) Player : Profile = 1 : 1
// 하나의 선수당 하나의 프로필을 가짐
PlayerModel.hasOne(ProfileModel, { 
  // CASCADE 옵션 : Player가 삭제/수정 되는 경우 Profile도 함께 삭제/업데이트
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
  // ProfileModel에 'player_id' 이름의 fk 생성
  foreignKey: 'player_id',
  // PlayerModel에 'player_id' 컬럼 참조
  sourceKey: 'player_id'
});
ProfileModel.belongsTo(PlayerModel, {
  // ProfileModel에 'player_id' fk 생성 
  foreignKey: 'player_id',
  // 참조하게 될 PlayerModel의 키는 'player_id'
  targetKey: 'player_id'
})

// 2) Team : Player = 1: N
// 한 팀에는 여러 명의 선수가 존재
TeamModel.hasMany(PlayerModel, {
  // PlayerModel에 'team_id' fk생성
  foreignKey: 'team_id',
  // TeamModel에서 참조될 키가 'team_id'
  sourceKey: 'team_id'
});
PlayerModel.belongsTo(TeamModel, {
  // PlayerModel에 'team_id' fk생성
  foreignKey: 'team_id',
  // 참조하게 될 TeamModel의 키는 'team_id'
  targetKey: 'team_id'
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize , Sequelize : Sequelize}

// db = { sequelize : sequelize , Sequelize : Sequelize, Player : PlayerModel , Profile : ProfileModel, Team : TeamModel}
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;

// db객체를 모듈로 내보냄 -> 다른파일에서 db모듈을 사용할 예정
module.exports = db;

