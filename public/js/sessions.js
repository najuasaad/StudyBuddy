async function enrollSession(event) {
    event.preventDefault();
    // using session user info to add them to the attendee id list if the list is not full
    const member_id = req.session.user_id
    const session_id = event.target.getAttribute('data-id');
    
    if (member_id && session_id) {
        const response = await fetch(`/`, {
            method: 'POST',
            body: JSON.stringify({
                member_id,
                session_id,
            })
        }) 

        if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to enroll.');
        }
    } else {
        // redirect to login
    }
 
}

async function goToNewSessionPage(event) {
    // redirect to add session route
}

document.querySelector('.enrollbtn').addEventListener('submit', enrollSession);
document.querySelector('#addNewSession').addEventListener('submit', goToNewSessionPage)