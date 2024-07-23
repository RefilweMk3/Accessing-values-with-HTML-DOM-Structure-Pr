var text=document.getElementById("head").innerHTML;
alert("Hey there,This is "+text)

function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

    let message = '';

    if (email === '') {
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color = 'red';
    } else if (age === '') {
        message = 'Age must be between 12 and 50.';
        msgBox.style.color = 'red';
    } 

    else {
        message = 'Login successful!';
        msgBox.style.color = 'green';
    }

    msgBox.innerText = message;
}


function myFunction(){
  document.getElementById("p1").innerHTML = 
  document.getElementById("demo").firstChild.nodeValue;
  
  document.getElementById("p2").innerHTML =
  document.getElementById("demo").childNodes[0].nodeValue;
}