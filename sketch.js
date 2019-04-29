var canvas;
var headline;
var snippet;
var pub_date;

//var h1; 
//var news;
//var button;
//var slider;
//var earthquake;
//var img;

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=earthquake magnitude&api-key=pdtETB6thaJpQaS6gGiEM64mj6c8vdTh';

function setup() {
  canvas = createCanvas(400, 1250);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

//canvas = createCanvas(displayWidth - 400, displayHeight * 2);
//canvas.position(400,0);
//button = createButton("Show news");
//button.position(0,370)
//button.mousePressed(showNews);
//slider = createSlider(10,100, 47);
//slider.position(800,550);
loadJSON(url, gotData);

//earthquake = createP("earthquake!");
//earthquake.mouseOver(overpara);
//earthquake.mouseOut(outpara);
//paragraphs = select(snippet);

}

function gotData(data) {
//background(0)

var articles = data.response.docs;
for (var i = 0; i < 5; i++){
headline = createElement('h2', articles[i].headline.main);
headline.size(400,85);
snippet = createP(articles[i].snippet);
snippet.size(350,68);
pub_date = createP(articles[i].pub_date);
 



}


}


//}

//function overpara(){
//earthquake.html("Earthquake mexico");
//}
//function outpara(){
//earthquake.html("Earthquake");
//}
//function showNews (){
//h1.html("Here are some news!");
//news.position(0,350);
//button.position(0,600)
//}

function draw (){
background(151);

//fill(255, 0, 0);

//ellipse(x, y, slider.value(), slider.value());
//x = x + random(-0.5,0.5);
//y = y + random(-0.1,0.1);

//text("eartquake",x , y - 50);
}
