const { Router } = require("express");

const { jobModel } = require("../models/job.model");

const jobController = Router();

jobController.get("/", async(req, res) => {
    const jobs = await jobModel.find()
    return res.json(jobs)
})

jobController.post("/create", async (req, res) => {
  const { company, postedAt, city, location, role, level, position,language, contract } = req.body;

  // console.log(req.body)

  const jobForm = new jobModel({
    company,
    postedAt,
    city,
    location,
    role,
    level,
    position,
    language,
    contract,

  });

  try {
    await jobForm.save();
    res.json("job details posted");
  } catch (err) {
    console.log(err);
    res.json("job details not posted");
  }
});

module.exports = {
  jobController,
};
