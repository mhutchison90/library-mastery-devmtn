CREATE TABLE IF NOT EXISTS books_m (
book_id serial primary key,
title varchar(180),
author varchar(180),
in_stock BOOLEAN,
image text,
genre VARCHAR(180),
description text
)