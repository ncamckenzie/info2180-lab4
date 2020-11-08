window.onload = function(){
    var searchbtn = document.getElementById("searchbtn");
    searchbtn.addEventListener('click',function(e){
        e.preventDefault();
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              alert(this.responseText);
            }
          }
        httpRequest.open("GET","http://localhost/info2180-lab4/superheroes.php",true);
        httpRequest.send();
    }
    )}