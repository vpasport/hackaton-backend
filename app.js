const express = require( "express" );
const app = express();

app.get( "/", function( req, res ){
  res.send( "Hello" );
} );

app.listen( 8040, function(){
  console.log( "Server started" );
} );