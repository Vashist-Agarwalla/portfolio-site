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

export const projectsPage = async () => {
    const { client, db } = await connectToDatabase();
    const projects = await db
        .collection("Projects")
        .find({})
        .toArray()
    projects.sort(sortByProperty('pid'))
    if (process.env.isProduction === "true") {
        client.close()
    }
    return JSON.parse(JSON.stringify({projects}))
}

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { client, db } = await connectToDatabase();
        const projects = await db
            .collection("Projects")
            .find({})
            .toArray()
        projects.sort(sortByProperty('pid'))
        if (process.env.isProduction === "true"){
            client.close()
        }
        res.json([projects])
    })

export default handler;