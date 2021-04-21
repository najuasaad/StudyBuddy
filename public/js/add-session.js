async function newFormHandlerUser(event) {
  event.preventDefault();

  const title = document.querySelector('#inputSessionTitle').value;
  const description = document.querySelector('#inputSessionDescription').value;
  const max_occupancy = document.querySelector('#inputSessionOccupancy').value;
  const date = document.querySelector('#inputSessionDate').value;
  const time = document.querySelector('#inputSessionTime').value;
  const location = document.querySelector('#inputSessionLocation').value;
  const host /* not sure, but maybe add session details about host here */

  const response = await fetch(`/api/blog`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      max_occupancy,
      date,
      time,
      location,
      host,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add session');
  }
}

document.querySelector('#newSession').addEventListener('submit', newFormHandlerUser);
