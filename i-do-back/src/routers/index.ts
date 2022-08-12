import { Router } from "express";

import access from "./accessRouter.js";
import suppliers from "./suppliersRouter.js";

const router = Router();

router.use(access);
router.use(suppliers);

export default router;