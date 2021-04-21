async function enrollSession(event) {
    event.preventDefault();
    // using session user info to add them to the attendee id list if the list is not full
    const member_id = req.session.user_id
    const session_id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/`, {
        method: 'POST',
        body: JSON.stringify({
            member_id,
            session_id,
        })
    })

}

document.querySelector('.enroll').addEventListener('submit', enrollSession);