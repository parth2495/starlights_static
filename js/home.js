$(document).ready(function() {

  $("#comment-form").submit(function(e) {
      

      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var website = document.getElementById("website");
      var message = document.getElementById("message");
      console.log(name.value);
      console.log(email.value);
      console.log(website.value);  
      if(!name.value || !email.value || !website.value) {
        alert("Please complete a form");
      }
      else
      {
        var XHR = new XMLHttpRequest();
        
        XHR.open('POST', 'https://hidden-bayou-29194.herokuapp.com/api/blogMail',false);

        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

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

  $("#contactForm").submit(function(e) {
      

      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var msg_subject = document.getElementById("msg_subject");
      // var message = document.getElementById("message");
      console.log(name.value);
      console.log(email.value);
      console.log(msg_subject.value);  
      if(!name.value || !email.value || !msg_subject.value) {
        alert("Please complete a form");
      }
      else
      {
        var XHR = new XMLHttpRequest();
        
        XHR.open('POST', 'https://hidden-bayou-29194.herokuapp.com/api/blogMail',false);

        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

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

  $("#subscribeForm").submit(function(e) {
      

      
      var subscribe = document.getElementById("subscribe");

      console.log($(this).serialize());
      console.log(subscribe.value);
      if(!subscribe.value) {
        alert("Please complete a form");
      }
      else
      {
        var XHR = new XMLHttpRequest();
        
        XHR.open('POST', 'https://hidden-bayou-29194.herokuapp.com/api/blogMail',false);

        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

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