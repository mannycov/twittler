$(document).ready(function() {
        var $body = $('body');

        $('button#home').hide();

        var newTweets = $('<button>New Tweets</button>');
        $(newTweets).appendTo($body);

        $(newTweets).on('click', function() {
          var index = streams.home.length - 1;
          while(index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<ul class="tweet"></ul>');
            var $user = $('<li></li>');
            $tweet.text(tweet.message + ' ' + tweet.created_at);
            $user.text('@' + tweet.user + ': ');
            $user.prependTo($tweet);
            $tweet.appendTo($body);
            $tweet.addClass(tweet.user);
            index -= 1;
          }
        });

        $('body').on('click', 'li', userFeed);

        function userFeed() {
          if ($(this).parent().hasClass('shawndrost')) {
            user = 'shawndrost';
          } else if ($(this).parent().hasClass('sharksforcheap')) {
            user = 'sharksforcheap';
          } else if ($(this).parent().hasClass('mracus')){
            user = 'mracus';
          } else if ($(this).parent().hasClass('douglascalhoun')) {
            user = 'douglascalhoun';
          }

          $('.tweet').hide();
          $(newTweets).hide();
          $('button#home').show();
          $("." + user).show();
        }

        $(document).on('click', 'button#home', showFeed);
        
        function showFeed() {
          $('.tweet').show();
          $(newTweets).show();
          $('button#home').hide();
        }

      });


