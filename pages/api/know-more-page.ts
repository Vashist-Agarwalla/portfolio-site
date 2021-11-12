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

export const knowMorePage = async () => {
    const { client, db } = await connectToDatabase();
    const experience = await db
        .collection("Work-Experience")
        .find({})
        .toArray()
    experience.sort(sortByProperty('pid'))
    const clubs = await db
        .collection("Clubs")
        .find({})
        .toArray()
    clubs.sort(sortByProperty('pid'))
    if (process.env.isProduction === "true") {
        client.close()
    }
    return JSON.parse(JSON.stringify({ experience, clubs }))
}