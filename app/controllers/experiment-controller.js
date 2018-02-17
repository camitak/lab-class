const mongoose = require('mongoose');
const Experiment = mongoose.model('Experiment');

exports.list_all_experiments = function(req, res){
    Experiment.find({}, function(err, experiment){
        if(err) res.send(err);
        res.json(experiment);
    });
};

exports.create_experiment = function(req, res){
    var newExperiment = new Experiment(req.body);
    newExperiment.save(function(err, experiment){
        if(err) res.send(err);
        res.json(experiment);
    });
};

exports.read_experiment = function(req, res){
    Experiment.findById(req.params._id, function(err, experiment){
        if(err) res.send(err);
        res.json(experiment);
    });
};

exports.update_experiment = function(req, res){
    Experiment.findByIdAndUpdate({
        _id: req.params._id
    }, req.body, {new: true}, function(err, experiment){
        if(err) res.send(err);
        res.json(experiment);
    });
};

exports.delete_experiment = function(req, res){
    Experiment.findByIdAndRemove({
        _id: req.params._id
    }, function(err, experiment){
        if(err) res.send(err);
        res.json({message: 'Experiment deleted successfully.'});
    });
};