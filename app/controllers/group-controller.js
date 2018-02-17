const mongoose = require('mongoose');
const Group = mongoose.model('Group');

exports.list_all_groups = function(req, res){
    Group.find({}, function(err, group){
        if(err) res.send(err);
        res.json(group);
    });
};

exports.create_group = function(req, res){
    var newGroup = new Group(req.body);
    newGroup.save(function(err, group){
        if(err) res.send(err);
        res.json(group);
    });
};

exports.read_group = function(req, res){
    Group.findById(req.params._id, function(err,  group){
        if(err) res.send(err);
        res.json(group);
    });
};

exports.update_group = function(req, res){
    var newReq = req.body;
    if(req.body.hasOwnProperty('experiment_id')){
        newReq = {$addToSet: {"experiment_id": {$each: req.body.experiment}}};
        delete req.body.experiment;
        if(Object.keys(req.body).length > 0 && req.body.constructor === Object)
            newReq["$set"] = req.body;
    }
    Group.findByIdAndUpdate({
        _id: req.params._id
    }, newReq, {new: true}, function(err, group){
        if(err) res.send(err);
        res.json(group);
    });
};

exports.delete_group = function(req, res){
    Group.findByIdAndRemove({
        _id: req.params._id
    }, function(err, group){
        if(err) res.send(err);
        res.json({message: 'Group deleted successfully!'});
    });
};

