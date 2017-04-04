var db = require('../config/db')

exports.getMetas = function(callback){
	db.get().query('SELECT * from metas;', function (err, rows) {
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

exports.getMeta = function(id, callback){
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

exports.postMetas = function(req, callback){
	db.get().query(`INSERT INTO metas (nombre, descripcion) VALUES ('${req.nombre}', '${req.descripcion}');`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putMetas = function(id, req, callback){
    console.log(id, req);
	db.get().query(`UPDATE metas
        SET nombre='${req.nombre}', descripcion='${req.descripcion}'         
        WHERE id=${id};`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.deleteMetas = function(req, callback){
	db.get().query(`DELETE FROM metas WHERE id='${req.id}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}
