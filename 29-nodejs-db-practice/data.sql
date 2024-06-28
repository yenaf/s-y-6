create database codingon default character set utf8mb4 collate
utf8mb4_unicode_ci;

show databases;
drop table user;
create table user(
	id int primary key auto_increment not null,
	userid varchar(20) not null,
	name varchar(10) not null,
    pw varchar(20) not null
);
desc user;

insert into user(userid, name, pw) values('asdf','1234','원숭이');

select * from user;

create user 'user'@'%' identified by '1234'; -- 계정 추가
grant all privileges on *.* to 'user'@'%' with grant option; -- 새로운 계정에 권한 부여
flush privileges; -- 캐시 지우고 새로운 설정 적용
alter user 'user'@'%' identified with mysql_native_password by '1234'; -- 인증 방식 변경
