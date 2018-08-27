
import indexCotroller from './index/index.controller'; 
import { create, list, read } from './products/products.controller';
import passport from '../config/lib/passport';

export default (app) => {

    // Controlador index
    app.use('/', indexCotroller);
    
    //passport
    passport(app);

    //Routing de los metodos del modulo crud de productos  
    app.get('/products', list)
    app.post('/products', create);
    //app.get('/products/:productId', read)

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        return next(err);
    });

    //development error handler
    if (app.get('env') === 'development') {
        app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message, 
                error: err
            });
        });
    }

    //production error handler
    if (app.get('env') === 'production') {
        app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message, 
                error: {}
            });
        });
    }
};
