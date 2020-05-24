const http = require('http'),

      html = `<!doctype>
                <html>
                    <head>
                        <meta charset="utf8">
                        <link rel="stylesheet" href="style.css">
                        <title>Basic_Node_JS</title>
                    </head>
                    <body>
                        <h1>Basic_Node_JS</h1>
                        <button>Push Me Harder!</button>

                    <script src="app.js"></script>
                    </body>
                </html>`,
      css = `html {
                background: mistyRose;
                }

            body {
                margin: 0;
                padding: 0;
                text-align: center;
                }

            h1 {
                background-color: coral;
                color: #eee;
                padding: .5em;
                font-family: 'MS Comic Sans';
               }`,
      js = `
            const button = document.querySelector('button');
            button.addEventListener('click', event => alert('NodeJS in action!'));   
      `;

http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        break;
        case '/style.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
        break;
        case '/app.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(js);
        break;
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('404 Not Found..');
        break;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(html);
}).listen(3000, () => console.log('Server is running..'));