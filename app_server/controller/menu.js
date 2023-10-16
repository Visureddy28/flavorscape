module.exports.home = function(req, res){
    res.render('home', { title: 'home' });
  };
  /* GET menu page */
  module.exports.menu = function(req, res){
    res.render('menu', { title: 'menu' });
  };

  module.exports.nonveg = function(req, res){
    res.render('nonveg', { title: 'fastweb',
    
    menuItems: [
      {
    name: "Fastweb",
    eligibility: "Some criteria",
    deadline: new Date("2024-05-01"),
    amount: 5000,
      }
      
      
      
    ]
      
    });
  };

  module.exports.veg = function(req, res){
    res.render('veg', { title: 'veg Menu',
    menuItems : [
      {
      name: "cappex",
    eligibility: "Varies by scholarship",
    deadline: new Date("2024-06-15"),
    amount: 3000,
      }
      
      
    ]
    });
  };

  module.exports.desert = function(req, res){
    res.render('desert', { title: 'desert Menu',
    menuItems : [
      {
        name: "chegh scholarships",
    eligibility: "Open to all students",
    deadline: new Date("2024-08-30"),
    amount: 2500,
      }
      
      
      
    ]
   });
  };

  