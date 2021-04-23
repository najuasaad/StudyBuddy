async function logUserIn(event) {
    event.preventDefault();
  
    console.log("button clicked")
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();
  
    if (email && password) {
      console.log("if statement passed")

      const response = await fetch(`/api/members/login`, {

        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log-in');
      }
    }
}

document.querySelector('#loginSubmit').addEventListener('click', logUserIn);