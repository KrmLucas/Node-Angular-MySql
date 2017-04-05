import passport from 'passport'; 
import passportLocal from './strategies/passportLocal';

export default (app) => {

    app.use(passport.initialize());
    app.use(passport.session());

	passport.serializeUser(function(user, done) {
		done(null, user);
    });

    passport.deserializeUser(function(username, done) {
		done(null, user);
    });

    passportLocal(app);

};

 