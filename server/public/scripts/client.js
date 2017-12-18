console.log('js loaded')

var socket = io();

var app = angular.module('RollerApp', []);

app.controller('RollerController', ['$http', function($http){
    console.log('Roller Controller has been loaded');
    var self = this;

    self.rollResult = 0;

    self.roll = function(){
        console.log('clicked roll me');
        self.rollResult = (Math.floor(Math.random() * 20)) + 1;
        console.log(self.rollResult);
        socket.emit('roll', self.rollResult);
    };

    socket.on('roll', function(result){
        console.log(result)
        $('#results').append($('<li>').text(result));
      });

}])