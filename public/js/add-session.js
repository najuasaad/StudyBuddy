async function newFormSession(event) {
  event.preventDefault();

  const title = document.querySelector('#inputSessionTitle').value.trim();
  const description = document.querySelector('#inputSessionDescription').value.trim();
  const max_occupancy = document.querySelector('#inputSessionOccupancy').value.trim();
  const date = document.querySelector('#inputSessionDate').value.trim();
  const time = document.querySelector('#inputSessionTime').value.trim();
  const location = document.querySelector('#inputSessionLocation').value.trim();
  const host /* not sure, but maybe add session details about host here */

  if (title && description && max_occupancy && date && time && location ) {
    const response = await fetch(`/api/sessions`, {
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
      alert('Failed to add session.');
    }
  }
}

document.getElementById('#newSession').addEventListener('submit', newFormSession);
