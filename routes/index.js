var express = require('express');
var request = require('request')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Telegram Bot' });
});

router.post('/send-notification', (req, res) => {
  request.post({
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, 
    form: {
      chat_id: '@belihubdotcom',
      parse_mode: 'HTML',
      text: `
<b>From:</b> ${req.body.fullname}
------------------------------------------
<b>Email:</b> ${req.body.email}
<b>Message:</b>
${req.body.message}
      `
  }}, function(err, res, body) {
    console.log(body)
  })
  res.redirect('back')
})

module.exports = router;
