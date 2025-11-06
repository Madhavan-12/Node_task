const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const moviesFilePath = path.join(__dirname, "data", "movies.txt");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const header = `
    <style>
      body { 
        font-family: Arial, sans-serif; 
        background: linear-gradient(135deg, #1b1b1b, #2a2a2a);
        color: white; 
        text-align: center; 
        padding: 40px;
      }
      h1 { color: #f5c518; font-size: 2em; }
      ul { list-style: none; padding: 0; margin-top: 20px; }
      li { display: inline-block; margin: 0 20px; }
      a { text-decoration: none; color: #00bcd4; font-weight: bold; }
      a:hover { color: #f5c518; }
      pre { background: #222; padding: 15px; border-radius: 10px; color: #00ffb3; }
      footer { margin-top: 40px; color: gray; font-size: 0.9em; }
      .container { max-width: 600px; margin: auto; }
    </style>
    <div class="container">
  `;

  const footer = `
    <footer>© 2025 Leo Movie Booking | Designed by Azhagu</footer>
    </div>
  `;

  if (pathname === "/" || pathname === "/home") {
    res.end(`
      ${header}
      <h1>🎬 Welcome to <span style="color:#f5c518">Leo Movie Booking</span></h1>
      <ul>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/booking?name=azhagu">Booking</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      ${footer}
    `);
  } 
  else if (pathname === "/movies") {
    fs.readFile(moviesFilePath, "utf8", (err, data) => {
      if (err) {
        res.end(`${header}<h2>❌ Error reading movies file!</h2>${footer}`);
      } else {
        res.end(`
          ${header}
          <h1>🎞️ Available Movies</h1>
          <pre>${data}</pre>
          <p><strong>File Path:</strong> ${moviesFilePath}</p>
          <a href="/">⬅ Back to Home</a>
          ${footer}
        `);
      }
    });
  } 
  else if (pathname === "/booking") {
    const user = parsedUrl.query.name || "Guest";
    res.end(`
      ${header}
      <h1>🍿 Hello, ${user}! Welcome to the Booking Page</h1>
      <p>Book your favourite movie now!</p>
      <a href="/movies">🎥 View Movies</a> | <a href="/">🏠 Back Home</a>
      ${footer}
    `);
  } 
  else if (pathname === "/contact") {
    res.end(`
      ${header}
      <h1>📞 Contact Us</h1>
      <p>Email: support@leobooking.com</p>
      <p>Phone: +91 98765 43210</p>
      <a href="/">⬅ Back to Home</a>
      ${footer}
    `);
  } 
  else {
    res.statusCode = 404;
    res.end(`${header}<h1>404 Page Not Found 😢</h1>${footer}`);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🔥 LEO Movie Booking Server running at http://localhost:${PORT}`);
});
