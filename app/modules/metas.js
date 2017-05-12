var db = require('../config/db')

exports.getMetas = function(id_usuario, callback){
	db.get().query(`SELECT * from metas where id_usuario = '${id_usuario}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
	  	if ( rows ){
	  		response.status = "SUCCESS";
		    response.data = rows;
		}
		else{
			response.status = "ERROR";
		}
		return callback(null,response);
	})
}

exports.getAllMetas = function(callback){
	db.get().query(`SELECT * from metas;`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
	  	if ( rows ){
	  		response.status = "SUCCESS";
		    response.data = rows;
		}
		else{
			response.status = "ERROR";
		}
		return callback(null,response);
	})
}


exports.getMeta = function(id, id_usuario, callback){
	db.get().query(`SELECT * from metas WHERE id=${id};`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
	  	if ( rows && rows.length > 0){
	  		response.status = "SUCCESS";
		    response.data = rows;
		}
		else{
			response.status = "ERROR";
		}
		return callback(null,response);
	})
}

exports.postMetas = function(req,id_usuario, callback){
	db.get().query(`INSERT INTO metas (nombre, descripcion, id_usuario) VALUES ('${req.nombre}', '${req.descripcion}', '${id_usuario}');`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putMetas = function(id, req,id_usuario, callback){
	db.get().query(`UPDATE metas
        SET nombre='${req.nombre}', descripcion='${req.descripcion}'         
        WHERE id=${id} AND id_usuario='${id_usuario}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putStatus = function(id, status, callback){
	db.get().query(`UPDATE metas
        SET status='${status}' 
        WHERE id=${id};`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.deleteMetas = function(req,id_usuario, callback){
	db.get().query(`DELETE FROM metas WHERE id='${req.id}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}
