Create Table Movies

(id,title,genre,review,artist,role);

---insert a Table

(1,"Petta","Action",8,"RajiniKanth","hero");

(2,"VadaChennai","Crime"9,"VijaySethupathi","hero");

(3,"Pizza","Horror",8,"Dhanush","hero");


---update a Data

update Movies set artist="Dhanush" where id=2;
update Movies set artist="VijaySethupathi" where id=3;

---delete a Data

delete from movies where id=2


