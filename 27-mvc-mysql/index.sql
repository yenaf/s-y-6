-- 프로젝트할때는 SQL올릴필요없음 
use codingon;

drop table visitor;

create table visitor(
	id int primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

insert into visitor values
(null,'홍길동','내가 왔다.'),
(null,'이찬혁','으라차차');

insert into visitor values (null,'강예나','안녕?');
select * from visitor;

-- 사용자 추가하기 
create user 'user'@'%' identified by '1234'; -- 계정추가

-- user 계정에 DB 권한 부여(모든 DB에 접근 가능하도록) 
grant all privileges on *.* to 'user'@'%' with grant option; -- 새로운 계정에 권한 부여

-- 현재 사용중인 MYSQL 캐시를 지우고 새로운 설정 적용 
flush privileges; -- 캐시 지우고 새로운 설정 적용

alter user 'user'@'%' identified with mysql_native_password by '1234'; -- 인증 방식 변경

select * from mysql.user; -- 계정 생성 확인