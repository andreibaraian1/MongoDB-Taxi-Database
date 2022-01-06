//FIND QUERIES

db.soferi.findOne({"masina.inmatriculare": 'B33TTT'})
db.soferi.findOne({"username": 'catalta'})
db.comenzi.find({'plata.suma' : {$gt : 25}})
db.comenzi.find({'review.nota' : {$lt:4}})
db.soferi.find({disponibil:1})
db.soferi.find({"masina.an":{$lt : 2010}})
db.soferi.find({'masina.model.tip' : 'SEDAN'})