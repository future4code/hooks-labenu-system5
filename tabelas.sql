CREATE TABLE
    Turma (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255),
        modulo VARCHAR (255) default 0
    );

CREATE TABLE
    Estudante (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        email VARCHAR (255) NOT NULL unique,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR (255),
        FOREIGN KEY (turma_id) REFERENCES Turma(id)
    );

CREATE TABLE
    Hobby (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL unique
    );

CREATE TABLE
    Estudante_Hobby (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR (255) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
        hobby_id VARCHAR (255) NOT NULL,
        FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
    );

CREATE TABLE
    Docente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL,
        email VARCHAR (255) NOT NULL unique,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR (255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES Turma(id)
    );

CREATE TABLE
    Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR (255) NOT NULL UNIQUE
    );

CREATE TABLE
    Docente_Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR (255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES Docente(id),
        especialidade_id VARCHAR (255) NOT NULL,
        FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id)
    );

INSERT INTO
    Turma (id, nome, modulo)
VALUES
("001", "Tuma-da-Hooks", "6");

select * from Turma;

INSERT INTO
    Estudante (
        id,
        nome,
        email,
        data_nasc,
        turma_id
    )
VALUES
(
        "001",
        "Ravenna",
        "ravenna@gmail.com",
        "1987-07-20",
        "001"
    );

select * from Estudante;

INSERT INTO Hobby (id, nome) VALUES("001", "Ler");

select * from Hobby;

INSERT INTO
    Estudante_Hobby (id, estudante_id, hobby_id)
VALUES("001", "001", "001");

INSERT INTO
    Docente (
        id,
        nome,
        email,
        data_nasc,
        turma_id
    )
VALUES
(
        "001",
        "Luccas",
        "luccas@gmail.com",
        "1997-09-08",
        "001"
    );

select * from Docente;

INSERT INTO Especialidade (id, nome) VALUES("001", "CSS");

select * from Especialidade;

INSERT INTO
    Docente_Especialidade (
        id,
        docente_id,
        especialidade_id
    )
VALUES("001", "001", "001");