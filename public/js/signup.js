console.log("ready to sign up");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
 


  if (username && email && password)  {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Something is wrong with your credintials, try making your password longer");
    }
  }
};
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);