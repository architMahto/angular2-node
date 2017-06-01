var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function (req, res, next) {
  Message
    .find()
    .exec(function(err, messages) {
      if (err) {
        res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }

      res.status(200).json({
        message: 'Successfully retrieved',
        obj: messages 
      });
    });
});

router.post('/', function (req, res, next) {
  var message = new Message({
    content: req.body.content
  });

  message.save(function(err, result) {
    if (err) {
      res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }

    res.status(201).json({
      message: 'Saved message',
      obj: result
    });
  });
});

router.patch('/:id', function(req, res, next) {
  Message.findById(req.params.id, function(err, message) {
    if (err) {
      res.status(500).json({
        title: 'An error occured',
        error: err
      });
    }

    if (!message) {
      return res.status(404).json({
        title: 'No message found!',
        error: {message: 'Message not found'}
      });
    }

    message.content = req.body.content;
    message.save(function(err, result) {
      if (err) {
        res.status(500).json({
          title: 'An error occured',
          error: err
        });
      }

      res.status(200).json({
        message: 'Updated message',
        obj: result
      })
    });
  });
});

module.exports = router;