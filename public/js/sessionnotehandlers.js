async function enrollSession(event) {
    event.preventDefault();
    // using session user info to add them to the attendee id list if the list is not full
    const newAttendee = "user session data will go here"
    
    const response = await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            newAttendee,
        })
    })

}

async function unenrollSession(event) {
    event.preventDefault();
    // using session user info to remove them from the course
    user = "user session data will go here"
    
    const response = await fetch(``, {
        method: 'PUT',
        body: JSON.stringify({
            user,
        })
    })
}

async function deleteNote(event) {
    event.preventDefault();


}


document.querySelector('.enroll').addEventListener('submit', enrollSession);
document.querySelector('.unenroll').addEventListener('submit', unenrollSession);
document.querySelector('.notedelete').addEventListener('delete', deleteNote);