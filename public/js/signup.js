async function newFormUser(event) {
  event.preventDefault();

  console.log("signup button pushed")

  const email = document.querySelector('#inputEmail1').value;
  const password = document.querySelector('#inputPassword1').value;
  const display_name = document.querySelector('#inputDisplayName1').value;
  const title = document.querySelector('#inputTitle1').value;
  const city = document.querySelector('#inputCity').value;
  const state = document.querySelector('#inputState').value;
  const profilePicture = document.querySelector('#inputProfilePicture').value;

  if (email && password && display_name && title) {
    console.log("if statement passed")
    const response = await fetch(`/api/members`, {
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
  }
}

document.querySelector('#newUser').addEventListener('click', newFormUser);