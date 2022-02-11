'use strict';

const glob = require('glob');
const path = require('path');
const _ = require('lodash');

// const controllers = {
//     book: require('../model/bookModel'),
// }

module.exports = server => {
    // _.forEach(controllers, controller => {
    //     const db = controller;
    //     _.forEach(controller.routes(), route => {
    //         console.log(db);
    //         server[route[0]](`/${route[1]}`, db[route[2]])
    //     })
    // })

    glob.sync('./routes/**/*.js', { ignore: ['./routes/routerHandler.js'] }).forEach((file) => {
        const routerRoot = file.split('/').pop().replace('Route.js', '');
        server.use(`/${routerRoot}`, require(path.resolve(file)));
    })
}

//Isso não é o ideal ainda para um projeto gigante ( não nosso caso), mas ja torna a rota dinâmica
//Apenas deve-se seguir o seguinte padrão

//1 - nome do arquivo deve ser 'rota'.Route.js, sendo a rota o endpoint que você deseja criar
//exemplo userRoute.js , o resultado dessa função será fazer um app.use('/user', arquivo);
