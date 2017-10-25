const express = require( "express" );
const Web3 = require( "web3" );
const contract = require( "./contract" );

const app = express();
const web3 = new Web3();

web3.setProvider( new web3.providers.HttpProvider( "http://localhost:8545" ) );
const helloContract = web3.eth.contract( contract.ABI ).at( contract.address );

app.get( "/", function( req, res ){
  web3.personal.unlockAccount( web3.eth.coinbase, "ytpyf..c1", 1000 );
  
  res.send( helloContract.setData.sendTransaction( "Hell", { from: web3.eth.coinbase } ) );
} );

app.listen( 8040, function(){
  console.log( "Server started" );
} );