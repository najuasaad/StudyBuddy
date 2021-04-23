async function enrollSession(event) {
    console.log("element selected")
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        console.log("button and user passed")
        // using session user info to add them to the attendee id list if the list is not full
            // const member_id = req.session.user_id
            const session_id = event.target.getAttribute('data-id');
            console.log(session_id)
            
            if (session_id) {
                const response = await fetch(`/api/sessionmembers/`, {
                    method: 'POST',
                    body: JSON.stringify({
                        session_id,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }) 

                if (response.ok) {
                    document.location.replace('/');
                } else {
                    alert('Failed to enroll.');
                }
            } else {
                // redirect to login
            }

    }
}

// async function goToNewSessionPage(event) {
    // redirect to add session route
// }

document.querySelector('#sessionListener').addEventListener('click', enrollSession);
// document.querySelector('#addNewSession').addEventListener('click', goToNewSessionPage)