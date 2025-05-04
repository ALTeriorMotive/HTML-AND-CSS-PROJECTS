/* RECIPE POP UP MODAL SECTION */

/* Sets up the button that will open the recipe modal */
var btns = document.querySelectorAll('input.modal-button');

/* Defines all modals for each recipe */
var modals = document.querySelectorAll('.recipe-modal');

/* Get the <span> element that closes the modal */
var closeBtn = document.getElementsByClassName('close-btn');

let modalTimeout;

/* When the user clicks the recipe button, open the modal */
for (var i=0; i<btns.length; i++){
    btns[i].onclick = function (event){
        modal = document.querySelector(event.target.getAttribute('href'));
        modal.style.display = "block";
        /* Closes modal after 10 seconds, resets if the user opens modal within the inital 10 seconds */
        if(modalTimeout){
            clearTimeout(modalTimeout);
        }
        modalTimeout = setTimeout(function(){
            modal.style.display = 'none';
        }, 10000);
    }
}

/* When the user clicks on <span> (x), close the modal */
for(var i=0; i<closeBtn.length; i++){
    closeBtn[i].onclick = function (){
        for(var index in modals){
            if(modals[index].style){
                modals[index].style.display = "none";
            }
        }
    }
}

/* EMAIL VALIDATION */

document.getElementById('contactForm').addEventListener('submit',
    function(event){
        /* Overrides the default browser refresh when the submit button is pressed */
        event.preventDefault();

        /* Variables to validate that each field is filled out */
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        /* Email pattern checks for all symbols that would be needed for an email address such as the @ symbol and . and the    text that would come before, between, and after */
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        /* Use this variable to display messages if fields are filled out or thank you message */
        const valMsg = document.getElementById('validateMsg');

        if(!firstName || !lastName || !phone || !message){
            /* Checks if fields have been filled out */
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
        }else if(!emailPattern.test(email)){
            /* Checks if there is a valid email */
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email</p>';
        }else{
            /* If all fields are filled out correctly display a thank you message */
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting</p>';
        }

        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').Checked
        };

        /* Displays what the user wrote in the console */
        console.log(JSON.stringify(formData));

    }
)