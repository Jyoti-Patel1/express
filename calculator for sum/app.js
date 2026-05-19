// 1) create new Node.js project named as calculator
// 2) on the home page (route "/") show welcome page and a link to the calculator page
// 3) on the "/calculator" page display a form with 2 input fields and a "sum" button
// 4) when the user clicks the "sum" button they should be taken  to the "calulator-result" page, which shows the sum of the 2 number
//       i)  make sure the request goes to the server
//      ii) create separate module for addition function
//      iii)  create another module to handle incoming requests
//      iv) on the "/calculate-result" page , parse the user input use the addition module to calculate the sum and display the result on new html page

import http from "http";
import requestHandler from "./handler.js";
const server = http.createServer(requestHandler);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
