import express from "express";
import { averageOddPositiveIntegers } from "./util";
import cors from "cors";
import bodyParser from "body-parser";

/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */

const app = express();

app.use(bodyParser.json(), cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/odd-positive-average", (req, res) => {
  console.log(req.body);

  if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
    res.status(400).send({ message: "post request was empty" });
    console.log("post request was empty");
  } else {
    res.set({ "content-type": "application/json" });
    res.status(200).send({ data: req.body });
  }
});

app.listen(3003, () => {
  console.log("server has started");
});

export default app;
