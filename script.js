  $(document).ready(function() {
    $('#getQuote').on('click',function() {
      newQuote();
    })
  });


  function newQuote() {
    $.ajax({
        type: "POST",
        url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
        data: { "cat": "famous"},
        dataType: 'json',
        success: function(data) {
          $('#quote').text(data.quote);
          $('#author').text(data.author);
          $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + data.quote + " " + "-" + " " + data.author);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "Ey82Qs9cYemshOTkDjmdGHedDKT7p1lD10ljsntsa1dNilbP8V");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
        }
    });
  }
