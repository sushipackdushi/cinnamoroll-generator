import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomQuote = adj[Math.floor(Math.random() * adj.length)];
  const imgSource = "images/img" + Math.floor((Math.random() * 6)+ 1) + ".png"; 
  res.render("index.ejs", {
    quote: randomQuote,
	img: imgSource,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const adj = [
  	"Let's fly like fluffy clouds~",
	"Curled up like my tail?",
	"It tastes like my favorite Cinnamon Roll!",
	"Sob...Sob...",
	"I just want to get along...! Why!",
	"My tail is pretty, right?",
];

