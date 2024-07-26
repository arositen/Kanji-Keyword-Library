CREATE TABLE person (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    date_of_birth DATE NOT NULL
);

INSERT INTO person (
    first_name,
    last_name,
    gender,
    date_of_birth
)
VALUES (
    'John',
    'Smith',
    'Male',
    DATE '1986-04-08'
);

SELECT * FROM person;

ALTER TABLE person
ADD email VARCHAR(255);

CREATE TABLE kanjitest (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    kcharacter VARCHAR(1) NOT NULL,
    keyword VARCHAR(20) NOT NULL,
    story VARCHAR(600) NOT NULL,
    kunreading VARCHAR(15) ARRAY,
    onreading VARCHAR(15) ARRAY
);

INSERT INTO kanjitest (
    kcharacter,
    keyword,
    story,
    kunreading,
    onreading
)
VALUES (
    '漢',
    'test',
    'In Chinese characters, the number one is laid on its side, unlike the Roman numeral I which stands upright. As you would expect, it is written from left to right.',
    '{"test", "漢"}',
    '{"test","test"}'
);

SELECT * FROM kanjitest;

SELECT pg_encoding_to_char(encoding) FROM pg_database WHERE datname = 'test';

INSERT INTO kanjitest (kcharacter) VALUES ('漢');