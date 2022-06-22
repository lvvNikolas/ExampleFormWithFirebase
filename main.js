
// Initialize Firebase (ADD YOUR OWN DATA)
const config = {
  apiKey: "AIzaSyC8wk3rtsymkPJpQqxFDs29fLedxh_bZjA",
  authDomain: "lvvcontactform.firebaseapp.com",
  databaseURL: "https://lvvcontactform-default-rtdb.firebaseio.com",
  projectId: "lvvcontactform",
  storageBucket: "lvvcontactform.appspot.com",
  appId: "1:250776191845:web:1ba83dad040b2344a5978c",
  messagingSenderId: "G-JW1MJVQ7XQ"
};
firebase.initializeApp(config);

// Reference messages collection
const messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const company = getInputVal('company');
  const email = getInputVal('email');
  const phone = getInputVal('phone');
  const date = getInputVal('date');
  const message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, date, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, date, message){
  const newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    date: date,
    message:message
  });
}