$(() => {
  // get connected rooms once connected. Buried hooker in top_nav_bar
  const roomIds = $('.all_subscribed_rooms_id').data('id');
  window.rooms = [];
  // connect with each room
  roomIds.forEach((ele) => {
    window.rooms[ele] = App.cable.subscriptions.create ({
      channel: 'RoomsChannel',
      room_id: ele
    }, {
      connected: function () {
        console.log(`Woooo, I am connected with Room ${ele}!`);
      },
      disconnected: function () {
        console.log(`Damn it, I am disconnected with Room ${ele}...`);
      },
      received: function(data) {
        // receive data, judge if the data should be appende into this room
        if(data.room_id === Number(location.pathname.match(/\d+/))) {
          if ($('#message-input').data('userId') === data.user_id) {
            $('#messages').append(`
              <div class='my-message-content'>
                <div class='wrapper'>
                  ${data.content}
                </div>
              <div>
            `);
          } else {
            $('#messages').append(`
              <div class='other-people-messages'>
                <div>
                  ${data.user_name}
                </div>
                <div>
                  ${data.content}
                <div>
              </div>
            `);
          }
        }
      }
    });
  });
});

// remember to use turbolinks:load to make jquery effective
// add event listener to be ready to send out message
$(() => {
  console.log('PAGE IS LOADED');
  $('#message-input').focus().on('keydown', function(event) {
    const $this = $(this);
    if (event.keyCode === 13) {
      const content = event.target.value;
      const chatroomId = $this.data('roomId');
      const userId = $this.data('userId');
      window.rooms[chatroomId].send({content: content, room_id: chatroomId, user_id: userId});
      $this.val("");
    }
  });
});
