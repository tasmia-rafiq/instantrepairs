const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.popup-mobilemenu');
const menuBar = document.getElementById('bar');
const close = document.getElementById('close');

var acc = document.getElementsByClassName("acc-btn");
var i;

window.onscroll = () => {
    if (document.documentElement.scrollTop > 150) {
        navbar.classList.add("scroll-on");
    } else {
        navbar.classList.remove("scroll-on");
    }
}

if (menuBar) {
    menuBar.addEventListener('click', () => {
        mobileMenu.classList.add('menu-open');
    })
}

if (close) {
    close.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open');
    })
}


// FAQ Accordion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("acc-active");
  
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

//contact form
jQuery(document).ready(function(){
    cavani_tm_contact_form();
  
    function cavani_tm_contact_form(){
      
      "use strict";
      
      jQuery(".contact-form #send_message").on('click', function(){
          
          var name 		= jQuery(".contact-form #name").val();
          var email 		= jQuery(".contact-form #email").val();
          var phone 		= jQuery(".contact-form #phone").val();
          var message 	= jQuery(".contact-form #message").val();
          var subject 	= jQuery(".contact-form #subject").val();
          var success     = jQuery(".contact-form .returnmessage").data('success');
      
          jQuery(".contact-form .returnmessage").empty(); 

          if(name===''||email===''||phone===''||message===''){
              
              jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
          }
          else{
              // Returns successful data submission message when the entered information is stored in database.
              jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_phone: phone, ajax_message:message, ajax_subject: subject}, function(data) {
                  
                  jQuery(".contact-form .returnmessage").append(data);//Append returned message to message paragraph
                  
                  
                  if(jQuery(".contact-form .returnmessage span.contact_error").length){
                      jQuery(".contact-form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
                  }else{
                      jQuery(".contact-form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
                      jQuery(".contact-form .returnmessage").slideDown(500).delay(4000).slideUp(500);
                  }
                  
                  if(data===""){
                      jQuery("#contact-form")[0].reset();//To reset form fields on success
                  }
                  
              });
          }
          return false; 
      });
  }
  });
