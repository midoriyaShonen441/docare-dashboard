#!/bin/sh

mongoimport --host db -u docareUser -p docareUser --db safetydb --collection user_info --type json --file /mongo_seed/mock_data/user-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db safetydb --collection user_info --type json --file /mongo_seed/mock_data/staff-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db safetydb --collection emergency_info --type json --file /mongo_seed/mock_data/emergency-array.json --jsonArray