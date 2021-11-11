import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongo";

export const projectDetails = async (pid: any) => {
    const { client, db } = await connectToDatabase();
    const projects = await db
        .collection("Projects")
        .find({ pid: parseInt(pid) })
        .toArray()
    return JSON.parse(JSON.stringify(projects))

}

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { client, db } = await connectToDatabase();
        const pid = '3'
        const projects = await db
            .collection("Projects")
            .find({ pid: parseInt(pid) })
            .toArray()
        res.json([projects])
    })

export default handler;