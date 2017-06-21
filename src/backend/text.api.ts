let {Router} = require('express');
let loremIpsum = require('lorem-ipsum');

// text API

var COUNT = 4;
var TODOS = [
    { id: 0, value: 'finish example', created_at: new Date(), completed: false },
    { id: 1, value: 'add tests',      created_at: new Date(), completed: false },
    { id: 2, value: 'include development environment', created_at: new Date(), completed: false },
    { id: 3, value: 'include production environment',  created_at: new Date(), completed: false }
];

export function createTextApi() {

    let router = Router();

    router.route('')
        .get(function(req, res) {
            res.send(loremIpsum());
        });

    // router.param('todo_id', function(req, res, next, todo_id) {
    //     // ensure correct prop type
    //     var id = Number(req.params.todo_id);
    //     try {
    //         var todo = TODOS[id];
    //         req.todo_id = id;
    //         req.todo = TODOS[id];
    //         next();
    //     } catch (e) {
    //         next(new Error('failed to load todo'));
    //     }
    // });
    //
    // router.route('/todos/:todo_id')
    //     .get(function(req, res) {
    //         console.log('GET');
    //
    //         res.json(req.todo);
    //     });

    return router;
};
