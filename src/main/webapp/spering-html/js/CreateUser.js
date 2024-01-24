
function CreateUser() {
    // Get the room number entered by the user
    const Nameuser = document.getElementById('Nameuser').value;

    // Check if the room number is not empty
    if (!Nameuser) {
        // Redirect or perform actions based on the room number
        alert('ກາລຸນາປ້ອມຊື່ຂອງທ່ານ');
     
        // You can add more logic here, such as redirecting to the game page
    } else {
        // Show an alert or error message for an empty room number
        window.location.href = "CreateGame.html"
        console.log('Joining room:', Nameuser);
    }
}

