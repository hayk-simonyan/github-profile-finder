class Github {
  constructor() {
    this.clientId = 'a2b28de7767ebca5f5c0';
    this.clientSecret = '0729f25df7a5ceae0ec99af4cf9eeddbb3d27997';
    this.reposCount = '9';
    this.reposSort = 'created: asc';
  }

  async getUser(user) {
    const resProfile = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const profile = await resProfile.json();

    const resRepos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const repos = await resRepos.json();

    return { profile, repos };
  }
}
