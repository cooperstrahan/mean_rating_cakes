const taskController = require('../controller/cakeController');

module.exports = app => {
  app
    .get('/cakes', taskController.getAll)
    .get('/cakes/:id', taskController.getOne)
    .post('/cakes', taskController.createCake)
    .put('/cakes/:id', taskController.rateCake)
    .delete('/cakes/:id', taskController.delete);
}