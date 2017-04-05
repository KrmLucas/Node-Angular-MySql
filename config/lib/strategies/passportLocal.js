import passport from 'passport';
import { Strategy } from 'passport-local';
import mysql from 'mysql'; 
import $config from '../../config.json';

let db = $config.db.mysql;

const connection = mysql.createConnection({
				  host: db.host,
				  user: db.user,
				  password: db.password,
				  database: db.database
				});

export default (app) => {

    passport.use(new Strategy(
        function (username, password, done) {
                
                connection.query('SELECT * FROM usuarios WHERE usuario = ? ', 
                username, 
                function(err, rows) {
                                
                    if(err) return done(err);
                    if(!rows.length) return done(null, false);

                    if(rows[0].clave === password) {
                        return done(null, rows[0]);
                    } else {
                        return done(null, false);
                    }
                })
        }
    ));

    app.post('/login', passport.authenticate('local', {
        successRedirect: '/products',
        failureRedirect: '/'
    }));
};
  
