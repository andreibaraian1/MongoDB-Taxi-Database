//INSERT CLIENTI

db.clienti.insertMany ([
{
	username:'andrncu',
	parola:'60182615',
	nume : {
		nume:'Iancu' ,
		prenume:'Andrei',
		},
	nrtelefon: '0263271539',
	email: 'tot.basarab@gmail.com',
	adresesalvate : [{
		strada:'Calea Decebal nr. 15',
		oras:'Cristuru Secuiesc',
		codpostal: 109000,
	},{
		strada:'Aleea Zidarilor nr. 88',
		oras:'Arad',
		codpostal: 13443 ,
	}]
	
},
{
	username:'catalta',
	parola:'e96b6a00',
	nume : {
		nume:'Ionita' ,
		prenume:'Catalin',
		},
	nrtelefon: '0710041501',
	email: 'tanase.oliviu@milea.biz',
	adresesalvate : [{
		strada:'Str. Independentei',
		oras:'Cluj-Napoca',
		codpostal: 75436 ,
	}]
	
},
{
	username:'cosminnu',
	parola:'583e0d2e',
	nume : {
		nume:'Dinu' ,
		prenume:'Cosmin',
		},
	nrtelefon: '0345487308',
	email: 'dorinel33@cucu.com',
	adresesalvate : [{
		strada:'Str. Horea nr. 891',
		oras:'Cluj-Napoca',
		codpostal: 676618,
	},{
		strada:'Calea Henri Coanda 6',
		oras:'Cluj-Napoca',
		codpostal: 62716,
	}]
	
},
{
	username:'anabrsin',
	parola:'28f09967',
	nume : {
		nume:'Bratosin' ,
		prenume:'Ana',
		},
	nrtelefon: '0212700345',
	email: 'xenia.nemes@hotmail.com',
	adresesalvate : [{
		strada:'Calea Bega 6B',
		oras:'Tulcea',
		codpostal:928337,
	},{
		strada:'Calea J.J Rousseau',
		oras:'Tulcea',
		codpostal:449642,
	}]
	
},
{
	username:'olivvel',
	parola:'6615acdc',
	nume : {
		nume:'Pavel' ,
		prenume:'Olivia',
		},
	nrtelefon: '0755303596',
	email: 'horea08@constantinescu.com',
	adresesalvate : [{
		strada:'Str. Jiului 1/8',
		oras:'Prahova',
		codpostal:390569 ,
	}]
	
},
{
	username:'homnescu',
	parola:'90deacc8',
	nume : {
		nume:'Homner' ,
		prenume:'Moisescu',
		},
	nrtelefon: '0370149360',
	email: 'elodia90@mihailescu.com',
	adresesalvate : [{
		strada:'Calea Herculane nr. 4',
		oras:'Arad',
		codpostal:953034,
	}]
	
},
])


// INSERT COMENZI 

db.comenzi.insertMany([
{
	data : new Date("2021-09-05"),
	infoComanda :{
		adresaRidicare : {
			strada: 'Strada Vasile Alecsandri 11',
			oras:'Cluj-Napoca',
			codpostal: 410072,
		},
		adresaDestinatie : {
			strada: 'Strada Darmanesti 22',
			oras:'Cluj-Napoca',
			codpostal:300517 ,
		}
	},
	plata : {
		metoda:'cash',
		suma:17
	},
	soferId:'61d20c6a792d987748025d85',
	clientId:'61d24963a111f01d616fb2a8',
	comandafinalizata: 1
},
{
	data : new Date("2021-09-05"),
	infoComanda :{
		adresaRidicare : {
			strada: 'Calea Traian 135',
			oras:'Timisoara',
			codpostal:332071,
		},
		adresaDestinatie : {
			strada: 'Str. Livezeni nr. 100',
			oras:'Timisoara',
			codpostal:332071,
		}
	},
	plata : {
		metoda:'card',
		suma:20
	},
	soferId:'61d20c6a792d987748025d87',
	clientId:'61d24963a111f01d616fb2ad',
	comandafinalizata: 1
},
{
	data : new Date("2021-09-05"),
	infoComanda :{
		adresaRidicare : {
			strada:'Str. Campia Libertatii nr 46',
			oras:'Bucuresti',
			codpostal: 30365,
		},
		adresaDestinatie : {
			strada: 'Strada Calugareni 9',
			oras:'Bucuresti',
			codpostal: 29254 ,
		}
	},
	plata : {
		metoda:'cash',
		suma:30
	},
	soferId:'61d24472a111f01d616fb2a7',
	clientId:'61d24963a111f01d616fb2aa',
	comandafinalizata: 1
},
{
	data : new Date("2021-09-05"),
	infoComanda :{
		adresaRidicare : {
			strada: 'Bulevardul Pacii nr.5 ',
			oras:'Cluj-Napoca',
			codpostal:600050,
		},
		adresaDestinatie : {
			strada:'Str. Aurel Vlaicu nr 35',
			oras:'Cluj-Napoca',
			codpostal:359932 ,
		}
	},
	plata : {
		metoda:'cash',
		suma:50
	},
	soferId:'61d24472a111f01d616fb2a6',
	clientId:'61d24963a111f01d616fb2ad',
	comandafinalizata: 1
},
])
//INSERT SOFERI

