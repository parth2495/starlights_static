$(document).ready(function() {

$("#comment-form").submit(function(e) {
      

      var name = document.getElementById("name");
      var Email = document.getElementById("Email");
      var Website = document.getElementById("Website");
      var message = document.getElementById("message");
      console.log(name.value);
      console.log(Email.value);
      console.log(Website.value);  
      if(!name.value || !Email.value || !Website.value) {
        alert("Please complete a form");
      }
      else
      {
        var XHR = new XMLHttpRequest();
        
        XHR.open('POST', 'https://hidden-bayou-29194.herokuapp.com/api/blogMail',false);

        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XHR.setRequestHeader("Origin", 'http://localhost:4200');
        console.log($(this).serialize());
        XHR.send($(this).serialize());

        XHR.addEventListener('load', function(event) {
          alert('Yeah! Data sent and response loaded.');
        });

    
        XHR.addEventListener('error', function(event) {
          alert('Oops! Something went wrong.');
        });
        // $.ajax({
        //   type: "POST",
        //   url: "https://hidden-bayou-29194.herokuapp.com/api/blogMail",
        //   data: $(this).serialize(),
        //   success: function() {
        //      alert('success');
        //   }
        // });
        // console.log("HERE");
      }
  }); 
});