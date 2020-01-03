const http = require('http');

//headers to allows CORS requests
const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10
};

const port = 3000;

// TODO: Fill with strings of your favorite quotes :)
const quotes = [
  'Fake It Til You Make It',
  'Do Or Do Not, There Is No Try - Yoda',
  'Even The Smallest Person Can Change The Course Of the Future- Galadriel',
  'You Miss 100% Of The Shots You Dont Take - Wayne Gretzky - Michael Scott',
  'I Am Ready To Face Any Challenge That Might Be Foolish Enough To Face Me - Dwight Schrute'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const handleRequest = function(req, res) {
  console.log(`Endpoint: ${req.url} Method: ${req.method} Res: ${res}`);

  // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
  if (req.url == '/') {
    console.log('redirecting');
    res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
    res.end();
  }

  // TODO: GET ONE
  if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
    //YOUR CODE HERE
    console.log("get method received to server")

    res.writeHead(200, {...headers})
    res.end(quotes[getRandomInt(0,quotes.length-1)]);

    // req.response(quotes)

  }
  // TODO: POST/CREATE
  
  else if ((req.url == 'quote' || req.url == '/quote') && req.method == "POST") {
    //YOUR CODE HERE
    console.log("post method correct from server")
  }

//CATCH ALL ROUTE
  else {
    res.writeHead(404,headers);
    res.end('Page not found');

  }
}

const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
