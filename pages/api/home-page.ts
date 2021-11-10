import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongo";

function sortByProperty(property: any) {
    return function (a: any, b: any) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { client, db } = await connectToDatabase();
        const skills = await db
            .collection("Skills")
            .find({})
            .toArray()
        skills.sort(sortByProperty('pid'))
        const achievements = await db
            .collection("Achievements")
            .find({})
            .toArray()
        achievements.sort(sortByProperty('pid'))
        achievements.reverse()
        if (process.env.isProduction === "true"){
            client.close()
        }
        res.json([skills, achievements])
    })

export default handler;