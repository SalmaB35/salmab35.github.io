function checkPassword () {
    // Capture the user entered password from our inout element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value; console.log("User entered password:",passwordEntered);

    // Check if password is correct
    var sitePassword = "codeclub";
    if (passwordEntered == sitePassword) {
         //allow navigation
         console.log("Allow!");
         window.location.assign("members.html")
    }
    else {
         //block navigation
         console.log("Block!");

         //add a new style rule to the incorrect-password element
         document.getElementById("incorrect-password").style.color = "red";

         //add text to the incorrect-password element
         var paraElem = document.getElementById("incorrect-password"); paraElem.innerHTML = "Incorrect Password. Please try again..."
     
 
 }
 }