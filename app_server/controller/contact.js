module.exports.aboutus = function(req, res){
    res.render('aboutus', { title: 'aboutus' });
  };
  /* GET menu page */
  module.exports.contact = function(req, res){
    res.render('contact', { title: 'contact' });
  };
  module.exports.reservation = function(req, res){
    res.render('reservation', { title: 'reservation' ,reservationData:[{
      fullName: "Jane Smith",
    email: "janesmith@example.com",
    studentId: "987654321",
    scholarshipName: "cappex",
    essay: "I am applying for the cappex scholarship because I am deeply dedicated to my studies and...",
  }]});
  };