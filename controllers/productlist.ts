import { Request, Response, Router } from "express";
import { Toode } from "../models/toode";

const router: Router = Router();
const tooted: Toode[] = [
    new Toode(1,"Koola", 1.5, true),
    new Toode(2,"Fanta", 1.0, false),
    new Toode(3,"Sprite", 1.7, true),
    new Toode(4,"Vichy", 2.0, true),
    new Toode(5,"Vitamin well", 2.5, true)
];
router.get("/tooted", (req: Request, res: Response) => {
    res.send(tooted)
});

router.delete("/kustuta-toode/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1)
    }
    res.send(tooted)
});

router.delete("/kustuta-toode-variant2/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1);
        res.send("Toode kustutatud!");
    } else {
        res.send("Toode kustutamine ei õnnestunud, sisesta number!");
    }
});

router.post("/lisa-toode/:id/:nimi/:hind/:aktiivne", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.id) && /^[0-9]+$/.test(req.params.hind)) {
        tooted.push(
            new Toode(
                Number(req.params.id),
                req.params.nimi,
                Number(req.params.hind),
                req.params.aktiivne === "true")
        )
    }
    res.send(tooted)
});

router.patch("/hind-dollaritesse/:kurss", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.kurss)) {
        for (let index = 0; index < tooted.length; index++) {
            tooted[index].price = tooted[index].price * Number(req.params.kurss);
        }
    }
    res.send(tooted)
});
        
        export default router;