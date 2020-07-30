class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
        <div class='card card-body m-3'>
            <div class='row'>
                <div class='col-md-3'>
                    <img class='img-fluid mb-2' src='${user.avatar_url}' />
                    <a class='btn btn-primary btn-block' target='_blank' href='${user.html_url}'>View profile</a>
                </div>
                <div class='col-md-9'>
                    <span class='badge badge-primary'>Repositories: ${user.public_repos}</span>
                    <span class='badge badge-primary'>Gists: ${user.public_gists}</span>
                    <span class='badge badge-primary'>Followers: ${user.followers}</span>
                    <span class='badge badge-primary'>Following: ${user.following}</span>
                </div>
            </div>
        </div>
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.map(
      (repo) =>
        (output += `
        <div class='card card-body m-1'>
            <div class='row'>
                <div class='col-md-6'>
                    <a class='' target='_blank' href='${repo.html_url}'>${repo.name}</a>
                </div>
                <div class='col-md-6'>
                    <span class='badge badge-primary'>Stars: ${repo.stargazers_count}</span>
                    <span class='badge badge-primary'>Watchers: ${repo.watchers_count}</span>
                    <span class='badge badge-primary'>Forks: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
    `)
    );

    this.repos.innerHTML = output;
  }

  clearRepos() {
    this.repos.innerHTML = '';
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  setAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('div.searchContainer');
    const searchInput = document.querySelector('input.search');
    container.insertBefore(div, searchInput);

    setTimeout(() => {
      this.clearAlert();
    }, 1500);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
