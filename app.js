const github = new Github();
const ui = new UI();

// selectors
const searchUserInput = document.querySelector('input#searchUser');

// evnet listeners
searchUserInput.addEventListener('keyup', keyupHandler);

// event handlers
async function keyupHandler(e) {
  const inputText = e.target.value;

  if (inputText !== '') {
    const data = await github.getUser(inputText);

    if (data.profile.message === 'Not Found') {
      ui.setAlert('Profile not found', 'alert alert-danger');
    } else {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  } else {
    ui.clearProfile();
    ui.clearRepos();
  }
}
