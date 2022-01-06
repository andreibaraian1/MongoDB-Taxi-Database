//Aggregate queries

//Sum of 'comenzi'

db.comenzi.aggregate([ { $match: {} }, { $group:
  { _id : null, sum : { $sum: "$plata.suma" } }
},
{ $project: { _id: 0, sum: 1 } }
])

//client details on each invoice

db.comenzi.aggregate([
  { "$lookup": {
    "let": { "userObjId": { "$toObjectId": "$clientId" } },
    "from": "clienti",
    "pipeline": [
      { "$match": { "$expr": { "$eq": [ "$_id", "$$userObjId" ] } } },
	  {"$project":{"username": 1,"nume":1,"nrtelefon":1,"email":1}}
    ],
    "as": "clienti"
  }}
])

// Every invoice with driver / client info

db.comenzi.aggregate([
  { "$lookup": {
    "let": { "userObjId": { "$toObjectId": "$clientId" } },
    "from": "clienti",
    "pipeline": [
      { "$match": { "$expr": { "$eq": [ "$_id", "$$userObjId" ] } } },
	  {"$project":{"username": 1,"nume":1,"nrtelefon":1,"email":1}}
    ],
    "as": "client"
  }},
  {"$lookup": {
    "let": { "soferiObjId": { "$toObjectId": "$soferId" } },
    "from": "soferi",
    "pipeline": [
      { "$match": { "$expr": { "$eq": [ "$_id", "$$soferiObjId" ] } } },
    ],
    "as": "sofer"
	}}
  
])