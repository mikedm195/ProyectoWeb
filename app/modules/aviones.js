var db = require('../config/db')

exports.getAviones = function(callback){
	db.get().query('SELECT * from aviones;', function (err, rows) {
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

exports.getAvion = function(id, callback){
	db.get().query(`SELECT * from aviones WHERE id=${id};`, function (err, rows) {
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

exports.postAviones = function(req, callback){
	db.get().query(`INSERT INTO aviones (nombre, marca, motor) VALUES ('${req.nombre}', '${req.marca}', '${req.motor}');`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putAviones = function(id, req, callback){
	db.get().query(`UPDATE aviones
        SET nombre='${req.nombre}', marca='${req.marca}',
        motor='${req.motor}'
        WHERE id=${id};`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.deleteAviones = function(req, callback){
	db.get().query(`DELETE FROM aviones WHERE id='${req.id}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}
