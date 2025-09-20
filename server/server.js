import express from "express"
import "dotenv/config";
import cors from "cors"
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/clerkWebhooks.js";


const app = express()
app.use(cors())
app.use(clerkMiddleware())
app.use(express.json())
connectDB()

app.get('/', (req, res) => res.send("API IS WORKING FINE"))
app.use("/api/clerk", clerkWebhooks)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))