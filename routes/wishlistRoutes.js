const express = require("express");
const router = express.Router();

const pool = require("../db");
const isAuthenticated = require("../middleware/auth");


// Add product to wishlist
router.post("/wishlist/add",isAuthenticated, async (req, res) => {

    try {

        const user_id = req.session.user_id;
        const { product_id } = req.body;


        if (!user_id) {
            return res.status(401).send("Please login first");
        }


        const [exist] = await pool.query(
            "SELECT * FROM wishlist WHERE user_id=? AND product_id=?",
            [user_id, product_id]
        );


        if (exist.length > 0) {
            return res.send("Product already in wishlist ❤️");
        }


        await pool.query(
            "INSERT INTO wishlist(user_id,product_id) VALUES(?,?)",
            [user_id, product_id]
        );


        res.redirect("/wishlist");


    }
    catch (error) {

        console.log(error);
        res.send("Server Error");

    }

});





// Show wishlist page
router.get("/wishlist",isAuthenticated, async (req, res) => {


    try {


        const user_id = req.session.user_id;


        if (!user_id) {

            return res.redirect("/login");

        }



        const [products] = await pool.query(

            `
            SELECT latest_collection.*
            FROM latest_collection
            JOIN wishlist
            ON latest_collection.id = wishlist.product_id
            WHERE wishlist.user_id=?
            `,

            [user_id]

        );



        res.render("wishlist", {

            products: products

        });


    }


    catch (error) {

        console.log(error);

        res.send("Server Error");

    }


});

router.post("/wishlist/remove",isAuthenticated, async (req, res) => {


    try {


        const user_id = req.session.user_id;

        const { product_id } = req.body;



        await pool.query(

            `
            DELETE FROM wishlist 
            WHERE user_id=? 
            AND product_id=?
            `,

            [user_id, product_id]

        );



        res.redirect("/wishlist");


    }


    catch (error) {

        console.log(error);

        res.send("Server Error");

    }


});

module.exports = router;