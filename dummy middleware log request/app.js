// create an new project
// 1) install nodemon and express
// 2) add 2 dummy middleware that log request path and request method respectively
// 3) add 3rd middleware that returns a Response
// 4)  now add handling using 2 more middleware that handle path / , a request to /contact-us page.
// 5)contact us  should return form with name and email as input fields that submits to /contact-us page
// 6) also handle post incoming request to /contact-us path using a separate middleware

import express from "express";
const app = express();

// Parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("this is first dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("this is second dummy middleware", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log(`this handle root path`);
  next();
});

app.get("/contact-us", (req, res, next) => {
  console.log(`this handle contact us`);
  res.send(`
    <form action="/contact-us" method="POST">
      <input type="text" name="username" placeholder="Enter name" />
      <input type="email" name="usergmail" placeholder="Enter email" />
      <input type="submit" />
    </form>
  `);
});

app.post("/contact-us", (req, res, next) => {
  console.log(`POST request to contact-us`);
  console.log(`Name: ${req.body.username}, Email: ${req.body.usergmail}`);
  res.send(
    `<h1>Thank you ${req.body.username}! We'll contact you at ${req.body.usergmail}</h1>`,
  );
});

app.use((req, res, next) => {
  console.log("this is 3rd middleware", req.url, req.method);
  res.send(`<h1>this is 3rd middleware that return responses</h1>`);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
