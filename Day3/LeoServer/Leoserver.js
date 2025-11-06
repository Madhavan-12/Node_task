const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const moviesFilePath = path.join(__dirname, "data", "movies.txt");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/html");

  if (pathname === "/" || pathname === "/home") {
    res.end(`
      <h1>🎬 Welcome to Leo Movie Booking</h1>
      <ul>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/booking?name=azhagu">Booking</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    `);
  } else if (pathname === "/movies") {
    fs.readFile(moviesFilePath, "utf8", (err, data) => {
      if (err) {
        res.end("<h2>❌ Error reading movies file!</h2>");
      } else {
        res.end(`
          <h1>🎞️ Available Movies</h1>
          <pre>${data}</pre>
          <p><strong>File Path:</strong> ${moviesFilePath}</p>
          <a href="/">Back to Home</a>
        `);
      }
    });
  } else if (pathname === "/booking") {
    const user = parsedUrl.query.name || "Guest";
    res.end(`
      <h1>🍿 Hello, ${user}! Welcome to the Booking Page</h1>
      <p>Book your favourite movie now!</p>
      <a href="/movies">View Movies</a> | <a href="/">Back Home</a>
    `);
  } else if (pathname === "/contact") {
    res.end(`
      <h1>📞 Contact Us</h1>
      <p>Email: support@leobooking.com</p>
      <p>Phone: +91 98765 43210</p>
      <a href="/">Back to Home</a>
    `);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Page Not Found 😢</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🔥 LEO Movie Booking Server running at http://localhost:${PORT}`);
});
