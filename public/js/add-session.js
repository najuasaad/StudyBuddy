async function newFormSession(event) {
  event.preventDefault();

  const session_title = document.querySelector('#inputSessionTitle').value.trim();
  const description = document.querySelector('#inputSessionDescription').value.trim();
  const max_occupancy = document.querySelector('#inputSessionOccupancy').value.trim();
  const date = document.querySelector('#inputSessionDate').value.trim();
  const time = document.querySelector('#inputSessionTime').value.trim();
  const location = document.querySelector('#inputSessionLocation').value.trim();
  const host_id = req.session.logged_in_user; 
  const host_displayname = req.session.logged_in_member;

  if ( !req.session.logged_in ) {
    prompt('Log-in to add a session')
  }
  
  if (title && description && max_occupancy && date && time && location ) {
    const response = await fetch(`/api/sessions`, {
      method: 'POST',
      body: JSON.stringify({
        session_title,
        description,
        max_occupancy,
        date,
        time,
        location,
        host_id,
        host_displayname
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/sessions');
    } else {
      alert('Failed to add session.');
    }
  }
}

document.getElementById('#newSession').addEventListener('submit', newFormSession);
