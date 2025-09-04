import { connectMongoDB } from "../../../../../lib/mongoose";
import View from "../../../../../models/view";

export async function GET(request, { params }) {
    await connectMongoDB();
    const { slug } = params;

    let view = await View.findOne({ slug });
    if (!view) {
        view = await View.create({ slug, count: 1 });
    } else {
        view.count += 1;
        await view.save();
    }

    return Response.json({ views: view.count });
}