var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
weight_average();
}

function draw() 
{
  background(30);
}

 
function weight_average(){
  var sum=0 
  for (i=0; i<weight.length; i=i+1)
  {
    sum=sum+weight[i]
  } 
  var average_weight=sum/weight.length
  console.log (average_weight)
}
