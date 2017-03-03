
$(() => {
  const roomIds = $('.all_subscribed_rooms_id').data('id');
  console.log('imhere');
  // connect with each room
  roomIds.forEach((id) => {
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
          console.log(`I received ${data}`);
        }
    });
  });
  // prepare to send message
  submitNewMessage();
});

function submitNewMessage() {
  console.log('YoYoYoYoYo');
  $this = $('#message-input');
  $this.keydown(function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      const content = event.target.value;
      const chatroomId = $this.data('roomId');
      const userId = $this.data('userId');
      console.log('I am here right????????');
      console.log(content, chatroomId, userId);
      App.room.send({content: content, room_id: chatroomId, user_id: userId});
      $('[data-textarea="message"]').val(" ");
      return false;
    }
  });
}