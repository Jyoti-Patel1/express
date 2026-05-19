import sumRequestHandler from "./sumHandler.js";
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title></title>
      </head>
      <body>
      <h1>welcome to home page</h1>
      <li><a href = "calculator">go to calculator</a></li>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <html>
      <head>
      <title></title>
      </head>
      <body>
      <h1>here is calculator</h1>
      <form action="/calculator-result" method = "POST">
     <input type = "text" placeholder ="first num" name="first"/>
     <input type ="text" placeholder ="second num" name ="second"/>
     <input type ="submit" value ="sum">
     </form>
      </body></html>
     
  `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  } else res.setHeader("Content-Type", "text/html");
  res.write(`
     <html>
      <head>
      <title></title>
      </head>
      <body>
      <h1>404 page not found</h1>
      <li><a href = "/">go to home</a></li>
      </body></html>
    `);
  return res.end();
};
export default requestHandler;
