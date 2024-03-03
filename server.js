const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;
const token = '6613410558:AAEi1EaK2vyo3rmc8msmEqsqMZYWm0L1y4w'
const webhookUrl = 'https://e631-102-176-94-200.ngrok-free.app/telegram-update';
const path = require('path');



// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post('/telegram-update', (req, res) => {
  const update = req.body;

  // Check if the update is a message and process it
  if (update.message && update.message.text) {
    const chatId = update.message.chat.id;
    const receivedText = update.message.text;

    // Respond to /start command with a button to open the Mini App
    if (receivedText.startsWith('/start')) {
      // Send a message with a button to open the Mini App
      axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: "Welcome! Let's get started.",
        reply_markup: {
          inline_keyboard: [[{
            text: 'Open Mini App',
            web_app: { url: 'https://7435-102-176-94-200.ngrok-free.app' } // Replace with your Mini App URL
          }]]
        }
      })
        .then(response => {
          console.log("Mini App link sent");
        })
        .catch(e => {
          console.error("Error sending Mini App link", e);
        });
    } else {
      // Define your response message for other texts
      const responseText = `You sent: ${receivedText}`;

      // Use Telegram Bot API to send a response message for other texts
      axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
        chat_id: chatId,
        text: responseText,
      })
        .then(response => {
          console.log("Message sent");
        })
        .catch(e => {
          console.error("Error sending message", e);
        });
    }
  }

  // Always respond to Telegram with 200 OK to acknowledge receipt of the update
  res.status(200).send();
});

// Set webhook
axios.post(`https://api.telegram.org/bot${token}/setWebhook`, {
  url: webhookUrl
})
  .then(response => {
    console.log("Webhook set successfully:", response.data.description);
  })
  .catch(error => {
    console.error("Error setting webhook:", error.response.data);
  });

// Serve the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler for any request that doesn't match one above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
