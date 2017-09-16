var Twit = require('twit')

var T = new Twit({
  consumer_key:         ' ',
  consumer_secret:      ' ',
 access_token:         ' ',
  access_token_secret:  ' ',
})

console.log(T);

T.post('statuses/update', { status: '@iamD05 how are you doing' }, function(err, data, response) {
  console.log(data);
})

T.get('search/tweets', { q: 'imags', count: 10}, function(err, data, response)
var tweet=data.statuses[0].text; {
  tweet='tweet'+data;
  		//console.log(data.statuses[].text);
})
var stream=T.stream('user');
stream.on('follow',followed);

function followed(eventMsg)
{
	var name=eventMsg.source.name;
	var screenName=eventMsg.source.screen_name;
console.log(eventMsg.source.screen_name);
tweetIt('@'+screenName+'thanks for following me'}
	function tweetIt(txt)
	{
		T.post('statuses/update', { status: '@iamD05 It seems like WEBSCRAPING' }, function(err, data, response) {
  console.log(data);
})
