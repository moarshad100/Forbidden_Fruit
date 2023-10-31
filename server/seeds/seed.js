const db = require("../config/connection");
const { Member } = require("../models");
const cleanDB = require("./cleanDB");

const memberData = require("./memberData.json");

db.once("open", async () => {
  // clean database
  await cleanDB("Member", "members");

  // bulk create each model
  const members = await Member.insertMany(memberData);

  for (newMember of members) {
    
    const tempMembers = members[Math.floor(Math.random() * members.length)];

    await tempMembers.save();
  }

  console.log("all done!");
  process.exit(0);
});
