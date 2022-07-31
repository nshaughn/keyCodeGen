const welcome = document.getElementById('welcome');
const events = document.getElementById('keycode');

const keycode = (event) => {
let key = event.key;
let location = event.location;
let which = event.which;
let code = event.code;

document.getElementById("eventKey").innerHTML= key;
document.getElementById("eventLocation").innerHTML= location;
document.getElementById("eventWhich").innerHTML= which;
document.getElementById("eventCode").innerHTML= code;
welcome.remove() //removes welcome message 
}