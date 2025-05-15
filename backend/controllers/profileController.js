const { Profile } = require('../models/Profile');

// get all the saved Profiles: controller function
exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create a new profile item: controller function
exports.createProfile = async (req, res) => {
  try {
    const profileData = req.body;
    const newProfile = new Profile(profileData);
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a profile item: controller function
// URI: /Profiles/:_id
exports.deleteProfile = async (req, res) => {
  try {
    const profileId = req.params._id;
    await Profile.findByIdAndDelete(profileId);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
