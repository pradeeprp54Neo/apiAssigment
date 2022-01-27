import { postdata, getdata, deletedata, putdata } from '../controller/empController.js';
import { body, validationResult } from 'express-validator'
import express from 'express';
import jwt from 'jsonwebtoken'
const jwtSecret = "arpan"

const router = express.Router();

router.get("/get", async (req, res) => {
    res.send(await getdata())
})

router.post("/post", body('name').isAlpha().isLength({ min: 2 }), body('email').isEmail(), 
body('contact').isLength({ min: 10, max: 10 }).isMobilePhone(), (req, res) => {

    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ "err": 1, "msg": "invalid data", "token": errors.array() });
    }
    postdata(req.body)
    const token = jwt.sign({ errors: errors.array() }, jwtSecret, { expiresIn: 360000 })
    res.status(200).json({ "err": 0, "msg": "data added", "token": token });

})

router.delete("/del/:email", (req, res) => {
    deletedata(req.params.email)
    res.send("data deleted")
})

router.put("/put/:email", (req, res) => {
    putdata(req.params.email, req.body)
    res.send("data updated")
})

export default router;