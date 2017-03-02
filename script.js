  $(document).ready(function(){
    $('#getQuote').on('click',function() {
      newQuote();
    })
    $('#getTweet').on('click',function() {
      newTweet();
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
          $('#tweet').attr("href", 'https://twitter.com/intent/tweet?text=' + $('#quote').html() + "-" + data.author);
        },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "Ey82Qs9cYemshOTkDjmdGHedDKT7p1lD10ljsntsa1dNilbP8V");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Accept", "application/json");
        }
    });
  }

  //function newTweet(data) {
  //  $('#tweet-share-buttom').attr("href", 'https://twitter.com/intent/tweet?text=' + data.quote + ' -' + data.author);
  //}

  twttr.widgets.createShareButton(
  "https:\/\/dev.twitter.com\/web\/tweet-button",
  document.getElementById("tweet-container"),
  {
    size: "large",
    text: "custom share text",
    hashtags: "example,demo",
    via: "twitterdev",
    related: "twitterapi,twitter"
  }
);
