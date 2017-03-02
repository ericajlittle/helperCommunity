// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels


console.log('cable.js is loading')
(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();
  console.log('app:', App);
  console.log('this.app', this.App);
}).call(this);
