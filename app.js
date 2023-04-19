// first we need to create a server and tell it to listen to a particular port
// http library is required to create a server
const http = require("http");
//we need to read the file index.html that we created earlier
const fs = require("fs"); // this has all the file handling methods
const port = 3000; // what port to listen to

const server = http.createServer((req, res) => {
  // this function will be called every time a request is made to the server
  // we will add all the activities that we want to do when a request is made inside this function
  // we need to send the response to the client
  // we will tell the browse we are going to write html
  res.writeHead(200 /* status code */, {
    "Content-Type" /* This is one of the header */: "text/html",
  });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  }); // this will read the file and return the data

  //   res.write("Hello Node");
  //   res.end();
});

// we need to tell the server to listen to a particular port
server.listen(port, (error) => {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("Server is listening on port " + port);
  }
});
