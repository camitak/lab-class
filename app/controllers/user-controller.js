const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.list_all_users = function(req, res){
    User.find({}, function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.create_user = function(req, res){
    var newUser = new User(req.body);
    newUser.save(function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.read_user = function(req, res){
    User.findById(req.params._id, function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.update_user = function(req, res){
    User.findByIdAndUpdate({
        _id: req.params._id
    }, req.body, {new: true}, function(err, user){
        if(err) res.send(err);
        res.json(user);
    });
};

exports.delete_user = function(req, res){
    User.remove({
        _id: req.params._id
    }, function(err, user){
        if(err) res.send(err);
        res.json({message: 'User deleted successfully'});
    });
};