const sumRequestHandler = (req, res) => {
  console.log("its sum request handler");

  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    console.log(bodyStr);

    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head>
      <title>Calculator Result</title>
      </head>
      <body>
      <h1>Your sum is ${result}</h1>
      <p>${Number(bodyObj.first)} + ${Number(bodyObj.second)} = ${result}</p>
      <a href="/calculator">Back to calculator</a>
      </body>
      </html>
      `);
    res.end();
  });
};
export default sumRequestHandler;
