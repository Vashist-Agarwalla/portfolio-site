import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongo";

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { db } = await connectToDatabase();
        const skills = await db
            .collection("Skills")
            .find({})
            .toArray()
        const achievements = await db
            .collection("Achievements")
            .find({})
            .toArray()

        res.json([skills, achievements])
    })

export default handler;