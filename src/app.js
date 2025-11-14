/* Importamos al framework express */
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js "

/* Asignamos a la app toda funcionalidad para mi web server */
const app = express();

/* Setear un puerto a mi web server */
app.set("port",5000);

/* Routes */
app.use("/api/categorias",categoriasRoutes)

/* Hacemos disponible a mi server app para toda la aplicacion */
export default app;