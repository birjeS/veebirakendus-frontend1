import { Request, Response, Router } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/nord-pool-price/:country", async (req: Request, res: Response) => {
    const response = await axios.get(
        "https://dashboard.elering.ee/api/nps/price"
    );
    if(req.params.country === "ee") {
        res.json(response.data.data.ee);
    } else if (req.params.country === "lv") {
        res.json(response.data.data.lv);
    } else if (req.params.country === "lt") {
        res.json(response.data.data.lt);
    } else if (req.params.country === "fi") {
        res.json(response.data.data.fi);
    } else {
        res.json([]);
    }
});

export default router;