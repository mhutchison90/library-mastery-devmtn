select * from books_m 
where lower(title) like '%'||$1||'%'
order by book_id desc;