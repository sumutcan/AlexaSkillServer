module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'cocktail-master-skill' );


app.launch( function( request, response ) {
	response.say( 'Wilkommen zu Cocktail Master' ).reprompt( 'Alles tip top.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);
	response.say( 'Leider gibt es ein Fehler: ' + error.message);
};

app.intent('cocktailByName',
  {
    "slots":{"name":"NAME"}
	,"utterances":[
		"gib mir der Rezept von {name}",
		"erzaehl mir der Rezept von  {name}}",
		"Was ist der Rezept von {name}"]
  },
  function(request,response) {
    var name = request.slot('name');
    response.say("Der Rezept von "+name+" ist sehr geil.");
  }
);

module.exports = app;
