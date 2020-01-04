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

    $.get('http://localhost:3000', function(data){
      $('#quote').text(data);
  })
  }

  function addQuote(quote){
    console.log('quote in main.js', quote)

    // $("from")[0].reset() reset input field
    $.ajax({
      type: "POST",
      data: quote,
      dataType: 'json',
      url: 'http://localhost:3000/quote',
      success: console.log("post request sent"),
      // error: console.log("get request failed")
    })

  }
});
