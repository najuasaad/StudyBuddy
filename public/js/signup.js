async function newFormUser(event) {
  event.preventDefault();

  const email = document.querySelector('#inputEmail1').value.trim();
  const password = document.querySelector('#inputPassword1').value.trim();
  const display_name = document.querySelector('#inputDisplayName1').value.trim();
  const title = document.querySelector('#inputTitle1').value.trim();
  const location = document.querySelector('#inputLocation1').value.trim();
  const picture = document.querySelector('#imageFile').value.trim();

  if (email && password && display_name && title) {
    const response = await fetch(`/api/members/`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        display_name,
        title,
        // city,
        // state,
        picture
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