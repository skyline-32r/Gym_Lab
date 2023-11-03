import express from "express";

const router = express.Router();

router.route("/admin2/:p1?/:p2?")
    .all((req, res, next) => {
        res.locals.memberData = {
            name: "shinder",
            id: "A002"
        }
        next();
    })
    .get((req, res) => {
        res.json({
            params: req.params,
            url: req.url,
            baseUrl: req.baseUrl,
            originalUrl: req.originalUrl
        })
    })
    .post((req, res) => {
        res.send("post edit:" + JSON.stringify(res.locals.memberData));
    })

router.get("/:p1?/:p2?", (req, res) => {
    res.json({
        params: req.params,
        url: req.url
    });
})

export default router;