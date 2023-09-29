const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", function (request, response) {
  response.send("Dream big :)))");
});


app.get("/sessions", function (request, response) {
  response.status(200).json(quotes);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}. Ready to accept requests!`);
});
