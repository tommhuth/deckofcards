import { Router } from "express"

const router = Router()

router.get("/", (req, res) => res.json({message: "Hai"}))

export default router
