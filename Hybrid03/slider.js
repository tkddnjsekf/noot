var i = 0 
function next()
{
  i++;
  if( i == 1 )
  {
  document.getElementById("img").src = "2.jpg"
  }
  if( i == 2 )
  {
  document.getElementById("img").src = "3.jpg"
  }
  if( i >= 3 )
  {
  document.getElementById("img").src = "4.jpg"
  i = 3;
  }
}

function prev()
{
  i--;
  if( i <= 0 )
  {
  document.getElementById("img").src = "1.jpg"
  i = 0;  }
  if( i == 1 )
  {
  document.getElementById("img").src = "2.jpg"
  }
  if( i == 2 )
  {
  document.getElementById("img").src = "3.jpg"
  }
  if( i == 3 )
  {
  document.getElementById("img").src = "4.jpg"
  }
 
}