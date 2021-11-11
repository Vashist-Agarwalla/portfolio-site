import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../util/mongo";

export const projectDetails = async (slug: any) => {
    const { client, db } = await connectToDatabase();
    const projects = await db
        .collection("Projects")
        .find({ slug })
        .toArray()
    return JSON.parse(JSON.stringify(projects))

}