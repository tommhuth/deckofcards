import { Router } from "express"
import helloApi from "./api/hello"
import appRoutes from "./app"

const router = Router()

router.use("/", appRoutes)
router.use("/api/hello", helloApi)

export default router
