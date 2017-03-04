// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();
  App.event = App.cable.subscriptions.create("EventChannel", {
        // event_id: this.state.event.id,

        connected: () => {
          console.log("connected??");
          // setTimeout(() => this.perform('follow',
          //                               { message_id: this.message_id}), 1000 );
        },

        received: (data) => {
          if (App.map) {
            console.log('received', data);
            var event = JSON.parse(data.message);
            console.log('received', event);
            addEventToMap(App.map, event);
          }
        }
      });
      console.log('this.event', App.event);
}).call(this);
