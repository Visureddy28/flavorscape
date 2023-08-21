module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.nonveg = function(req, res){
    res.render('nonveg', { title: 'nonveg' });
  };

  module.exports.veg = function(req, res){
    res.render('veg', { title: 'veg' });
  };

  module.exports.desert = function(req, res){
    res.render('desert', { title: 'desert' });
  };

  