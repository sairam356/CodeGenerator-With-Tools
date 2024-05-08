import express, { Request, Response } from "express"
import * as dotevnv from "dotenv";
import cors from "cors";
import helmet from "helmet"

import { StatusCodes } from "http-status-codes"
import { CurdGenerator } from "./CurdGenerator";


dotevnv.config()

const PORT = 9191;

const app = express()
app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())


app.post("/analyze", async (req: Request, res: Response) => {  

    const swaggerURI = req.body.swaggerURI;

    const generator :CurdGenerator = new CurdGenerator();
    const swagger = await generator.fetchAndParseSwagger(swaggerURI);
    const response =  await generator.processSwagger(swagger, req.body.query);
    return res.status(StatusCodes.OK).send(response);

})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})


