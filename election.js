$(document).ready(function() {
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    // data: ,
    dataType: 'json'
  }).done(function(data){

    var candidates = $('#votes');


    var eachCandid;

    for (eachCandid = 0; eachCandid < 5; eachCandid++) {

      var names = (data.candidates[eachCandid].name);
      var votes = (data.candidates[eachCandid].votes);


      var fullCandid = $('<li>');

      var candidName  = $('<strong>').html(names);
      var fullName    = $('<p>').html('Name: ').append(candidName);
      // console.log(fullName);

      var candidVote  = $('<strong>').html(votes);
      var fullVote    = $('<p>').html('Votes: ').append(candidVote);
      // console.log(fullVote);

      fullCandid.html(fullName.html() + " " + fullVote.html());

      fullCandid.appendTo(candidates);
    };
    // var fullInfo    = $('<strong>').html('Name: ').append(candidName).html('Votes: ').append(fullVote);



  });
});
