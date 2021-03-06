// Метод ФУНКЦИИ в объекте
const playList = {
  name: "My list",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  //   trackCount: 3,
  // старый способ написания функции
  getName(x) {
    console.log("This is function getName :)");
  },
  // modern way to declare function in object
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};
// call a function
playList.getName("Try to call a function");

playList.changeName("Новое имя плейлиста");

playList.addTrack("New track");
playList.addTrack("New track - 2");

playList.updateRating(10);

console.log(playList);
console.log(playList.getTrackCount());
