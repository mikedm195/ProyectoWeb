	var coches = require('../modules/coches');

	module.exports.index = function(req, res){
		coches.getCoches(
			function(err,coches){
				if (err){
					console.log(err);
				}
				else if(coches.status.localeCompare('ERROR') == 0){
					console.log("Error");
				}
				else{
					var session = false;
					if(req.session.name) session = true;
					for (var i = 0; i < coches.data.length; i++) {
						coches.data[i].session = session;
					}
					res.render('coches',{coches:coches.data});
				}
			}
		);
	};

	module.exports.editarCoche = function(req, res){
		coches.getCoche(req.params.id,
			function(err,coches){
				console.log(coches);
				if (err){
					console.log(err);
				}
				else if(coches.status.localeCompare('ERROR') == 0){
					console.log("Error");
				}
				else{
					console.log(coches.data);
					res.render('editarCoche',{coches:coches.data[0]});
					// res.json(coches);
				}
			}
		);
		// res.render('index', { title: 'Express' });
	};

	module.exports.agregarCoche = function(req, res){
		res.render('agregarCoche');
	};

	module.exports.post = function(req, res){
		coches.postCoches(req.body,
			function(err,coches){
				if (err){
					console.log(err);
				}else{
					res.json(coches);
				}
			}
		);
	};

	module.exports.put = function(req, res){
		coches.putCoches(req.params.id, req.body,
			function(err,coches){
				if (err){
					console.log(err);
				}else{
					res.json(coches);
				}
			}
		);
	};

	module.exports.delete = function(req, res){
		coches.deleteCoches(req.body,
			function(err,coches){
				if (err){
					console.log(err);
				}else{
					res.json(coches);
				}
			}
		);
	};
