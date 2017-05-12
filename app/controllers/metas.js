	var metas = require('../modules/metas');

	module.exports.index = function(req, res){
		if(!req.session.name)
			res.render('login');
		else{
			if(req.session.role == 1){//Admin User
				metas.getAllMetas(function(err,metas){
					if (err){
						console.error(err);
					}
					else if(metas.status.localeCompare('ERROR') == 0){
						console.error("Error");
					}
					else{
						var session = false;
						if(req.session.name) session = true;
						for (var i = 0; i < metas.data.length; i++) {
							metas.data[i].session = session;							
							metas.data[i].status = (metas.data[i].status == "0") ? false : true;							
						}						
						res.render('metas',{metas:metas.data});
					}
				});
			}
			else
			metas.getMetas(req.session.name, 
				function(err,metas){
					if (err){
						console.error(err);
					}
					else if(metas.status.localeCompare('ERROR') == 0){
						console.error("Error");
					}
					else{
						var session = false;
						if(req.session.name) session = true;
						for (var i = 0; i < metas.data.length; i++) {
							metas.data[i].session = session;							
							metas.data[i].status = (metas.data[i].status == "0") ? false : true;							
						}						
						res.render('metas',{metas:metas.data});
					}
				}
			);
		}
	};

	module.exports.editarMeta = function(req, res){
		metas.getMeta(req.params.id, req.session.name,
			function(err,metas){				
				if (err){
					console.error(err);
				}
				else if(metas.status.localeCompare('ERROR') == 0){
					console.error("Error");
					res.render('/');
				}
				else{					
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
					console.error(err);
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
					console.error(err);
				}else{
					res.json(metas);
				}
			}
		);
	};

	module.exports.editarStatus = function(req, res){	
		console.log(req.body.status);
		// var newStatus = (req.body.status) ? '0' : '1';		
		metas.putStatus(req.params.id, req.body.status,
			function(err,metas){
				if (err){
					console.error(err);
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
					console.error(err);
				}else{
					res.json(metas);
				}
			}
		);
	};
