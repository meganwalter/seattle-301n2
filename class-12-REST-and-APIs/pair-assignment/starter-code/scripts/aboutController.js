(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    // REVIEW: Look at this method chaining. What is being accomplished here?
    $('#about').show().siblings().hide();
    repos.requestRepos(repoView.index);


    // TODONE: Call a function to 'request' our repo data.
    // Pass in a view function as a callback, so our repos will render after the data is loaded.
  };

  module.aboutController = aboutController;
})(window);
