import  express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors"
import dontenv from "dotenv";
import productRoutes from './routes/productRoutes.js';
import { sql } from "./config/db.js";



dontenv.config();

const app = express();
const PORT = process.env.PORT || 5455;

app.use(express.json());
app.use(cors());

// helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(helmet());

// log the requests
app.use(morgan('dev'));

app.use("/api/products", productRoutes);

async function initDB() {
    try {
        await sql`
        CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `
console.log("Database initialized successfully")
    } catch (error) {
        console.log("Error initDB", error)
    }
    
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`The server is running on the port ${PORT}`)
    })

})