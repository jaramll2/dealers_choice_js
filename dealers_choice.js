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
      <title>Frog and Toad Care Sheets</title>
    </head>
    <body>
      <div id = "header">
        <header>Frog Care Sheet</header>
      </div>

      <div id = "frogNames">
        <ul>
        <li>American Green Tree Frog</li>
        <li>Barking Tree Frog</li>
        <li>Fire Bellied Toad</li>
        <li>Pac Man Frog</li>
        <li>White Dumpy Tree Frog</li>
        <li>${frogsList}</li>
        </ul>
      </div>

      <div id= "footer">
        <p>All care sheet information was aquired from https://www.petsuppliesplus.com/</p>
      </div>
    </body>
  </html>`;

    //Finally, send a response
    res.send(html);
} );

// app.get('/posts/:id', (req, res) => {
//   const id = req.params.id;
//   const post = postBank.find(id);
  
//   //then prepare some html to send as output
//   const html = `<!DOCTYPE html>
//     <html>
//     <head>
//       <title>Wizard News</title>
//       <link rel="stylesheet" href="/style.css" />
//     </head>
//     <body>
//       <div class="news-list">
//         <header><img src="/logo.png"/>Wizard News</header>
//           <div class='news-item'>
//             <p>
//               ${post.title}
//               <small>(by ${post.name})</small>
//             </p>
//             <p>
//               ${post.content}
//             </p>
//           </div>
//       </div>
//     </body>
//   </html>`;

//   //Finally, send a response
//   res.send(html);

// });



const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});