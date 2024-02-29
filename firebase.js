const firebaseConfig = {
    apiKey: "AIzaSyBF2fDw4GaRwaFU55V_gaJ-uNruW_xwl98",
    authDomain: "testbackend-3f0f7.firebaseapp.com",
    databaseURL: "https://testbackend-3f0f7-default-rtdb.firebaseio.com",
    projectId: "testbackend-3f0f7",
    storageBucket: "testbackend-3f0f7.appspot.com",
    messagingSenderId: "409986152786",
    appId: "1:409986152786:web:6352ee326b1b5709a1e28b"
  };


  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference
  var testFormDB = firebase.database().ref('testForm_Graphics');

  document.getElementById('contact').addEventListener('submit', submitForm);

  function submitForm(e){
        e.preventDefault();

        var name = getElementVal('name');
        var emailID = getElementVal('email');
        var question = getElementVal('question');

        // console.log(name,emailID,question_);
        saveMessages(name, emailID, question);

        //enable alert
        document.querySelector( ".alert" ).style.display= "block";
        //remove the alert
        setTimeout(() => {
          document.querySelector( ".alert" ).style.display= "none";
        },3000 //3000ms = 3sec
        );

        //reset the form
        document.getElementById("contactForm").reset();
  }

  const saveMessages = (name , emailID, question) => {
    var newForm = testFormDB.push();

    newForm.set({
      name : name,
      emailID : emailID,
      question : question,
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };