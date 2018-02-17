const mongoose = require('mongoose');
const Element = mongoose.model('Element');

exports.list_all_elements = function(req, res){
    Element.find({}, function(err, element){
        if(err) res.send(err);
        res.json(element);
    });
};

exports.create_element = function(req, res){
    var newElement = new Element(req.body);
    newElement.save(function(err, element){
        if(err) res.send(err);
        res.json(element);
    });
};

exports.read_element = function(req, res){
    Element.findById(req.params._id, function(err, element){
        if(err) res.send(err);
        res.json(element);
    });
};

exports.update_element = function(req, res){
    Element.findByIdAndUpdate({
        _id: req.params._id
    }, req.body, {new: true}, function(err, element){
        if(err) res.send(err);
        res.json(element);
    });
};

exports.delete_element = function(req, res){
    Element.findByIdAndRemove({
        _id: req.params._id
    }, function(err, element){
        if(err) res.send(err);
        res.json({message: 'Element deleted successfully.'});
    });
};