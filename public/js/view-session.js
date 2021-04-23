// enroll a link is post to session member table

async function enrollInSession(event) {
    event.preventDefault();

    const member_id = req.session.user_id
    const session_id = event.target.getAttribute('data-id');

    const response = await fetch('/api/sessionmembers',
    {
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
}

document.querySelector('#enrollbtn').addEventListener('click', enrollInSession)