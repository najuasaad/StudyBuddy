// $(document).ready(()=>{
//   $(".custom-file-input").on("change", function() {
//     var fileName = $(this).val().split("\\").pop();
//     $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
//   });
// })


async function newFormUser(event) {
  event.preventDefault();

  console.log("button clicked")

  const email = document.querySelector('#inputEmail1').value.trim();
  const password = document.querySelector('#inputPassword1').value.trim();
  const display_name = document.querySelector('#inputDisplayName1').value.trim();
  const title = document.querySelector('#inputTitle1').value.trim();
  const city = document.querySelector('#inputCity').value.trim();
  const state = document.querySelector('#inputState').value.trim();
  const profilePicture =  getProfilePicture()

  function getProfilePicture() {
    const rd1 = document.getElementById('catProfilePicture')
    const rd2 = document.getElementById('garyProfilePicture')
  // const rd3 = document.getElementId('ProfilePicture')
  // const rd4 = document.getElementId('ProfilePicture')
    if (rd1.checked === true){return rd1.value} 
    else if (rd2.checked === true){return rd2.value}
  // if (rd3.checked===true){rd3.value = profilepicture}
  // if (rd4.checked===true){rd4.value = profilepicture}
  }
  
  if (email && password && display_name && title) {
    console.log("if statement passed")
    const response = await fetch(`/api/members`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        display_name,
        title,
        city,
        state,
        profilePicture
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to add user');
    }
  }
}

document.querySelector('#newUser').addEventListener('click', newFormUser);

