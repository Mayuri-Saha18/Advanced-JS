
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
   event.preventDefault(); // prevent the form from submitting

   const uniqueId = document.querySelector('#unique-id').value;
   const name = document.querySelector('#name').value;
   const reason = document.querySelector('#reason').value;
   const designation = document.querySelector('input[name="designation"]:checked');
   const startDate = document.querySelector('#start-date').value;
   const endDate = document.querySelector('#end-date').value;
   const overseer = document.querySelector('#overseer').value;

 
   // validate the input values
   if (uniqueId.trim() === '') {
      alert('Please enter a unique ID.');
      return;
   }

   if (name.trim().length < 4) {
      alert('Name should be at least 4 characters.');
      return;
   }

   if (reason.trim() === '') {
      alert('Please enter a reason for leave.');
      return;
   }

   if (!designation) {
      alert('Please select a designation.');
      return;
   }

   if (startDate === '' || new Date(startDate) < new Date()) {
      alert('Please select a valid start date.');
      return;
   }

   if (endDate === '' || new Date(endDate) < new Date() || new Date(endDate) < new Date(startDate)) {
      alert('Please select a valid end date.');
      return;
   }

   const leaveRequest = {
    uniqueId,
    name,
    reason,
    designation: designation.value,
    startDate,
    endDate,
    overseer
    };
    
   
    const existingLeaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    const leaveRequestExists = existingLeaveRequests.some(lr => lr.uniqueId === uniqueId);
    
    if (leaveRequestExists) {
    alert('Leave request with this ID already exists.');
    return;
    }
    
    
    existingLeaveRequests.push(leaveRequest);
    localStorage.setItem('leaveRequests', JSON.stringify(existingLeaveRequests));
    
    
    const statusDiv = document.querySelector('#status');
    statusDiv.textContent = 'Leave request submitted successfully.';
    });