import express from 'express';

import { averageOddPositiveIntegers } from './util';

/**
 * This file should default export the express application - this is for `index.spec.ts` to be able to test it.
 */

console.log("server is starting");

const data: number[] = [1,2,3,4,5];
const app = express();

app.use(express.json());

app.post('/odd-positive-average', (req, res) => {

    const result: number = averageOddPositiveIntegers(data);

        if(result == null)
        {
            res.status(400).send("result is null");

        }
        else
        {   res.set({ 'content-type': 'application/json'});
            res.status(200).send({result});
        }

    
 });

app.listen(3000,listening);


function listening(){

    console.log("listening...");
    //console.log(result);
}

export default app;

