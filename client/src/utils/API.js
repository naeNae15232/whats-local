import axios from "axios";




export default {
  getProfile: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // submit user/artist
  submitArtist: function(artistData) {
    console.log("api");
    return axios.post("/api/artists", artistData);
  },
  // add media uploads
  addMedia: function(media) {
    console.log(media);
    // creating our strage reference
    // const storageRef = firebase.storage().ref('media/' + media.name);
    // upload file
    // const task = storageRef.put(media, null, null, () => {
    //   console.log("Upload Complete!");

    // });
    //return axios.put("/api/artists/media/op", media);
  },
  // update user profile pic
  updateProfilePic: function(media) {
    return axios.put("/api/artists/profile/pic/" + media.id, media);
  }
};
