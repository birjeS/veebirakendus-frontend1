import { Request, Response, Router } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/parcelmachines", async (req: Request, res: Response) => {
    const response = await axios.get(
        "https://www.omniva.ee/locations.json"
    );
    res.json(response.data);
});

export default router;