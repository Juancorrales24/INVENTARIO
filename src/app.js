/* importamos al framework express */
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js"

/* asignamos a app toda funcionalidad para mi server web */
const app = express(); 

/* setear un puerto a mi web server */
app.set("port",5000)

/* routes */
app.use("/api/Categorias",categoriasRoutes)

/* Hacemos disponible a mi web server app para toda la aplicación */
export default app;