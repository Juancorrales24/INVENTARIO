import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* creamos el enrutador */
const router = Router();

/* Configuramos respuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias )

/* Hacemos disponible al router en toda la app */
export default router;