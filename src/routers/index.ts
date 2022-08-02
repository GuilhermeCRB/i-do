import { Router } from "express";

import access from "./accessRouter.js";

const router = Router();

router.use(access);

export default router;