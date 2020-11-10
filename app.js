window.onload = function(){
    var searchbtn = document.getElementById("searchbtn");
    searchbtn.addEventListener('click',function(e){
        e.preventDefault();
        var searchinput = document.getElementById("herosearch").value;
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200 && searchinput =='') {
                document.getElementById("result").innerHTML = this.responseText;
            
          }
          if (this.readyState == 4 && this.status == 200 && searchinput !=''){
            document.getElementById("result").innerHTML = this.responseText;
          }
        }
        httpRequest.open("GET","http://localhost/info2180-lab4/superheroes.php?q=" + searchinput,true);
        httpRequest.send();
    }
)}