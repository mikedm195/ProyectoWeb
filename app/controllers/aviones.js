var aviones = require('../modules/aviones');

module.exports.index = function(req, res){
	aviones.getAviones(
		function(err,aviones){			
			if (err){
				console.log(err);
			}
			else if(aviones.status.localeCompare('ERROR') == 0){
				console.log("Error");
			}
			else{
				var session = false;
				if(req.session.name) session = true;
				for (var i = 0; i < aviones.data.length; i++) {
					aviones.data[i].session = session;
				}
				res.render('aviones',{aviones:aviones.data});
			}
		}
	);
};

module.exports.editarAvion = function(req, res){
	aviones.getAvion(req.params.id,
		function(err,aviones){
			if (err){
				console.log(err);
			}
			else if(aviones.status.localeCompare('ERROR') == 0){
				console.log("Error");
			}
			else{
				console.log(aviones.data);
				res.render('editarAvion',{aviones:aviones.data[0]});
				// res.json(aviones);
			}
		}
	);
	// res.render('index', { title: 'Express' });
};

module.exports.agregarAvion = function(req, res){
	res.render('agregarAvion');
};

module.exports.post = function(req, res){
	aviones.postAviones(req.body,
		function(err,aviones){
			if (err){
				console.log(err);
			}else{
				res.json(aviones);
			}
		}
	);
};

module.exports.put = function(req, res){
	aviones.putAviones(req.params.id, req.body,
		function(err,aviones){
			if (err){
				console.log(err);
			}else{
				res.json(aviones);
			}
		}
	);
};

module.exports.delete = function(req, res){
	aviones.deleteAviones(req.body,
		function(err,aviones){
			if (err){
				console.log(err);
			}else{
				res.json(aviones);
			}
		}
	);
};
