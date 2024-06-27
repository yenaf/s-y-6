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

create user 'user'@'%' identified by '1234';
grant all privileges on *.* to 'user'@'%' with grant option;
flush privileges;

