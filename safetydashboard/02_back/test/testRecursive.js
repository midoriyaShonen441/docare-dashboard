require("dotenv").config()
const db = require("../connection/connection");
db.connect();

a = async (req, res) => {
    // import database //
    const emergency_info = require("../model/emergency_info");
    // import function //
    const SendingEmergencyModule = require("../customFunction/recursiveModule");
    const  domain_id  = "1";
    console.log("domain_id" , domain_id)
    try {
        const emergencyReport = await emergency_info.aggregate([
            // {$match:{case_confirm: false}},
            {
                $lookup: {
                    from: "user_infos",
                    localField: "user_ids",
                    foreignField: "user.citizen_id",
                    as: "user_profile",
                },
            },
            { $unwind: "$user_profile" },
            {
                $project: {
                    user_ids: 1,
                    device: 1,
                    case_info: 1,
                    floor_plan: 1,
                    case_confirm: 1,
                    case_audit: 1,
                    user_profile: ["$user_profile"],
                    tenan: "$user_profile.user.domain_id",
                },
            },
            { $match: { tenan: "1" } },
            // { $match: { tenan: 1, case_confirm: true } },
            // { $match: { tenan: domain_id, case_audit: false } },
        ]);

        // console.log("emergencyReport ==> ", emergencyReport)
        const emergencyModel = new SendingEmergencyModule(
            emergencyReport,
            domain_id
        );
        const sentEmergency = emergencyModel.returnResult();
        console.log(sentEmergency);

        // const payload = {
        //     status: 200,
        //     data: sentEmergency,
        // };
        // console.log("sentEmergency ==> ", sentEmergency);
        // res.send(payload);
    } catch (err) {
        console.log(`error in api syncEmergencyLog ==> ${err}`);
        // res.sendStatus(500);
    }
};

a();