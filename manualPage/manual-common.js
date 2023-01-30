// HEADER 불러오기
window.addEventListener('load', function() {
  var allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
      var includePath = el.dataset.includePath;
      if (includePath) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  el.outerHTML = this.responseText;
              }
          };
          xhttp.open('GET', includePath, true);
          xhttp.send();
      }
  });
  // SEARCH BAR
  var allElements02 = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements02, function(el) {
      var includePath02 = el.dataset.includePath02;
      if (includePath02) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  el.outerHTML = this.responseText;
              }
          };
          xhttp.open('GET', includePath02, true);
          xhttp.send();
      }
  });
  var includePath03 = el.dataset.includePath03;
  if (includePath03) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              el.outerHTML = this.responseText;
          }
      };
      xhttp.open('GET', includePath03, true);
      xhttp.send();
  }
  
});