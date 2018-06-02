//Engine list -- Use a link that includes the beginning of his query request at the end
engines=[
  {name:"DuckDuckGo", url:"https://duckduckgo.com/?q="},
  {name:"Google", url:"https://www.google.it/search?q="},
  {name:"Google Images", url:"https://www.google.com/search?&tbm=isch&q="},
  {name:"YouTube", url:"https://www.youtube.com/results?search_query="},
];

for (var i = 1; i < 5; i++)
{
  document.getElementById("search-bar"+i).addEventListener("keydown", function(e) {
    if (e.keyCode == 13) { newSearch(); }
  }, false);
}

function newSearch(){
  id = document.activeElement.id;
  num = id.substring(id.length-1, id.length);
  window.open(engines[num-1].url+document.getElementById(id).value,"_self");
}
