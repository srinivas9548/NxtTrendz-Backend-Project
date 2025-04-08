const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const dbPath = path.join(__dirname, "ecommerce.db");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (error) => {
    if (error) {
        console.log("Error opening database:", error.message);
    } else {
        console.log("Connected to the ecommerce.db database.");
    }

    // Create 'user' Table if it doesn't exist
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            gender TEXT,
            location TEXT
        )`,
            (err) => {
                if (err) {
                    console.error("Error creating user table:", err.message);
                } else {
                    console.log("User table is ready.")
                }
            }
        );
    });
});

const authenticateToken = (request, response, next) => {
    let jwtToken;
    const authHeader = request.headers["authorization"];
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }
    if (authHeader === undefined) {
        response.status(401);
        response.send("User not logged in");
    } else {
        jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
            if (error) {
                response.send("Invalid Access Token");
            } else {
                request.username = payload.username;
                next();
            }
        })
    }
};

app.get('/', async (request, response) => {
    try {
        response.send("Welcome!, This is a NxtTrendz Backend domain you can access with endpoints.");
    } catch (e) {
        console.error(e.message);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

// Register user 
app.post("/users/", async (request, response) => {
    try {
        const { username, name, password, gender, location } = request.body;

        db.get(
            `SELECT * FROM user WHERE username = ?`, [username], async (err, dbUser) => {
                if (err) {
                    response.status(500).send("Database error");
                } else if (dbUser) {
                    response.status(400).json({ error: "User already exists" });
                } else {
                    const hashedPassword = await bcrypt.hash(password, 10);

                    db.run(
                        `INSERT INTO user (username, name, password, gender, location)
              VALUES (?, ?, ?, ?, ?)`,
                        [username, name, hashedPassword, gender, location],
                        function (err) {
                            if (err) {
                                response.status(500).send("Error creating user");
                            } else {
                                response.json({ message: "User created successfully" });
                            }
                        }
                    );
                }
            }
        );
    } catch (e) {
        console.error(e.message);
        response.status(500).send("Internal Server Error");
    }
});

// Login API
app.post("/login/", (request, response) => {
    const { username, password } = request.body;

    if (!username || !password) {
        return response.status(400).json({ error_msg: "Username or password is invalid" });
    }

    db.get(
        `SELECT * FROM user WHERE username = ?`, [username], async (err, dbUser) => {
            if (err) {
                response.status(500).send("Database error");
            } else if (!dbUser) {
                response.status(400).json({ status_code: 404, error_msg: "Username is not found" });
            } else {
                const isPasswordMatched = await bcrypt.compare(
                    password,
                    dbUser.password
                );
                if (isPasswordMatched) {
                    const payload = { username: username };
                    const jwtToken = jwt.sign(payload, "MY_SECRET_TOKEN");
                    response.json({ jwtToken });
                } else {
                    response.status(400).json({ error_msg: "Username and password didn't match" });
                }
            }
        }
    );
});

// GET products API
app.get("/products/", authenticateToken, async (request, response) => {
    try {
        const getProductsQuery = `SELECT * FROM products`;
        db.all(getProductsQuery, [], (err, rows) => {
            if (err) {
                console.error("Database error:", err.message);
                response.status(500).json({ error: "Internal Server Error" });
            } else if (!rows || rows.length === 0) {
                response.status(400).json({ status_code: 404, error_msg: "No Products Found" });
            } else {
                const products = {
                    "products": rows,
                    "total": rows.length
                }
                response.json(products);
            }
        })
    } catch (error) {
        console.log("Error fetching products:", error);
        response.status(500).json({ error: "Failed to fetch products" });
    }
});

// Similar products mapping (for each main product ID)
const similarProductMapping = {
    1: [2, 3, 4],
    2: [1, 3, 4],
    3: [1, 2, 4],
    4: [1, 2, 3],
    5: [1, 2, 3],
    6: [1, 2, 3],
    7: [1, 2, 3],
    8: [1, 2, 3],
    9: [1, 2, 3],
    10: [1, 2, 3],
    11: [1, 2, 3],
    12: [1, 2, 3],
    13: [1, 2, 3],
    14: [1, 2, 3],
    15: [1, 2, 3],
    16: [1, 2, 3],
    17: [18, 19, 20],
    18: [17, 19, 20],
    19: [17, 18, 20],
    20: [17, 18, 19],
    21: [17, 18, 19],
    22: [17, 18, 19],
    23: [17, 18, 19],
    24: [17, 18, 19],
    25: [26, 27, 28],
    26: [25, 27, 28],
    27: [25, 26, 28],
    28: [25, 26, 27],
    29: [25, 26, 27],
    30: [25, 26, 27],
    31: [25, 26, 27],
    32: [25, 26, 27],
    33: [25, 26, 27],
    34: [25, 26, 27],
    35: [25, 26, 27],
    36: [37, 38, 39],
    37: [36, 38, 39],
    38: [36, 37, 39],
    39: [36, 37, 38],
    40: [36, 37, 38],
    41: [36, 37, 38],
    42: [36, 37, 38],
    43: [36, 37, 38],
    44: [36, 37, 38],
    45: [36, 37, 38],
    46: [47, 48, 49],
    47: [46, 48, 49],
    48: [46, 47, 49],
    49: [46, 47, 48],
    50: [46, 47, 48],
    51: [46, 47, 48],
    52: [46, 47, 48],
    53: [46, 47, 48],
    54: [46, 47, 48]
};

// GET a specific product by productId API
app.get("/products/:id/", authenticateToken, (request, response) => {
    const productId = parseInt(request.params.id);

    // Fetch the main product
    db.get(
        "SELECT * FROM product_details WHERE id = ?",
        [productId],
        (err, product) => {
            if (err) {
                console.error("Error fetching product:", err.message);
                return response.status(500).json({ error: "Failed to fetch product" });
            }

            if (!product) {
                return response.status(404).json({ error: "Product not found" });
            }

            // Check if the product has similar products mapped
            const similarIds = similarProductMapping[productId];
            if (!similarIds) {
                return response.json({ ...product, similar_products: [] });
            }

            // Fetch the similar products
            const placeholders = similarIds.map(() => "?").join(",");
            const query = `SELECT * FROM similar_products WHERE id IN (${placeholders})`;

            db.all(query, similarIds, (err, similarProducts) => {
                if (err) {
                    console.error("Error fetching similar products:", err.message);
                    return response.status(500).json({ error: "Failed to fetch similar products" });
                }

                // Return combined response
                response.json({
                    ...product,
                    similar_products: similarProducts,
                });
            });
        }
    );
});

// GET prime deals API
app.get("/prime-deals/", authenticateToken, async (request, response) => {
    try {
        const getPrimeDealsQuery = `SELECT * FROM prime_deals`;
        db.all(getPrimeDealsQuery, [], (err, rows) => {
            if (err) {
                console.error("Database error:", err.message);
                response.status(500).json({ error: "Internal Server Error" });
            } else if (!rows || rows.length === 0) {
                response.status(400).json({ status_code: 404, error_msg: "No Prime Deals Found" });
            } else {
                const primeDeals = {
                    "prime_deals": rows,
                    "total": rows.length
                }
                response.json(primeDeals);
            }
        });
    } catch (error) {
        console.log("Error fetching prime deals:", error);
        response.status(500).json({ error: "Failed to fetch prime deals" });
    }
});

app.listen(3000, () => {
    console.log("Server is Running at http://localhost:3000/");
});

process.on("SIGINT", () => {
    db.close((err) => {
        if (err) {
            console.error("Error closing database:", err.message);
        } else {
            console.log("Database connection closed.");
        }
        process.exit(0);
    });
});

module.exports = app;