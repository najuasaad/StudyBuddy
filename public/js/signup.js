async function newFormUser(event) {
  event.preventDefault();


  const email = document.querySelector('#inputEmail1').value.trim();
  const password = document.querySelector('#inputPassword1').value.trim();
  const display_name = document.querySelector('#inputDisplayName1').value.trim();
  const title = document.querySelector('#inputTitle1').value.trim();
  const city = document.querySelector('#inputCity').value.trim();
  const state = document.querySelector('#inputState').value.trim();
  const profilePicture = document.querySelector('#inputProfilePicture').value.trim();

  if ( isValidEmail(email) !== true ) {
    prompt('Must use a valid email')
  }
  
  if (email && password && display_name && title) {
    const response = await fetch(`/api/members/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        display_name,
        title,
        city,
        state,
        profilePicture
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add user');
    }
}}

document.querySelector('#newUser').addEventListener('submit', newFormUser);