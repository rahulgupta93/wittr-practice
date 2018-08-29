(function () {
  'use strict';


  var tweets = [
    {
      id: 1,
      details: {
        timestamp: 'Aug 28, 11:38pm',
        userProfile: {
          imageUrl: 'assets/profile-pics/profile.jpg',
          name: 'John Doe',
          username: '@johndoe4life'
        }
      },
      image: {
        url: 'assets/images/action-athlete-blue.jpg',
        description: 'Athlete Swimming'
      },
      text: 'Lorem ipsum dolor sit amet, consectetur mollis nunc sed. Augue interdum velit euismod in pellentesque massa. Massa tincidunt nunc pulvinar sapien et.'
    }, {
      id: 2,
      details: {
        timestamp: 'Aug 28, 11:38pm',
        userProfile: {
          imageUrl: 'assets/profile-pics/profile.jpg',
          name: 'John Doe',
          username: '@johndoe4life'
        }
      },
      image: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }, {
      id: 3,
      details: {
        timestamp: 'Aug 28, 11:38pm',
        userProfile: {
          imageUrl: 'assets/profile-pics/profile.jpg',
          name: 'John Doe',
          username: '@johndoe4life'
        }
      },
      image: {
        url: 'assets/images/beverage-brew-clean.jpg',
        description: 'Cleansing tea'
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et.'
    }, {
      id: 4,
      details: {
        timestamp: 'Aug 28, 11:38pm',
        userProfile: {
          imageUrl: 'assets/profile-pics/profile.jpg',
          name: 'John Doe',
          username: '@johndoe4life'
        }
      },
      image: {
        url: 'assets/images/beard-eyewear-guitar.jpg',
        description: 'Beard guy with guitar'
      },
      text: 'Pharetra diam sit amet nisl. Amet nisl purus in mollis nunc sed.'
    }, {
      id: 5,
      details: {
        timestamp: 'Aug 28, 11:38pm',
        userProfile: {
          imageUrl: 'assets/profile-pics/profile.jpg',
          name: 'John Doe',
          username: '@johndoe4life'
        }
      },
      image: null,
      text: 'Amet nisl purus in mollis nunc sed. Augue interdum velit euismod in pellentesque massa. Massa tincidunt nunc pulvinar sapien et.'
    }
  ];

  function addAllTweets() {
    var tweetHtml = '';
    tweets.forEach(tweet => {
      tweetHtml = tweetHtml + htmlForTweet(tweet);
    });
    var tweetsContainer = document.getElementById('tweets-container');
    insertHtmlToDom(tweetHtml, tweetsContainer);
  }

  function insertHtmlToDom(htmlString, element) {
    element.innerHTML = htmlString;
  }

  function htmlForTweet(tweet) {
    var htmlForTweet = '<div class="tweet-card" >'
      + htmlForTweetDetails(
          tweet.details.userProfile.imageUrl,
          tweet.details.userProfile.name,
          tweet.details.timestamp
        )
      + (tweet.image? htmlForImage(tweet.image.url, tweet.image.description) : '')
      + htmlForText(tweet.text)
      + '</div>';

    return htmlForTweet;
  }

  function htmlForTweetDetails(profileImageUrl, name, timestamp) {
    return `
      <div class="tweet-details" >
        <div class="tweet-profile">
          <img class="profile-image" src="${profileImageUrl}" alt="User profile image">
          <span class="user-name" > ${name} </span>
        </div>
        <div class="tweet-timestamp"> ${timestamp} </div>
      </div>
    `;
  }

  function htmlForImage(imageUrl, altText) {
    return `
    <div class="tweet-image" >
      <img src="${imageUrl}" alt="${altText}" >
    </div>
    `;
  }

  function htmlForText(text) {
    return `
      <div class="tweet-text" >
        ${text}
      </div>
    `;
  }

  // Execute method to add all tweets to DOM
  addAllTweets();

} ())