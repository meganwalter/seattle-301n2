(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + repoToken
      },
      success: function(data, status, xhr) {
        console.log(data);
        data.forEach(function(article) {
          repos.all.push(article);
          callback();
        })
      },
      error: function(request, status, error) {
        console.dir(request);
        console.log('status: ' + status, 'error: ' + error);
      }
    })

    // TODONE: How would you like to fetch your repos? Don't forget to call the callback.

  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
