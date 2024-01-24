
function joinRoom() {
    // Get the room number entered by the user
    const roomNumber = document.getElementById('roomNumber').value;

    // Check if the room number is not empty
    if (roomNumber == 'cw1') {
        // Redirect or perform actions based on the room number
        window.location.href = "CreateUser.html"
        console.log('Joining room:', roomNumber);
        // You can add more logic here, such as redirecting to the game page
    } else {
        // Show an alert or error message for an empty room number
        alert('ກາລຸນາປ້ອນລະຫັດຫ້ອງໃຫ້ຖືກຕ້ອງ');
    }
}

