// remember to use turbolinks:load to make jquery effective
$(document).on('turbolinks:load', () => {
  const roomIds = $('.all_subscribed_rooms_id').data('id');
  // connect with each room
  roomIds.forEach((id) => {
    // I overwrite App.room in this code, it is not good, but it does not affect the result
    // because room_id is attached and used inside the message.
    App.room = App.cable.subscriptions.create ({
        channel: 'RoomsChannel',
        room_id: id
      }, {
        connected: function () {
          console.log(`Woooo, I am connected with Room ${id}!`);
        },
        disconnected: function () {
          console.log(`Damn it, I am disconnected with Room ${id}...`);
        },
        received: function(data) {
          console.log(`I received ${data.room_id}`);
        }
    });
  });
  // prepare to send message
  submitNewMessage();
});

function submitNewMessage() {
  $this = $('#message-input');
  $this.keydown(function(event) {
    if (event.keyCode === 13) {
      const content = event.target.value;
      const chatroomId = $this.data('roomId');
      const userId = $this.data('userId');
      console.log(content, chatroomId, userId);
      App.room.send({content: content, room_id: chatroomId, user_id: userId});
      $this.val("");
    }
  });
}