var xhr = new XMLHttpRequest();
xhr.open('GET', '/content.txt', true);

xhr.onreadystatechange = function(){
  document.getElementById('source').innerHTML = xhr.responseText;
  //console.log();
  var slideshow = remark.create({
    ratio: '16:9',
    highlightStyle: 'monokai'
  });
};

xhr.send();
