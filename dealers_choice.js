const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.get("/", (req, res) => {
  //prepare some html to send as output
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Frog Care Sheets</title>
    </head>
    <body>
      <div class>
        <header>Frog Care Sheet</header>
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