//import { brotliDecompressSync } from "zlib";

$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
    
  });

  function getQuote(){

    //YOUR CODE HERE, Add a GET request 
    // var getObj = $.ajax({
    //   type: "GET",
    //   data: {1: this.responseText},
    //   url: 'http://localhost:3000',
    //   success: console.log("get request sent"),
    // })
    // // console.log($.ajax({
    // //   type: "GET",
    // //   url: 'http://localhost:3000',
    // //   success: console.log("get request sent"),
    // // }))
    // console.log()
    // $('body').append()

    $.get('http://localhost:3000', function(data){
      $('#quote').text(data);
  })
  }

  function addQuote(quote){
    
    //YOUR CODE HERE, Add a POST request
    $.ajax({
      type: "POST",
      data: quote,
      url: 'http://localhost:3000',
      success: console.log("post request sent"),
      // error: console.log("get request failed")
    })

  }
});
