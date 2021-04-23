async function unenrollSession(event) {

  if (event.target.hasAttribute('data-id')) {
    event.preventDefault();

    const session_id = event.target.getAttribute('data-id');
          
    if (session_id) {
      const response = await fetch(`/api/sessionmember/${session_id}`, {
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

document.querySelector('.upcomingsessions').addEventListener('click', unenrollSession);
document.querySelector('.notes').addEventListener('click', deleteNote);