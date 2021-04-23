$(document).ready(()=>{
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
})


async function newFormUser(event) {
  event.preventDefault();
  const email = document.querySelector('#inputEmail1').value.trim();
  const password = document.querySelector('#inputPassword1').value.trim();
  const display_name = document.querySelector('#inputDisplayName1').value.trim();
  const title = document.querySelector('#inputTitle1').value.trim();
  const city = document.querySelector('#inputCity').value.trim();
  const state = document.querySelector('#inputState').value.trim();
  const profilePicture = document.querySelector('#inputProfilePicture').value.trim();

  // if ( isValidEmail(email) !== true ) {             //isvalidEmail method not defined anywhere so commented
  //   prompt('Must use a valid email')
  // }
  
  if (email && password && display_name && title) {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('display_name', display_name)
    formData.append('title', title)
    formData.append('city', city)
    formData.append('state', state)
    formData.append('profilePicture', profilePicture)

    const response = await axios({
      method: 'POST',
      url: '/api/members/',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add user');
    }
}}

document.querySelector('#newUser').addEventListener('submit', newFormUser);