db.soferi.insertMany([
{
	nume: {
		nume:'Stanciu',
		prenume:'Sergiu',
	},
	nrtelefon:0783642970  ,
	email:'radoi.cleopatra@tamas.com',
	datainceput: Date(),
	adresa: {
		strada:'P-ta frunzisului 1A' ,
		oras: 'Harghita' ,
		codpostal: 605985 
	},
	disponibil: 0,
	masina : {
		nrinmatriculare: 'CJ33PIA' ,
		model : { 
			marca:'Acura',
			tip:'SEDAN' ,
			culoare:'black',
		},
		id:1,
		an : 2014,
		
	}	
},
{
	nume: {
		nume:'Nitu',
		prenume:'Victor',
	},
	nrtelefon:0747736576  ,
	email:'victornitu@gmail.com',
	datainceput: Date(),
	adresa: {
		strada: 'P-ta Zidarilor 124' ,
		oras: 'Buzau',
		codpostal: 760534
	},
	disponibil: 1,
	masina : {
		nrinmatriculare:'B553VIC' ,
		model : { 
			marca:'Ford',
			tip:'SEDAN' ,
			culoare:'white',
		},
		id:2,
		an :2006,
		
	}
	
},{
	nume: {
		nume:'Ghita',
		prenume:'Mirel',
	},
	nrtelefon: 0767639406 ,
	email:'ghita28@yahoo.com',
	datainceput: Date(),
	adresa: {
		strada:'B-dul. Jiului nr. 2B' ,
		oras:'Covasna' ,
		codpostal: 418936
	},
	disponibil: 1,
	masina : {
		nrinmatriculare:'B33TTT' ,
		model : { 
			tip:'Honda',
			marca:'SEDAN' ,
			culoare:'grey',
		},
		id:3,
		an : 2018,
		
	}
	
}

db.soferi.insertMany([
	{
		nume: {
			nume:'Dinu',
			prenume:'Cosmin',
		},
		nrtelefon: '0261726911'   ,
		email:'cfarcas@maxim.com',
		datainceput: Date(),
		adresa: {
			strada:'B-dul. Frasinului nr. 877' ,
			oras: 'Suceava' ,
			codpostal: 458930  
		},
		disponibil: 1,
		masina : {
			nrinmatriculare: 'B982CDU' ,
			model : { 
				marca:'Ford',
				tip:'MINIVAN' ,
				culoare:'red',
				},
			id: 4,
			an : 2019,
			
		}	
	},
	{
		nume: {
			nume:'Vicentiu',
			prenume:'Ghita',
		},
		nrtelefon:'0790279090'  ,
		email:'vicentiu@gmail.com',
		datainceput: Date(),
		adresa: {
			strada: 'Splaiul Horea nr. 60' ,
			oras: 'Cluj-Napoca',
			codpostal: 830792 
		},
		disponibil: 1,
		masina : {
			nrinmatriculare:'BV33PPP' ,
			model : { 
				marca:'Mazda',
				tip:'SEDAN' ,
				culoare:'blue',
			},
			id: 5,
			an :2012,
			
		}
		
	},
	{
		nume: {
			nume:'Negoita',
			prenume:'Dragos',
		},
		nrtelefon: '0714385175' ,
		email:'dragosnegoita225@yahoo.com',
		datainceput: Date(),
		adresa: {
			strada:'B-dul. Aurel Vlaicu' ,
			oras:'Hunedoara' ,
			codpostal: 936008 
		},
		disponibil: 1,
		masina : {
			nrinmatriculare:'SM33ROO' ,
			model : { 
				tip:'Audi',
				marca:'SEDAN' ,
				culoare:'brown',
			},
			id: 6,
			an : 2010
			
		}
	}])