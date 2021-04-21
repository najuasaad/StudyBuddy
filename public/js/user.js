async function newFormUser(event) {
  event.preventDefault();

  const email = document.querySelector('#inputEmail1').value;
  const password = document.querySelector('#inputPassword1').value;
  const display_name = document.querySelector('#inputDisplayName1').value;
  const title = document.querySelector('#inputTitle1').value;

  if (email && password && display_name && title) {
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        display_name,
        title,
        profile_picture
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add user');
    }
}

}
async function logUserIn(event) {
  event.preventDefault();

  const email = document.querySelector('#loginEmail').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();

  if (email && password) {
    const response = await fetch(`/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log-in');
    }
  }
}



document.querySelector('#newUser').addEventListener('submit', newFormUser);
document.querySelector('#loginSubmit').addEventListener('submit', logUserIn);