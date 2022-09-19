db.createUser({
  user: "docareUser",
  pwd: "docareUser",
  roles: [
    {
      role: "readWrite",
      db: "safetydb",
    },
  ],
});

db.createCollection("device_info", (err, res) => {
  if (err) throw err;
});

db.createCollection("emergency_info", (err, res) => {
  if (err) throw err;
});

db.createCollection("emergency_report", (err, res) => {
  if (err) throw err;
});

db.createCollection("patiend_record", (err, res) => {
  if (err) throw err;
});

db.createCollection("user_info", (err, res) => {
  if (err) throw err;
});

db.createCollection("vital_info", (err, res) => {
  if (err) throw err;
});

db.createCollection("wel_user_info", (err, res) => {
  if (err) throw err;
});
