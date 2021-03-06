// ARRAY OF OBJECTS
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

for (const friend of friends) {
  console.log(friend);
  console.log(friend.name);

  // friend.newprop = 555;
}
console.table(friends);

// ЗАДАЧА - Найти друга по имени
const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    console.log(friend.name);

    if (friend.name === friendName) {
      return `WE FOUND YOU, ${friendName} !!!`;
    }
  }
  return "NOT FOUND";
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

// Get a new array with all names
const getAllNames = function (allNames) {
  const names = [];

  for (const friend of allNames) {
    console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));

// FIND ALL FRIENDS ONLINE
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    console.log(friend);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriends(friends));

// FIND ALL OFFLINE FRIENDS
const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};
console.log(getOfflineFriends(friends));

// RETURN OBJECT WITH 2 SEPARATE ARRAYS 1ST - ONLINE FRIENDS, 2ND - OFFLINE
const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));

// GET QUANTITY OF OBJECT`S PROPERTIES (keys)
const x = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

console.log(Object.keys(x).length);

// TASK ДЕСТРУКТУРИЗАЦИЯ ФУНКЦИИ
const showProfileInfo = function (userProfile) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile;

  console.log(name, tag, location, avatar, followers, views, likes);
};

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);

// Pattern Объект настроек - когда у функции больше 3 параметров

// const fn = function (params) { };

// fn({
//   age: 10,
//   friends: 5;
//   isOnline: true,
//   hobbies: [];
//   games: {},
//   rating: 6,
// });

// MARK UP ПРОФИЛЯ
const makeProfileMarkUp = function (userProfile) {
  const {
    avatar = "https://i.pravatar.cc/400?img=6",
    name,
    tag,
    location = "Planet Earth",
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};
const markup = makeProfileMarkUp(profile);
console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);
