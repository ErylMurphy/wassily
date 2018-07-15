
DROP DATABASE compalbumsdb;
CREATE DATABASE compalbumsdb;

\c compalbumsdb

DROP TABLE IF EXISTS compalbums;

CREATE TABLE compalbums (
  id SERIAL PRIMARY KEY,
  album_image TEXT,
  color_name TEXT
);

