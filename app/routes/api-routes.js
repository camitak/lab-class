const userController = require('../controllers/user-controller');
const groupController = require('../controllers/group-controller');
const elementController = require('../controllers/element-controller');
const experimentController = require('../controllers/experiment-controller');

module.exports = function(app){
   
    //user routes
    app.route('/users')
        .get(userController.list_all_users)
        .post(userController.create_user);

    app.route('/users/:_id')
        .get(userController.read_user)
        .put(userController.update_user)
        .delete(userController.delete_user);

    //group routes
    app.route('/groups')
        .get(groupController.list_all_groups)
        .post(groupController.create_group);

    app.route('/groups/:_id')
        .get(groupController.read_group)
        .put(groupController.update_group)
        .delete(groupController.delete_group);

    //element routes
    app.route('/elements')
        .get(elementController.list_all_elements)
        .post(elementController.create_element);

    app.route('/elements/:_id')
        .get(elementController.read_element)
        .put(elementController.update_element)
        .delete(elementController.delete_element);

    //experiment routes
    app.route('/experiments')
        .get(experimentController.list_all_experiments)
        .post(experimentController.create_experiment);

    app.route('/experiments/:_id')
        .get(experimentController.read_experiment)
        .put(experimentController.update_experiment)
        .delete(experimentController.delete_experiment);
};