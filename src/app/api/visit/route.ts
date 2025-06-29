import Visit from "@/app/model/visit.model";
import { connectDb } from "@/app/utils/connectDb";

export const GET = async () => {
    try {
        await connectDb();

        let visitDoc = await Visit.findOne();

        if (!visitDoc) {
            visitDoc = new Visit({ visit: 1 }); // Start at 1
        } else {
            visitDoc.visit += 1; // Increment
        }

        await visitDoc.save();

        return new Response(JSON.stringify({ visits: visitDoc.visit }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("GET error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
