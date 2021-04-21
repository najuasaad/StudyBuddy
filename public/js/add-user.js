async function newFormHandlerUser(event) {
  event.preventDefault();

  const email = document.querySelector('#inputEmail1').value;
  const password = document.querySelector('#inputPassword1').value;
  const display_name = document.querySelector('#inputDisplayName1').value;
  const title = document.querySelector('#inputTitle1').value;
  const profile_picture = document.querySelector('#inputGroupFile04').value;

  const response = await fetch(`/api/blog`, {
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

document.querySelector('#newUser').addEventListener('submit', newFormHandlerUser);
