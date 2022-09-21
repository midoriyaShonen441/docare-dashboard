#!/bin/sh

mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection user_infos --type json --file /mongo_seed/mock_data/user-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection user_infos --type json --file /mongo_seed/mock_data/staff-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection emergency_infos --type json --file /mongo_seed/mock_data/emergency-array.json --jsonArray