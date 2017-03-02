
$(() => {
  var roomIds = $('.all_subscribed_rooms_id').data('id');
  roomIds.forEach((id) => {
    App.room= App.cable.subscriptions.create ({
        channel: 'RoomsChannel',
        room_id: id
      }, {
      received: function(data) {
        console.log(`I received ${data}`);
      }
    });
  });
});
