 $(document).ready(function() {
        var $body = $('body');
        $body.html('');

        // twittler header
        var header = $('<h1>twittler</h1>');
        $(header).prependTo($body);

        // new tweets button
        var newTweets = $('<button>New Tweets</button>');
        $(newTweets).appendTo($body);
    
        // feed 
        var userFeed = $('<p>Your Feed</p>');
        $(userFeed).appendTo($body);

        /* show the user new tweets either by creating a button */

        // event handler for new tweets button
        // generates new tweets
        $(newTweets).on('click', function() {
          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div></div>');
            var $user = $('<a href="#top" class="user"></a>');
            $user.attr('data-user', tweet.user);
            $user.text('@' + tweet.user);
            $tweet.text(': ' + tweet.message + ' ' + tweet.created_at);
            $user.prependTo($tweet);
            $tweet.appendTo($body);
            index -= 1;
          }
        });

        /* allow the user to click on a username to see that user's timeline */

        $('.user').on('click', function() {
            var user = $(this).data('user');
            var index = streams.users[user].length - 1;
            while(index >= 0) {
              var $tweet = $('<div></div>');
              var tweet = streams.users[user][index];
              $tweet.text(tweet.message + ' '+ tweet.created_at);
              $tweet.appendTo($body);
              index -= 1;
            }
        });
      });