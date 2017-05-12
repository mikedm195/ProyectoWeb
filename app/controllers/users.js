var users = require('../modules/users')
var fs = require('fs');
var bf = require('../../public/javascripts/bloomfilter');
var mail = require('../modules/mail');
const util = require('util');

module.exports.index = function (req, res) {
	if (req.session) {
		req.session = null;
		res.render('login', { mensaje: '' });
	} else {
		res.render('login', { mensaje: '' });
	}
};

module.exports.login = function (req, res) {

	//verify
	users.getUser(req.body.user, req.body.password,
		function (err, users) {
			console.log("users: ", users)
			if (err) {
				console.log(err);
			}
			else if (users.status.localeCompare('ERROR') == 0) {
				console.log("Error");
				res.render('login', { mensaje: 'Error al iniciar sesion' });
			}
			else {
				req.session = {
					name: users.user,
					image: users.image,
					keys: ['key1', 'key2']
				}
				res.json(users);
				//res.send(JSON.stringify(users));
			}
		}
		);
};

module.exports.editarUsuario = function (req, res) {
	users.getUserByName(req.session.name,
		function (err, usuarios) {
			if (err) {
				console.log(err);
			}
			else if (usuarios.status.localeCompare('ERROR') == 0) {
				console.log("Error");
			}
			else {
				console.log(usuarios.data);
				res.render('editarUsuario', { usuarios: usuarios.user });
				// res.json(series);
			}
		}
		);
	// res.render('index', { title: 'Express' });
};

module.exports.agregarUsuario = function (req, res) {
	res.render('agregarUsuario');
};

module.exports.post = function (req, res) {
	var bloom = new bf.BloomFilter(
		10 * 54000, // number of bits to allocate.
		8        // number of hash functions.
		);
	
	console.log("hola");
	fs.readFile('../../public/javascripts/human-ans-shorter.txt', 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		var s = data.split('\n');
		s.forEach(function (pwd) {
			bloom.add(pwd);
		});
		var array = [].slice.call(bloom.buckets),
		json = JSON.stringify(array);
		fs.writeFile('../../public/javascripts/bloomdata_short_pwd.js', json);
	});
	if(req.files){
		global.upload = false;
		let imageFile = req.files.image;
		console.log("Ruta "+__dirname+"/../../public/uploads/");
		imageFile.mv(__dirname+"/../../public/uploads/"+imageFile.name, function(err) {
    		if (err)
    			console.log('Cannot move file: '+err);
    	
    		else{
    			console.log('File moved successfully');
    			filename = req.files.image.name;
    			users.postUsers(filename,req.body,
					function (err, usuarios,filename) {
						if (err) {
							console.log(err);
							console.log('Cannot add user');
						} else {
							res.json(usuarios);
							if(req.body.email){
								console.log('Sending email...');
								mail.sendWelcome(req.body.email);
							}
							else
								console.log("Email cannot be sent");
						}
					}
				);
    		
    		}
    			
  		});
		
	}
	else
		console.log("No files uploaded");
};

module.exports.put = function (req, res) {
	users.putUsers(req.body,
		function (err, usuarios) {
			if (err) {
				console.log(err);
			} else {
				res.json(usuarios);
			}
		}
		);
};

module.exports.delete = function (req, res) {
	users.deleteUsers(req.body,
		function (err, usuarios) {
			if (err) {
				console.log(err);
			} else {
				res.json(usuarios);
			}
		}
		);
};
