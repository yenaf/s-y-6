// sequelize 매개변수 : model/index.js에서의 sequelize (db연결 정볼르 연결하여 생성한 객체)
// DataTypes 매개변수 : model/index.js에서의 Sequelize (sequelize 패키지 자체)
const playerModel = (sequelize, DataTypes) => {
  const Player = sequelize.define(
    // param1 : 모델 이름 설정
    'Player', 
    // param2 : 모델 컬럼 정의
    {
      player_id: {
          // player_id int not null primary key auto_increment
          type: DataTypes.INTEGER,//정수값
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
      },
      name: {
          // name varchar(63) not null
          type: DataTypes.STRING(63),//스트링값
          allowNull: false,
      },
      age: {
          // age int not null
          type: DataTypes.INTEGER,//정수값
          allowNull: false,
      }
    },
    // param3 : 모델 옵션 정의
    {
        freezeTableName: true, //테이블명 고정
        // timestamps : false, // 데이터가 추가되고 수정된 시간을 자동으로 컬럼을 만들어서 기록
    }
  );
  return Player;
}

module.exports = playerModel;