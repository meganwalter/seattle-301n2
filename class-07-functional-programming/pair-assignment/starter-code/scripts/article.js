<<<<<<< HEAD
// DONE: Wrap the entire contents of this file in an IIFE.
// Pass in to the IIFE a module, upon which objects can be attached for later access.
(function (module) {
  function Article (opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
  }

  Article.all = [];

  Article.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    this.body = marked(this.body);

    return template(this);
  };

  Article.loadAll = function(rawData) {
    rawData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
=======
// TODO: Wrap the entire contents of this file in an IIFE.
// Pass in to the IIFE a module, upon which objects can be attached for later access.
function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.all = [];

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });
>>>>>>> 71ba0cdfa77a7ef2068f7b56f7d520afedc54ecf

  // DONE: Refactor this forEach code, by using a `.map` call instead, since what we are trying to accomplish
  // is the transformation of one colleciton into another.
  // rawData.forEach(function(ele) {
  //   Article.all.push(new Article(ele));
  // })
<<<<<<< HEAD
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
  };
=======
  Article.all = rawData.map(function(ele) {
    return new Article(ele);
  });
};
>>>>>>> 71ba0cdfa77a7ef2068f7b56f7d520afedc54ecf

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.

<<<<<<< HEAD
// DONE: Refactor this function, and provide it with a parameter of a callback function
=======
// TODO: Refactor this function, and provide it with a parameter of a callback function
>>>>>>> 71ba0cdfa77a7ef2068f7b56f7d520afedc54ecf
//(for now just a placeholder, but to be referenced at call time as a view function)
// to execute once the loading of articles is done. We do this because we might want
// to call other view functions, and not just this initIndexPage() that we are replacing.
// Now, instead of calling articleView.initIndexPage(), we can simply run our callback.
<<<<<<< HEAD
  Article.fetchAll = function(callback) {
    if (localStorage.rawData) {
      Article.loadAll(JSON.parse(localStorage.rawData));
      callback();
    } else {
      $.getJSON('/data/hackerIpsum.json', function(rawData) {
        Article.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData); // Cache the json, so we don't need to request it next time.
        callback();
      });
    }
  };

// DONE: Chain together a `map` and a `reduce` call to get a rough count of all words in all articles.
  Article.numWordsAll = function() {
    return Article.all.map(function(article) {
      return article.body.split(' ').length;
      // Get the total number of words in this article
    })
  .reduce(function(a, b) {
    return a + b; // Sum up all the values in the collection
  });
  };

// DONE: Chain together a `map` and a `reduce` call to produce an array of unique author names.
  Article.allAuthors = function() {
    return Article.all.map(function(article) {
      return article.author;
 // Don't forget to read the docs on map and reduce!
    }).reduce(function(total, author) {
      if (total.indexOf(author) === -1) {
        total.push(author);
      }
      return total;
    }, []);
  };

  Article.numWordsByAuthor = function() {
  // DONE: Transform each author string into an object with 2 properties: One for
  // the author's name, and one for the total number of words across all articles written by the specified author.
    return Article.allAuthors().map(function(author) {
      return {
        author: author,
        numWords: Article.all.filter(function(article) {
          return article.author === author;
        })
        .map(function(articlesBy) {
          return articlesBy.body.split(' ').length;
        })
        .reduce(function(a, b) {
          return a + b;
        }),
      };
    });
  };
  module.fetchAll =  Article.fetchAll;
  module.Article = Article;
})(window);
=======
Article.fetchAll = function() {
  if (localStorage.rawData) {
    Article.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();
  } else {
    $.getJSON('/data/hackerIpsum.json', function(rawData) {
      Article.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData); // Cache the json, so we don't need to request it next time.
      articleView.initIndexPage();
    });
  }
};

// TODO: Chain together a `map` and a `reduce` call to get a rough count of all words in all articles.
Article.numWordsAll = function() {
  return Article.all.map(function(article) {
    return // Get the total number of words in this article
  })
  .reduce(function(a, b) {
    return // Sum up all the values in the collection
  })
};

// TODO: Chain together a `map` and a `reduce` call to produce an array of unique author names.
Article.allAuthors = function() {
  return // Don't forget to read the docs on map and reduce!
};

Article.numWordsByAuthor = function() {
  // TODO: Transform each author string into an object with 2 properties: One for
  // the author's name, and one for the total number of words across all articles written by the specified author.
  return Article.allAuthors().map(function(author) {
    return {
      // someKey: someValOrFunctionCall().map(...).reduce(...), ...
    }
  })
};
>>>>>>> 71ba0cdfa77a7ef2068f7b56f7d520afedc54ecf
