var db = require('../config/db')

exports.getCoches = function(callback){
	db.get().query('SELECT * from coches;', function (err, rows) {
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

exports.getCoche = function(id, callback){
	db.get().query(`SELECT * from coches WHERE id=${id};`, function (err, rows) {
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

exports.postCoches = function(req, callback){
	db.get().query(`INSERT INTO coches (nombre, modelo, anio) VALUES ('${req.nombre}', '${req.modelo}', ${req.anio});`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putCoches = function(id, req, callback){
    console.log(id, req);
	db.get().query(`UPDATE coches
        SET nombre='${req.nombre}', modelo='${req.modelo}',
        anio=${req.anio}
        WHERE id=${id};`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.deleteCoches = function(req, callback){
	db.get().query(`DELETE FROM coches WHERE id='${req.id}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}
