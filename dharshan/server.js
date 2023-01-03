const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://cookable:uoo7NbKlx9Bl4oi7@cluster0.bnffz.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const server_url = 'http://127.0.0.1:' + port;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
const client = new MongoClient(uri);
prices = {'veg-pulao' : 180,'tomato-bath' : 150, 'Fried-rice' : 150,'Aaloo-Paratha' : 210,'Bisi-Bele-Bath' : 180, 'Masala-Dosa' : 120,'Jeera-Rice' : 150,'Drum-Stick-Curry' : 90, 'Palak-Rice' : 150,'Dal-Kichdi' : 120,'onion-pakoda' : 120, 'poha' : 100,}; // Add more dishes here

app.listen(port, () => {
	console.log('Listening on ' + server_url);
});

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.get('/about', (req, res) => {
	res.sendFile('about.html');
});

app.get('/contact', (req, res) => {
	res.sendFile('contact.html');
});

app.get('/recipes', (req, res) => {
	res.sendFile('recipes.html');
});

app.get('/vegetable-pulao', (req, res) => {
	res.sendFile('single-recipe1.html');
});

app.get('/Tomato-bath', (req, res) => {
	res.sendFile('single-recipe2.html');
});

app.get('/veg-fried rice', (req, res) => {
	res.sendFile('single-recipe3.html');
});

app.get('/Aaloo-paratha', (req, res) => {
	res.sendFile('single-recipe4.html');
});

app.get('/Bisi-bele-bath', (req, res) => {
	res.sendFile('single-recipe5.html');
});

app.get('/Masala dosa', (req, res) => {
	res.sendFile('single-recipe6.html');
});

app.get('/Ghee rice', (req, res) => {
	res.sendFile('single-recipe7.html');
});

app.get('/Drum-stick curry', (req, res) => {
	res.sendFile('single-recipe8.html');
});

app.get('/Palak-rice', (req, res) => {
	res.sendFile('single-recipe9.html');
});

app.get('/Dal-kichdi', (req, res) => {
	res.sendFile('single-recipe10.html');
});

app.get('/onion-pakoda', (req, res) => {
	res.sendFile('single-recipe11.html');
});

app.get('/poha', (req, res) => {
	res.sendFile('single-recipe12.html');
});

app.post('/order', (req, res) => {
	console.log(req.body);
	client.connect(errs => {
	  const collection = client.db("cookable").collection("customers");
	  query = {phno:req.body.phno};
	  const cursor = collection.find(query, {});
	  cursor.toArray(function(err, data) {
	        if (err) throw err;
	        if(data.length > 0) {
	        	if(req.body.name == data[0].name) {
	        		res.send('{\'message\': \'success\', \'price\' : ' + prices[req.body.item] + '}');
		        }
		        else {
		        	res.send('{\'message\': \'dup\'}');
		        }
	        }
	        else {
	        	res.send('{\'message\': \'failed\'}');
	        }
	        client.close();
	    });
	});
});

app.post('/ordernew', (req, res) => {
	client.connect(errs => {
	  const collection = client.db("cookable").collection("customers");
	  const doc = req.body;
	  collection.insertOne(doc);
	  res.send('{\'message\': \'success\', \'price\' : ' + prices[req.body.item] + '}');
	});
});