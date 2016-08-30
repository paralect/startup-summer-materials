# lecture-sockets

TODO:

1. On page load show confirm, insert username

  `var username = prompt("Please enter your name", "anonymous");`
  
2. Store username in sent message

  (add to $.post, add username field when creating message in mongodb)

3. Show X icon for messages sent by current user

  (when message:sent received, check if message.username === username, and if so add X icon)

4. On X click delete message, update via sockets

  add DELETE route to DELETE api/messages
  add on('deleted') event to events.js. Send 'message:deleted' to room
  add 'message:deleted' handler to client/index.js
