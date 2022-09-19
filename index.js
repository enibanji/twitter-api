var user1 = {
  userName: "@elonmusk",
  displayName: "Elon Musk",
  joinedDate: "June 2009",
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: "assets/elonmusk.jpg",
  coverPhotoURL: "assets/elonmusk-cover.jpeg",
  tweets: [
    {
      text: "I admit to judging books by their cover",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Starship to the moon",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "Out on launch pad, engine swap underway",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

var user2 = {
  userName: "@BillGates",
  displayName: "Bill Gates",
  joinedDate: "June 2009",
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: "assets/billgates.jpg",
  coverPhotoURL: "assets/billgates-cover.jpeg",
  tweets: [
    {
      text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Should I start tweeting memes? Let me know in a comment.",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "In 2020, I read a book every hour.",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};
let usersObj = { user1: user1, user2: user2 };
let tweetArray = [];
for (let user in usersObj) {
  tweetArray.push(usersObj[user]);
}
console.log(tweetArray);
function user() {
  let params = new URLSearchParams(location.search);
  return params.get("user");
}
function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  return num;
}
let currentUser = user();

let headerImage = document.getElementsByClassName("header-image");
headerImage[0].style.background = `url("${usersObj[currentUser].coverPhotoURL}") center/cover no-repeat`;

let avatar = document.getElementsByClassName("profile-picture");
avatar[0].style.background = `url("${usersObj[currentUser].avatarURL}") center/cover no-repeat`;

let header = document.getElementsByClassName("header")[0];
header.innerHTML = `<h2>${usersObj[currentUser].displayName}</h2> 
<p>${usersObj[currentUser].tweets.length} Tweets</p>`;
let profileData = document.getElementsByClassName("profile-data")[0];
profileData.innerHTML = `<h2>${usersObj[currentUser].displayName}</h2>
<p>${usersObj[currentUser].userName}</p><p>Joined ${
  usersObj[currentUser].joinedDate
}</p> <p><span class='bold'>${numFormatter(
  usersObj[currentUser].followingCount
)}</span> Following &nbsp;&nbsp;<span class='bold'>${numFormatter(
  usersObj[currentUser].followerCount
)}</span> Followers</p>`;
let Tweets = usersObj[currentUser].tweets;
for (tweet of Tweets) {
  let newTweet = document.createElement("div");
  document.getElementsByClassName("tweets")[0].appendChild(newTweet);
  newTweet.style.cssText = `display:flex; padding:20px; border-bottom: 1px solid lightgray`;
  let avContainer = document.createElement("div");
  avContainer.style.cssText = `background: url(${usersObj[currentUser].avatarURL}) center/cover no-repeat; min-width: 50px; height:50px; border-radius:100%`;
  console.log(avContainer);
  newTweet.appendChild(avContainer);
  let tweetContent = document.createElement("div");
  tweetContent.classList.add("tweet-content");
  tweetContent.style.marginLeft = "10px";
  tweetContent.innerHTML = `<h2>${usersObj[currentUser].displayName}</h2>
<p>${usersObj[currentUser].userName} . ${tweet.timestamp}</p> <p id="tweet">${tweet.text}</p> `;
  newTweet.appendChild(tweetContent);
}

let tweetsBtn = document.querySelector("#Tweets");
// function loadTweets(el) {
//   let avContainer = document.createElement("div");
//   avContainer.style.cssText = `background: url(${usersObj[currentUser].avatarURL}) center/cover no-repeat; width:25%`;
//   document.getElementsByClassName("tweets")[0].appendChild(avContainer);
// }
// Tweetsbtn.addEventListener("click", function (e) {
//   loadTweets(e.currentTarget);
// });
