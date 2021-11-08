import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongo";

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { db } = await connectToDatabase();
        const data = await db
            .collection("About")
            .find({})
            .toArray()
        res.json(data)
    })

export default handler;