import mysql from 'mysql'; 
import $config from '../../config/config.json';

let db = $config.db.mysql;

const connection = mysql.createConnection({
				  host: db.host,
				  user: db.user,
				  password: db.password,
				  database: db.database
				});


    export function create (req, res, next) {
        var product = {
            id: req.body.idProduct,
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            imagen: req.body.imagen
        };
        var sql = 'INSERT INTO productos set ?';
        connection.query(sql, product, function(err, rows) {
            if(err) {
                return next(err);
            } else {
                res.json(rows);
            }
        });
    };

    export function list (req, res, next) {
        var sql = 'SELECT * FROM productos';
        connection.query(sql, function(err, rows) {
            if(err) {
                return next(err);
            } else {
                res.json(rows);
            }
        });
    };



 /*
    function read (req, res) {
        
    };

    function update (req, res, next) {
        
    };

   
    function delete (req, res, next) {
        
    };
    

    function productsById (req, res, next, id) {
        
    };
*/


