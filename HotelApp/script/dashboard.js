const hotelForm = document.getElementById('hotel-form');
const roomsTableBody = document.getElementById('roomsTableBody');

// Event listener for form submission
hotelForm.addEventListener('submit', (e) => {
  e.preventDefault();
//   const id = document.getElementById('id').value;
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').value;
  const roomType = document.querySelector('input[name="room-type"]:checked').value;
  const bedType = document.getElementById('bed-type').value;
  const adults = document.getElementById('adults').value;
  const capacity = document.getElementById('capacity').value;
  const cost = document.getElementById('cost').value;

  const data = {
    // id: id,
    category: category,
    image: image,
    roomType: roomType,
    bedType: bedType,
    adults: adults,
    capacity: capacity,
    cost: cost,
    status: 'Not Booked',
  };

  // Send a POST request to the JSON server
  fetch('https://coding-mock.onrender.com/hotels', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
      // Clear the form fields
      hotelForm.reset();
      // Refresh the table
      getData();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});


// Function to fetch data from the server
let getData= async () =>{
    let res = await fetch("https://coding-mock.onrender.com/hotels");
    let data = await res.json();
    append(data)
    console.log("data",data);
}
getData();

let container = document.getElementById("roomsTableBody"); // append div id "items"

function append(data) {
    roomsTableBody.innerHTML = "";
data.forEach(function (room) {
    const row = document.createElement("tr");
    row.id = `room-${room.id}`;
    row.innerHTML = `
      <td>${room.id}</td>
      <td>${room.category}</td>
      <td>${room.roomType}</td>
      <td>${room.bedType}</td>
      <td>${room.adults}</td>
      <td>${room.capacity}</td>
      <td>${room.cost}</td>
      <td>${room.status}</td>
      <td><button onclick="editRoom(${room.id})">Edit</button></td>
      <td><button onclick="deleteRoom(${room.id})">Delete</button></td>
    `;
    container.appendChild(row);
  });
};


// Function to delete a room from the server
const deleteRoom = async (id) => {
  const response = await fetch(`https://coding-mock.onrender.com/hotels/${id}`, {
    method: "DELETE",
  });
  await response.json();
  getData()
  
};

// Function to edit a room
// Function to edit a room
const editRoom = async (id) => {
  const row = document.getElementById(`room-${id}`);

  // Get updated room data from input fields
  const updatedCategory = document.getElementById('category').value;
  const updatedImage = document.getElementById('image').value;
  const updatedRoomTypeElement = document.querySelector('input[name="room-type"]:checked');
const updatedRoomType = updatedRoomTypeElement ? updatedRoomTypeElement.value : null;

  // const updatedRoomType = document.querySelectorAll('input[name="room-type"]:checked').value;
  const updatedBedType = document.getElementById('bed-type').value;
  const updatedAdults = document.getElementById('adults').value;
  const updatedCapacity = document.getElementById('capacity').value;
  const updatedCost = document.getElementById('cost').value;

  // Update room data object
  const updatedRoom = {
    category: updatedCategory,
    image: updatedImage,
    roomType: updatedRoomType,
    bedType: updatedBedType,
    adults: updatedAdults,
    capacity: updatedCapacity,
    cost: updatedCost,
    status: 'Not Booked',
  };

  try {
    // Send PUT request to update room
    const response = await fetch(`https://coding-mock.onrender.com/hotels/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedRoom)
    });

    // Check if the update was successful
    // if (!response.ok) {
    //   throw new Error('Failed to update room.');
    // }

    const data = await response.json();
    console.log('Success:', data);

    // Refresh table with updated data
    getData();
  } catch (error) {
    console.log('Error:', error);
  }
};
