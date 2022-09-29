#!/bin/sh

mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection user_infos --type json --file /mongo_seed/mock_data/wellness-user-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection user_infos --type json --file /mongo_seed/mock_data/wellness-staff-array.json --jsonArray
mongoimport --host db -u docareUser -p docareUser --db wellnessdb --collection vital_infos --type json --file /mongo_seed/mock_data/wellness-vital-array.json --jsonArray