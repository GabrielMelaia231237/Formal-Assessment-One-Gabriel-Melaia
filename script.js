document.addEventListener('DOMContentLoaded', function() {
    var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      
      var checkbox = document.getElementById('checkbox');
        var nameInput = document.getElementById('name');
            var surnameInput = document.getElementById('surname');
            var subjectSelect = document.getElementById('subject');
        var emailInput = document.getElementById('email');
      var contactInput = document.getElementById('contact');
      
      if (checkbox.checked) {
        var name = nameInput.value;
            var surname = surnameInput.value;
                var subject = subjectSelect.value;
            var email = emailInput.value;
        var contact = contactInput.value;
        
var message = "Thank you for signing up!\n\n";
message += "Name: " + name + " " + surname + "\n";
message += "Subject: " + subject + "\n";
message += "Email: " + email + "\n";
message += "Contact Number: " + contact;
        
        alert(message);
      } else {
        var fullName = nameInput.value + " " + surnameInput.value;
            var errorMessage = "Well, well, well... why don't you want to sign up for our newsletter, ";
                errorMessage += fullName + "? If you want to sign up, you better CHECK that newsletter box!";
        
        alert(errorMessage);
      }
    });
  });


  // Hello sir, I looked at the JS we did in class, I tried and it didnt really work well. I had quite a few errors, so I googled and found videos that had a bit more of a complicated method but it seemed to work for me. I apologise if this isnt what was meant to be done.  