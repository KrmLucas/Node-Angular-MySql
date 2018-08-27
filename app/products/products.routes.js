import productsCotroller from './products.controller';

export default (app) =>  {

    app.get('/products', productsCotroller.list)
    app.post('/products',productsCotroller.create);

    //app.get('/products/:productId', productsCotroller.read)
    //app.put('/products/:productId', productsCotroller.update)
    //app.delete('/products/:productId', productsCotroller.delete);
    
    //app.param('productId', productsCotroller.productById);

};