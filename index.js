const express = require("express");

const HTTP_SERVER = express();

const PORT = 5000;

const fs = require("fs/promises");

async function createFile(params) {
  try {
    const content = new Date().toString().replace(/[:.]/g, "-");
    await fs.writeFile(`./Files/${content}`, content);
    console.log("hey all");
  } catch (error) {
    console.log(err);
  }
}

HTTP_SERVER.listen(PORT, "localhost", (req, res, next) => {
  console.log("server start", PORT);
});

HTTP_SERVER.use("/createFile", (request, response, next) => {
  createFile();
  return response.status(200).json({
    request: "file is created",
  });
});
