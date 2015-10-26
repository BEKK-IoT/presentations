var xhr = new XMLHttpRequest();
xhr.open('GET', '/content.txt', true);

xhr.onreadystatechange = function(){
  document.getElementById('source').innerHTML = xhr.responseText;
  var slideshow = remark.create({
    ratio: '16:10',
    highlightStyle: 'monokai'
  });
};

xhr.send();
