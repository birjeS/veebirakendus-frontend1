import {Request, Response, Router} from "express";

const router: Router = Router();

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send(nr1 + " * " + nr2 + " = " + (nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

router.get("/random/:max/:min", (req: Request, res: Response) => {
    const max = Number(req.params.max);
    const min = Number(req.params.min);
    res.send(Math.floor((Math.random() * (max - min) + min)).toString());
});

router.get("/synniaasta/:year", (req: Request, res: Response) => {
    const year = Number(req.params.year);
    const currentYear = new Date().getFullYear();
    res.send("Oled " + (currentYear - year).toString() + " aastat vana");
});

export default router;