var db = require('../config/db')

exports.getUserByName = function(user, callback){	
	db.get().query(`SELECT * FROM usuarios WHERE user ='${user}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
	  	if ( rows && rows.length > 0){
	  		response.status = "SUCCESS";
			response.user = rows[0];
		}
		else{
			response.status = "ERROR";
		}
		return callback(null,response);
	})
}


exports.getUser = function(user, password, callback){
	db.get().query(`SELECT * FROM usuarios WHERE user ='${user}' AND password='${password}' ;`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
	  	if ( rows && rows.length > 0){
	  		response.status = "SUCCESS";
			response.user = rows[0].user;
		}
		else{
			response.status = "ERROR";
		}
		return callback(null,response);
	})
}

exports.postUsers = function(req, callback){
	db.get().query(`INSERT INTO usuarios (user, password) VALUES ('${req.user}', '${req.password}');`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.putUsers = function(req, callback){
	db.get().query(`UPDATE usuarios
        SET user='${req.user}', password='${req.password}'
        WHERE user='${req.user}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}

exports.deleteUsers = function(req, callback){
	db.get().query(`DELETE FROM usuarios WHERE id='${req.id}';`, function (err, rows) {
		var response = {status:''};
		if (err){
	    	return callback(err);
	  	}
		return callback(null,response);
	})
}
