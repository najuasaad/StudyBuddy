async function enrollSession(event) {

    console.log("element selected")

    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        console.log("button and user passed")

        const session_id = event.target.getAttribute('data-id');
            
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
        }
    }
}


document.querySelector('#sessionListener').addEventListener('click', enrollSession);
