import { Request, Response, Router } from "express";
import axios from "axios";

const router: Router = Router();

router.get("/payment/:sum", async (req: Request, res: Response) => {
  const paymentData = {
    "api_username": "e36eb40f5ec87fa2",
    "account_name": "EUR3D1",
    "amount": req.params.sum,
    "order_reference": Math.ceil(Math.random() * 999999),
    "nonce": "a9b7f7e7as" + new Date() + Math.random() * 999999,
    "timestamp": new Date(),
    "customer_url": "https://maksmine.web.app/makse"
    };
  const config = {
    headers: {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }
  }
  const response = await axios.post(
    "https://igw-demo.every-pay.com/api/v4/payments/oneoff",JSON.stringify(paymentData),config
  );
  res.json(response.data.payment_link);
});

export default router;