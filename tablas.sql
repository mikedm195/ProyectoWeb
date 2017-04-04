create table usuarios(
	id INT NOT NULL AUTO_INCREMENT,
	user varchar(50) not null,
 	password varchar(50) not null,
	PRIMARY KEY (id)
);

create table coches(
	id INT NOT NULL AUTO_INCREMENT,
	nombre varchar(50) not null,
 	modelo varchar(50),
 	anio int,
	PRIMARY KEY (id)
);

create table avion(
	id INT NOT NULL AUTO_INCREMENT,
	nombre varchar(50) not null,
 	marca varchar(50),
 	motor varchar(50),
	PRIMARY KEY (id)
);
