async function unenrollSession(event) {
  if (event.target.hasAttribute('data-id')) {
    event.preventDefault();
    // updated to unenroll the session
    const session_member_id = event.target.getAttribute('data-id');
    if (session_member_id) {
      const response = await fetch(`/api/sessionmembers/${session_member_id}`, {
      method: 'DELETE',
      }) 
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete.');
      }
    }
  }
}

async function deleteNote(event) {

  if (event.target.hasAttribute('data-id')) {
    event.preventDefault();

    const session_id = event.target.getAttribute('data-id');
          
    if (session_id) {
      const response = await fetch(`/api/notes/${session_id}`, {
        method: 'DELETE',
      }) 
      
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete.');
      }
    }
  }
}
// updated to unenroll the session
document.querySelector('#upcomingsessions').addEventListener('click', unenrollSession);
document.querySelector('.notes').addEventListener('click', deleteNote);