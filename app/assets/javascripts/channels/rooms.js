App.room= App.cable.subscriptions.create ({
    channel: 'RoomsChannel',
    room_id: '5'
  }, {
  received: function(data) {
    console.log(`I received 5`);
  }
});