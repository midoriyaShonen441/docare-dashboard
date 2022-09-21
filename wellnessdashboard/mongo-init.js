db.createUser({
  user: "docareUser",
  pwd: "docareUser",
  roles: [
    {
      role: "readWrite",
      db: "wellnessdb",
    },
  ],
});

db.createCollection("device_infos", (err, res) => {
  if (err) throw err;
});

db.createCollection("emergency_infos", (err, res) => {
  if (err) throw err;
});

db.createCollection("emergency_reports", (err, res) => {
  if (err) throw err;
});

db.createCollection("patiend_records", (err, res) => {
  if (err) throw err;
});

db.createCollection("user_infos", (err, res) => {
  if (err) throw err;
});

db.createCollection("vital_infos", (err, res) => {
  if (err) throw err;
});

db.createCollection("wel_user_infos", (err, res) => {
  if (err) throw err;
});
