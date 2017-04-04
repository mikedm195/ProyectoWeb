	var metas = require('../modules/metas');

	module.exports.index = function(req, res){
		if(!req.session.name)
			res.render('login');
		else
			metas.getMetas(req.session.name, 
				function(err,metas){
					if (err){
						console.log(err);
					}
					else if(metas.status.localeCompare('ERROR') == 0){
						console.log("Error");
					}
					else{
						var session = false;
						if(req.session.name) session = true;
						for (var i = 0; i < metas.data.length; i++) {
							metas.data[i].session = session;
						}
						console.log(metas.data);
						res.render('metas',{metas:metas.data});
					}
				}
			);
	};

	module.exports.editarMeta = function(req, res){
		metas.getMeta(req.params.id, req.session.name,
			function(err,metas){
				console.log(metas);
				if (err){
					console.log(err);
				}
				else if(metas.status.localeCompare('ERROR') == 0){
					console.log("Error");
					res.render('/');
				}
				else{
					console.log(metas.data);
					res.render('editarMeta',{metas:metas.data[0]});
					// res.json(metas);
				}
			}
		);
		// res.render('index', { title: 'Express' });
	};

	module.exports.agregarMeta = function(req, res){
		if(!req.session.name)
			res.render('login');
		else
			res.render('agregarMeta');
	};

	module.exports.post = function(req, res){
		metas.postMetas(req.body,req.session.name, 
			function(err,metas){
				if (err){
					console.log(err);
				}else{
					res.json(metas);
				}
			}
		);
	};

	module.exports.put = function(req, res){
		metas.putMetas(req.params.id, req.body, req.session.name,
			function(err,metas){
				if (err){
					console.log(err);
				}else{
					res.json(metas);
				}
			}
		);
	};

	module.exports.delete = function(req, res){
		metas.deleteMetas(req.body, req.session.id,
			function(err,metas){
				if (err){
					console.log(err);
				}else{
					res.json(metas);
				}
			}
		);
	};
