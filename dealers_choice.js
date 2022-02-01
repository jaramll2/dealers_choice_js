const express = require("express");
const morgan = require("morgan");
const frogs = require("./frogs.js");

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.get("/", (req, res) => {
  //First, get the list of frogs
  const frogsList = frogs.list();

  //prepare some html to send as output
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Frog and Toad Care Guide</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <div id = "header">
        <header>&#128056 Frog and Toad Care Guide &#128056</header>
      </div>

      <div id = "frogNames">
        ${frogsList.map(frog => `
        <p>
          <span class="frogs-position"> &#128056 </span><a href="/posts/${frog.id}">${frog.title}</a>
        </p>`
         ).join('')}
      </div>

      <div id= "footer">
        <p><small>All care sheet information was aquired from https://www.petsuppliesplus.com/</small></p>
      </div>
    </body>
  </html>`;

    //Finally, send a response
    res.send(html);
} );

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  const frogItem = frogs.find(id);

  //then prepare some html to send as output
  const html = `<!DOCTYPE html>
    <html>
    <head>
        <title>Frog and Toad Care Guide</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <div id = "header">
            <header><a href="/">&#128056 Frog and Toad Care Guide &#128056 </a></header>
        </div>

        <div id='frogItemTitle'>
            <p>
              ${frogItem.title}
            </p>
        </div>

        <div id = "photos">
            <img src="${frogItem.image}">
        </div>

        
        <div id='frogItemContent'>    
            <p>
            ${frogItem.content}
            </p>
        </div>

        <div id= "footerFlex">
            <p>All care sheet information was aquired from https://www.petsuppliesplus.com/</p>
        </div>
        
      
    </body>
  </html>`;

  //Finally, send a response
  res.send(html);

});



const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});