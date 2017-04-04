var users = require('../modules/users')

module.exports.index = function(req, res){
	if(req.session){
		req.session = null;
		res.render('login',{mensaje:''});
	}else{
		res.render('login',{mensaje:''});
	}
};

module.exports.login = function(req, res){
	users.getUser(req.body.user, req.body.password,
		function(err,users){
			console.log("users: ", users)
			if (err){
				console.log(err);
			}
			else if(users.status.localeCompare('ERROR') == 0){
				console.log("Error");
				res.render('login',{mensaje:'Error al iniciar sesion'});
			}
			else{
				req.session = {
				  name: users.user,
				  keys: ['key1', 'key2']
				}
				res.json(users);
				//res.send(JSON.stringify(users));
			}
		}
	);
};

module.exports.editarUsuario = function(req, res){
	users.getUserByName(req.session.name,
		function(err,usuarios){			
			if (err){
				console.log(err);
			}
			else if(usuarios.status.localeCompare('ERROR') == 0){
				console.log("Error");
			}
			else{
				console.log(usuarios.data);
				res.render('editarUsuario',{usuarios:usuarios.user});
				// res.json(series);
			}
		}
	);
	// res.render('index', { title: 'Express' });
};

module.exports.agregarUsuario = function(req, res){
	res.render('agregarUsuario');
};

module.exports.post = function(req, res){
	users.postUsers(req.body,
		function(err,usuarios){
			if (err){
				console.log(err);
			}else{
				res.json(usuarios);
			}
		}
	);
};

module.exports.put = function(req, res){
	users.putUsers(req.body,
		function(err,usuarios){
			if (err){
				console.log(err);
			}else{
				res.json(usuarios);
			}
		}
	);
};

module.exports.delete = function(req, res){
	users.deleteUsers(req.body,
		function(err,usuarios){
			if (err){
				console.log(err);
			}else{
				res.json(usuarios);
			}
		}
	);
};
