const mysql = require('mysql');

const poll = mysql.createPool({
    connectionLimit: 10,
    password: '%Emmanuel1992',
    user: 'root',
    database: 'nodeproject',
    port: '3306'
})

let node_db = {};

node_db.all = () =>{ 
    
    return new Promise((resolve, reject)=>{
        poll.query('SELECT * FROM users', (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}
node_db.one = (id) =>{
    return new Promise((resolve, reject)=>{
        poll.query('SELECT * FROM users WHERE id =?',id, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

node_db.createUser = (userData) =>{
    return new Promise((resolve, reject)=>{
        poll.query("INSERT INTO users set ?", userData, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

node_db.updateUser = (userData) =>{
    return new Promise((resolve, reject)=>{
        poll.query("UPDATE users SET name=?,email=? WHERE id = ?", userData, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

node_db.removeUser = (id) =>{
    return new Promise((resolve, reject)=>{
        poll.query("DELETE FROM users WHERE id=?", id, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};




module.exports = node_db;