#!/bin/sh

mongoimport --host db -u docareUser -p docareUser --db safetydb --collection user_infos --type json --file /mongo_seed/mock_data/array-user.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db safetydb --collection staff_infos --type json --file /mongo_seed/mock_data/array-staff.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db safetydb --collection emergency_infos --type json --file /mongo_seed/mock_data/array-sos.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db safetydb --collection device_infos --type json --file /mongo_seed/mock_data/array-device.json --jsonArray