const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const selectedProductData = [
    {
        "id": 1,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
        "title": "Wide Bowknot Hat",
        "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
        "price": 288,
        "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
        "brand": "MAJIK",
        "total_reviews": 245,
        "rating": 3.6,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 4,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
                "title": "Men's Waistcoat",
                "style": "LEVIS Men's Waistcoat",
                "price": 2500,
                "description": "LEVIS Men's Waistcoat is a 3-button down suit vest perfect for formal or informal occasions such as weddings, banquets, dates, working, parties, etc. It can match with your shirt, jacket,  suit, or Tuxedo which makes you handsome and gentlemen. It has an adjustable fit and two side real pockets.",
                "brand": "LEVIS",
                "total_reviews": 130,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 2,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
        "title": "Plain Round Neck T-shirt",
        "style": "Plain Round Neck T-shirt",
        "price": 395,
        "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
        "brand": "Huetrap",
        "total_reviews": 120,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 4,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
                "title": "Men's Waistcoat",
                "style": "LEVIS Men's Waistcoat",
                "price": 2500,
                "description": "LEVIS Men's Waistcoat is a 3-button down suit vest perfect for formal or informal occasions such as weddings, banquets, dates, working, parties, etc. It can match with your shirt, jacket,  suit, or Tuxedo which makes you handsome and gentlemen. It has an adjustable fit and two side real pockets.",
                "brand": "LEVIS",
                "total_reviews": 130,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 3,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
        "title": "Cotton Hoodie",
        "style": "Scott International Men's Cotton Hooded Hoodies",
        "price": 498,
        "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
        "brand": "Scott International",
        "total_reviews": 229,
        "rating": 3.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 4,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
                "title": "Men's Waistcoat",
                "style": "LEVIS Men's Waistcoat",
                "price": 2500,
                "description": "LEVIS Men's Waistcoat is a 3-button down suit vest perfect for formal or informal occasions such as weddings, banquets, dates, working, parties, etc. It can match with your shirt, jacket,  suit, or Tuxedo which makes you handsome and gentlemen. It has an adjustable fit and two side real pockets.",
                "brand": "LEVIS",
                "total_reviews": 130,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 4,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jacket.png",
        "title": "Men's Waistcoat",
        "style": "LEVIS Men's Waistcoat",
        "price": 2500,
        "description": "LEVIS Men's Waistcoat is a 3-button down suit vest perfect for formal or informal occasions such as weddings, banquets, dates, working, parties, etc. It can match with your shirt, jacket,  suit, or Tuxedo which makes you handsome and gentlemen. It has an adjustable fit and two side real pockets.",
        "brand": "LEVIS",
        "total_reviews": 130,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 5,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png",
        "title": "Slim Fit Jeans",
        "style": "Levi's Slim Fit Jeans",
        "price": 1469,
        "description": "Levi's Slim Fit Jeans slim-fit jeans have added stretch for all-day comfort. It offers a lean look and is a great alternative to skinny jeans. This product will be an excellent pick for you and ensures easy maintenance.",
        "brand": "LEVIS",
        "total_reviews": 310,
        "rating": 3.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 6,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-modren-net.png",
        "title": "Miss Chase Bodycon Dress",
        "style": "Miss Chase Round Neck 3/4 Sleeves Floral Lace Overlaid Knee-Long Bodycon Dress with Zip Closure",
        "price": 974,
        "description": "Miss Chase Bodycon Dress is made with high-quality solvents and colors and combined with fully automated machines and ensures razor-sharp points that highlight every single detail in it. The fabric is knit at the optimum strength to achieve perfect strength and ensure to remain its original shape.",
        "brand": "LEVIS",
        "total_reviews": 222,
        "rating": 3.8,
        "availability": "Out Of Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 7,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png",
        "title": "Zari Design Kurta",
        "style": "Zari Self Design Kurta with Palazzos & Dupatta",
        "price": 1869,
        "description": "Blue and golden zari self-design kurta with palazzos have straight calf length kurta and a keyhole neck, short sleeves, straight hem, side slits. White and golden paisley fusion motif palazzos are comfortable elasticated waistlines with drawstring for adjustability.",
        "brand": "Libas",
        "total_reviews": 1423,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 8,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png",
        "title": "Slim Fit Blazer",
        "style": "Slim Fit Blazer",
        "price": 2599,
        "description": "Be the King of subtle yet statement style with this slim-fit blue textured blazer from LEVIS. This slim-fit blazer is made with the perfect blend of polyester and Viscose that makes it comfortable & stylish. Blazer has a single vent at the back with a notched collar crafted with sharp cuts.",
        "brand": "LEVIS",
        "total_reviews": 189,
        "rating": 4.2,
        "availability": "Out Of Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 9,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-short-sleeves-shirt.png",
        "title": "Animal Printed Shirt",
        "style": "Animal Printed Shirt",
        "price": 1017,
        "description": "Keep it bold and trendy this season with this olive animal-printed Mufti shirt. The stylish slim fit with short sleeves for comfort and a classic spread collar is sure to accentuate the look when clubbed with jeans and lace-up shoes.",
        "brand": "Mufti",
        "total_reviews": 613,
        "rating": 4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 10,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-side-sareee.png",
        "title": "Polyester Saree",
        "style": "Polyester Saree",
        "price": 419,
        "description": "Explore the collection of beautifully designed Saree from Ahalyaa on Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look. The colors, appearing on your screen may differ slightly from the actual product.",
        "brand": "Ahalyaa",
        "total_reviews": 236,
        "rating": 3.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 11,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-sim-jacket.png",
        "title": "Warm Up Jacket",
        "style": "Warm Up Jacket",
        "price": 2796,
        "description": "Monte Carlo jackets are perfect for everyday wear and made to keep you warm. This full-zip fleece is jacket has a lot of features 100 cotton fleece zipper lining and cotton-lined sleeve sweaters. Our Monte Carlo jacket is the perfect gift during the holiday season or any special even.",
        "brand": "Monte Carlo",
        "total_reviews": 519,
        "rating": 4.4,
        "availability": "Out Of Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 12,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-simple-formal.png",
        "title": "Wrap Dress",
        "style": "Wrap Dress",
        "price": 3039,
        "description": "Mix up your best look for the next casual get-together by getting this dress from Vero Moda. Team it with Black footwear and a smart clutch to complete your happening attire. It has a casual bell sleeves midi dress with all over floral print. Fit & flare dress.",
        "brand": "Vero Moda",
        "total_reviews": 879,
        "rating": 3.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 13,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-stylish-sweater.png",
        "title": "Knit Cream Sweater",
        "style": "Knit Cream Sweater",
        "price": 996,
        "description": "Go back to nature with your knits and now it features a turtle neck, knit pattern cream color casual, and full sleeves sweater. Pair it with a stylish pair of jeans or trousers to complete the look. This solid color sweater has a round-neck light-weighted knit material with a relaxed fit.",
        "brand": "MansiCollections",
        "total_reviews": 879,
        "rating": 3.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 14,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-white-punjabi.png",
        "title": "Sheer Anarkali",
        "style": "Embroidered Handloom Sheer Anarkali",
        "price": 2172,
        "description": "White Aari embroidered handloom sheer Anarkali kurta with paneled and tie-up detail has a keyhole neck and comes with a white embroidered dupatta. This is designed as per the latest trends to keep you in sync with high fashion, party, casual function, traditional, Garba Parties, etc.",
        "brand": "Saadgi",
        "total_reviews": 879,
        "rating": 3.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 15,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-blue-fork.png",
        "title": "Embellished Maxi Dress",
        "style": "Embellished Maxi Dress",
        "price": 1799,
        "description": "Navy blue georgette solid maxi embellished flared dress has a round neck and half sleeves hook closure and evening gown perfect for formal occasions. This garment is made of crepe, which drapes well on all body types.",
        "brand": "STREET 9",
        "total_reviews": 879,
        "rating": 3.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 16,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/cloths-long-fork.png",
        "title": "Embroidered Net Gown",
        "style": "Embroidered Net Gown",
        "price": 62990,
        "description": "An Embroidered Net Gown is the clothing worn by a bride during a wedding ceremony. It enhances your beauty wearing this vibrant, gorgeous, and beautiful Wedding Gown. Find your dream wedding dress today. It features foldable, one hoop steel, two layers of tulles, and is elastic in the waist part. ",
        "brand": "Manyavar",
        "total_reviews": 879,
        "rating": 3.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-cap.png",
                "title": "Wide Bowknot Hat",
                "style": "Wide Bowknot Hat for Women and Girls (Multicolor)",
                "price": 288,
                "description": "This Summer's perfect White Wide Brim Straw Beach hat is perfect for a hot day. It has the Floppy Style which gives you good coverage from the sun's hot rays and is sure to make the right style statement. It is made of high-quality & skin-friendly paper straw material and lightweight. ",
                "brand": "MAJIK",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 2,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-fit-t-shirt.png",
                "title": "Plain Round Neck T-shirt",
                "style": "Plain Round Neck T-shirt",
                "price": 395,
                "description": "Basic Round Neck T-shirts from Huetrap. These T-shirts are stitched for higher durability using the best technology in the industry. After stitching, these products are quality checked for Size and any kinds of defects before packing. This assures the best of Quality and Value for money.",
                "brand": "Huetrap",
                "total_reviews": 120,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 3,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-hoodie.png",
                "title": "Cotton Hoodie",
                "style": "Scott International Men's Cotton Hooded Hoodies",
                "price": 498,
                "description": "It is made up of rich cotton fabric and this hoodie for men is easy and comfortable to wear throughout the day. It can be machine washed in cold water and suitable for low tumble drying. The pre-shrunk nature of this men’s hoodie ensures no undesirable effects after a wash.",
                "brand": "Scott International",
                "total_reviews": 229,
                "rating": 3.8,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 17,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
        "title": "Handheld Full Body Massager",
        "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
        "price": 1299,
        "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
        "brand": "AGARO REGAL",
        "total_reviews": 1356,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            },
            {
                "id": 20,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
                "title": "SilverBullet Mixer Grinder",
                "style": "COOKWELL SilverBullet 500W Mixer Grinder",
                "price": 1899,
                "description": "Cook well is a High-Quality Mixer Grinder for Hotels, Restaurants, Catering, and Home usage. It has 4 multipurpose jars makes cooking easy and convenient. It comes with a powerful 500W overload-protected motor. It can Whip up chutneys, grind masalas and prepare yummy shakes effortlessly.",
                "brand": "COOKWELL",
                "total_reviews": 2364,
                "rating": 4.1,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 18,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
        "title": "True Wireless Earbuds",
        "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
        "price": 13499,
        "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
        "brand": "LG",
        "total_reviews": 1245,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            },
            {
                "id": 20,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
                "title": "SilverBullet Mixer Grinder",
                "style": "COOKWELL SilverBullet 500W Mixer Grinder",
                "price": 1899,
                "description": "Cook well is a High-Quality Mixer Grinder for Hotels, Restaurants, Catering, and Home usage. It has 4 multipurpose jars makes cooking easy and convenient. It comes with a powerful 500W overload-protected motor. It can Whip up chutneys, grind masalas and prepare yummy shakes effortlessly.",
                "brand": "COOKWELL",
                "total_reviews": 2364,
                "rating": 4.1,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 19,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
        "title": "Mixer Grinder",
        "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
        "price": 1699,
        "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
        "brand": "Lifelong",
        "total_reviews": 6231,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 20,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
                "title": "SilverBullet Mixer Grinder",
                "style": "COOKWELL SilverBullet 500W Mixer Grinder",
                "price": 1899,
                "description": "Cook well is a High-Quality Mixer Grinder for Hotels, Restaurants, Catering, and Home usage. It has 4 multipurpose jars makes cooking easy and convenient. It comes with a powerful 500W overload-protected motor. It can Whip up chutneys, grind masalas and prepare yummy shakes effortlessly.",
                "brand": "COOKWELL",
                "total_reviews": 2364,
                "rating": 4.1,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 20,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder-white.png",
        "title": "SilverBullet Mixer Grinder",
        "style": "COOKWELL SilverBullet 500W Mixer Grinder",
        "price": 1899,
        "description": "Cook well is a High-Quality Mixer Grinder for Hotels, Restaurants, Catering, and Home usage. It has 4 multipurpose jars makes cooking easy and convenient. It comes with a powerful 500W overload-protected motor. It can Whip up chutneys, grind masalas and prepare yummy shakes effortlessly.",
        "brand": "COOKWELL",
        "total_reviews": 2364,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 21,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ps5-controller.png",
        "title": "PS5 Controller Charger",
        "style": "PS5 Controller Charger, Upgraded Playstation 5 Charging Station Dock with LED Indicator, Safety Chip Protection, Dual USB Type C Fast Charging, for Sony DualSense Controller",
        "price": 1749,
        "description": "Specially designed for PS5 Dualsense Controller with two USB-C ports and can be charged 2 PlayStations and 5 controllers simultaneously. It can supports overcurrent, overvoltage, overheat, overcharge, short circuit protection, and can charge your controller safely and reliably.",
        "brand": "New World",
        "total_reviews": 43543,
        "rating": 3.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 22,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png",
        "title": "Podcast Microphone",
        "style": "MAONO AU-902 USB Condenser Podcast Microphone, with Dual Volume Control, Mute Button, Monitor Headphone Jack, Plug and Play Mic for Vlogging, Gaming, Studio Recording, YouTube",
        "price": 5555,
        "description": "MAONO AU-902 USB Condenser Podcast Microphone is a stylish dual capsule with omnidirectional and cardioid polar patterns. It delivers pristine studio-quality sound for various applications like Podcasts, Voiceovers, Vocals and ideal for Content Creators, Singers, Recording studios, etc.",
        "brand": "MAONO",
        "total_reviews": 234234,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 23,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-solo-mike.png",
        "title": "Dynamic Microphone",
        "style": "JTS TK-600 Cardioid Dynamic Microphone.",
        "price": 1699,
        "description": "JTS TK-600 Cardioid Dynamic Microphone is a high sensitivity capsule tailored for vocals and offers crystal clear sound even in a noisy environment. It has a magnetic Reed type on/off switch that provides silent switching and can also be placed into a locked position to prevent accidental tampering.",
        "brand": "JTS Store",
        "total_reviews": 2344,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 24,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png",
        "title": "Front Load Machine",
        "style": "Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine",
        "price": 22490,
        "description": "Samsung Front Load washing machine comes with AI-enabled Intelligent Wash. It personalizes washing by remembering your habits, suggesting cycles, and displaying timely information. A SmartThings App provides advice on washing cycles, planning, and troubleshooting.",
        "brand": "Samsung",
        "total_reviews": 1234,
        "rating": 4.5,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 17,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-body-massager.png",
                "title": "Handheld Full Body Massager",
                "style": "AGARO REGAL Electric Handheld Full Body Massager with 8 Massage Heads and variable speed settings for pain relief and relaxation, Back, Leg & Foot",
                "price": 1299,
                "description": "Agaro Regal Hand Massager with vibration is an easy-to-use handheld design with a deep tissue massager ideal for the full body. It has different heads enabled with different massage styles and easy to use with a non-slip long handle. It helps in improving blood circulation, muscle pains, and fatigue.",
                "brand": "AGARO REGAL",
                "total_reviews": 1356,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 18,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png",
                "title": "True Wireless Earbuds",
                "style": "Prestigious British Meridian Sound, Noise Isolation, Wireless Headphones with 2 mics, IPX4 Water Resistance, Total 18 Hours Battery Life(Black)",
                "price": 13499,
                "description": "It has clear and Spatial Sound quality with meridian audio technology. It also offers Immersive Sound with Safety with Noise Isolation with 18 hrs Battery backup (earbuds + cradle). It also has Ergonomic Design Balanced for a Better Fitment and Advanced Call clarity with 2 Mics for Echo Cancellation & noise reduction.",
                "brand": "LG",
                "total_reviews": 1245,
                "rating": 4.4,
                "availability": "In Stock"
            },
            {
                "id": 19,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-mixer-grinder.png",
                "title": "Mixer Grinder",
                "style": "500 W : Higher the Wattage, tougher the Juicing/Grinding",
                "price": 1699,
                "description": "AmazonBasics 500-Watt Mixer Grinder is a durable kitchen appliance with a smart and sturdy design that comes with three convenient jars for everyday usage. The jars and the blades are resistant to corrosion and staining. It has a high-performance long-lasting Copper motor and an overload protector.",
                "brand": "Lifelong",
                "total_reviews": 6231,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 25,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
        "title": "Analog Men's Watch",
        "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
        "price": 1850,
        "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
        "brand": "Fastrack",
        "total_reviews": 254304,
        "rating": 4.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 28,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
                "title": "Tripod Stand",
                "style": "Swivel cord for seamless styling experience",
                "price": 390,
                "description": "It is a 550 lw, lightweight heavy-duty tripod from the house of Digitek max load capacity 5 kg maximum and 2-way head with an adjustable pan. It has a multipurpose head with a quick-release for DV cameras. It is designed for part-time photography lovers and helps to make high-quality scenes",
                "brand": "Sketchfab",
                "total_reviews": 4824,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 26,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
        "title": "Tea Kettle Pot",
        "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
        "price": 1685,
        "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
        "brand": "Indian Art Villa",
        "total_reviews": 11234,
        "rating": 3.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 28,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
                "title": "Tripod Stand",
                "style": "Swivel cord for seamless styling experience",
                "price": 390,
                "description": "It is a 550 lw, lightweight heavy-duty tripod from the house of Digitek max load capacity 5 kg maximum and 2-way head with an adjustable pan. It has a multipurpose head with a quick-release for DV cameras. It is designed for part-time photography lovers and helps to make high-quality scenes",
                "brand": "Sketchfab",
                "total_reviews": 4824,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 27,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
        "title": "Aluminium 4 Cup Tea Kettle",
        "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
        "price": 399,
        "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
        "brand": "Kitchen Expert",
        "total_reviews": 3427,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 28,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
                "title": "Tripod Stand",
                "style": "Swivel cord for seamless styling experience",
                "price": 390,
                "description": "It is a 550 lw, lightweight heavy-duty tripod from the house of Digitek max load capacity 5 kg maximum and 2-way head with an adjustable pan. It has a multipurpose head with a quick-release for DV cameras. It is designed for part-time photography lovers and helps to make high-quality scenes",
                "brand": "Sketchfab",
                "total_reviews": 4824,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 28,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-medium-tripod.png",
        "title": "Tripod Stand",
        "style": "Swivel cord for seamless styling experience",
        "price": 390,
        "description": "It is a 550 lw, lightweight heavy-duty tripod from the house of Digitek max load capacity 5 kg maximum and 2-way head with an adjustable pan. It has a multipurpose head with a quick-release for DV cameras. It is designed for part-time photography lovers and helps to make high-quality scenes",
        "brand": "Sketchfab",
        "total_reviews": 4824,
        "rating": 4.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 29,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nova-trimmer.png",
        "title": "Beard Trimmer",
        "style": "Nova Runtime Beard Trimmer",
        "price": 398,
        "description": "Nova Runtime Beard Trimmer has been recognized as one of the best taper clippers around. It has a versatile clipper that cuts hair wet or dry, thick or thin. The Taper comes equipped with a blade lever for easy length adjustment that changes the closeness of your cut.",
        "brand": "Nova",
        "total_reviews": 10035,
        "rating": 4.5,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 30,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-nover-v2-trimmer.png",
        "title": "Nova SuperGroom Multi-kit",
        "style": "Nova SuperGroom NG 1147 Multi-kit: 60 Minutes Runtime Hair Trimmer for Men (Black)",
        "price": 1199,
        "description": "This Grooming Kit from Nova can help you achieve the same in the comfort of your home. It is suitable for managing hair of the entire body like face, chest, abs, underarms, arms, legs. It provides precision trim without causing discomfort like tugging or pulling hairs.",
        "brand": "Nova",
        "total_reviews": 12888,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 31,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-black-watch.png",
        "title": "Privateer Quartz Watch",
        "style": "Fossil Men's Privateer Sport Stainless Steel Multifunction Quartz Watch",
        "price": 8122,
        "description": "Fossil Men's Privateer Sport Stainless Steel Multifunction Quartz Watch is a trendy addition to your accessory collection. It has a two-tone stainless steel case and bracelet. Fold-over clasp closure with push-button release. The textured dial features gold-tone hands and hour markers.",
        "brand": "Fossil",
        "total_reviews": 16564,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 32,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-royal-watch.png",
        "title": "Chronograph black Watch",
        "style": "Fossil Chronograph black Men Watch",
        "price": 6395,
        "description": "Stay fashionable with Fossil Chronograph Black Men Watch. This Chronograph watch has a dial with a dial diameter of 44 millimeters. This watch has a 2-year manufacturer warranty. It has everything you need for a best-dressed season. This Grant watch also features a chronograph movement.",
        "brand": "Fossil",
        "total_reviews": 89765,
        "rating": 3.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 33,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png",
        "title": "Collider Black Dial Men's Watch",
        "style": "Fossil Collider Hybrid Hr Smartwatch Black Dial Men's Watch",
        "price": 14995,
        "description": "A classic timepiece designed with integrated mechanical hands and an always-on read-out display shows curated information at a glance. This watch works with both iPhone and Android Phones. It tracks heart rate, activity, and sleep time with in-depth wellness stats. Enjoy battery life that lasts more than two weeks upon complete charge.",
        "brand": "Fossil",
        "total_reviews": 1678,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 34,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png",
        "title": "Neutra Analog Men's Watch",
        "style": "Fossil Neutra Analog Black Dial Men's Watch",
        "price": 10995,
        "description": "Fossil Neutra Analog Black Dial Men's Watch has incorporated elements from mid-century architecture never gets out of fashion. It has a Neutra chronograph watch features has a well-balanced construction with a black chronograph dial, white stick markings at all hours, and a sculpted case. .",
        "brand": "Fossil",
        "total_reviews": 276,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 35,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png",
        "title": "Maritime Men's Watch",
        "style": "Titan Maritime Analog Green Dial Men's Watch",
        "price": 11999,
        "description": "This analog watch for men features a silver, tonneau dial housed in a brass case. The case is fitted with a crown that lets you adjust the time. The dial has plain three hands, numeral markings at quarter intervals, and a date display. It has Equipped with 3 ATM water-resistant depths.",
        "brand": "Titan",
        "total_reviews": 8652,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 25,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-casual-watch.png",
                "title": "Analog Men's Watch",
                "style": "Fastrack Casual Analog Dark Blue Dial Men's Watch",
                "price": 1850,
                "description": "Fastrack Casual Analog Dark Blue Dial Men's Watch is a trendy silver watch designed with a blue mesh look on the dial. It has 5ATM/50m Water resistance and with Stainless steel black cover with high precision quartz analog movement.",
                "brand": "Fastrack",
                "total_reviews": 254304,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 26,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-copper-kettle.png",
                "title": "Tea Kettle Pot",
                "style": "Indian Art Villa Copper Hammered Tea Kettle Pot Inside Tin Lining, Serveware, 600 ML.",
                "price": 1685,
                "description": "IndianArtVilla Tea kettle pot is a highly durable, elegant, and, rooted tea accessory handcrafted with love. It has delightfully designed ideal for gifting as well as for personal use. It will be a lovely addition to your kitchen for brewing/serving or your living room as a unique decorative piece.",
                "brand": "Indian Art Villa",
                "total_reviews": 11234,
                "rating": 3.8,
                "availability": "In Stock"
            },
            {
                "id": 27,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-kettle.png",
                "title": "Aluminium 4 Cup Tea Kettle",
                "style": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver)",
                "price": 399,
                "description": "Kitchen Expert Aluminium 4 Cup Tea Kettle (Silver) is a quality stainless steel material with capacity of 4 cups serving and comes with Heat resistance Handle,  and can be used in serving tea and hot liquid substance. It has mirror finish looks great with any kitchen decor.",
                "brand": "Kitchen Expert",
                "total_reviews": 3427,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 36,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
        "title": "Eggs",
        "style": "Eggs",
        "price": 60,
        "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
        "brand": "Naturoz",
        "total_reviews": 245,
        "rating": 3.6,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 39,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
                "title": "Fresh Produce Green Chilli",
                "style": "Fresh Produce Green Chilli",
                "price": 30,
                "description": "A spice without which Indian cuisine would be incomplete, the most common variety of chilli used apart from red is the green. These are used with or without the stalks, whole or chopped, with seeds or deseeded. They are used fresh, dried, powdered, pickled or in sauces.",
                "brand": "Amazon",
                "total_reviews": 783,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 37,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
        "title": "Chilli Extract Sauce",
        "style": "Chilli Extract Sauce",
        "price": 788,
        "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
        "brand": "Everin",
        "total_reviews": 8676,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 39,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
                "title": "Fresh Produce Green Chilli",
                "style": "Fresh Produce Green Chilli",
                "price": 30,
                "description": "A spice without which Indian cuisine would be incomplete, the most common variety of chilli used apart from red is the green. These are used with or without the stalks, whole or chopped, with seeds or deseeded. They are used fresh, dried, powdered, pickled or in sauces.",
                "brand": "Amazon",
                "total_reviews": 783,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 38,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
        "title": "Flour Unbleached",
        "style": "TWF Store Flour Unbleached",
        "price": 200,
        "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
        "brand": "TWF Store",
        "total_reviews": 678,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 39,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
                "title": "Fresh Produce Green Chilli",
                "style": "Fresh Produce Green Chilli",
                "price": 30,
                "description": "A spice without which Indian cuisine would be incomplete, the most common variety of chilli used apart from red is the green. These are used with or without the stalks, whole or chopped, with seeds or deseeded. They are used fresh, dried, powdered, pickled or in sauces.",
                "brand": "Amazon",
                "total_reviews": 783,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 39,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-green-chilli.png",
        "title": "Fresh Produce Green Chilli",
        "style": "Fresh Produce Green Chilli",
        "price": 30,
        "description": "A spice without which Indian cuisine would be incomplete, the most common variety of chilli used apart from red is the green. These are used with or without the stalks, whole or chopped, with seeds or deseeded. They are used fresh, dried, powdered, pickled or in sauces.",
        "brand": "Amazon",
        "total_reviews": 783,
        "rating": 4.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 40,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--kumkum.png",
        "title": "Maroon Kumkum ",
        "style": "Maroon Kumkum",
        "price": 200,
        "description": "Kumkuma is a powder used for social and religious markings in India. It is made from 95% turmeric and 5% limestone or any other local materials. The turmeric is dried and powdered with a bit of slaked lime, which turns the rich yellow powder into a red color.",
        "brand": "Amazon",
        "total_reviews": 698,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 41,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-lemons.png",
        "title": "Fresh Lemon, 100g",
        "style": "Fresh Lemon, 100g",
        "price": 50,
        "description": "Lemons contain a high amount of vitamin C, soluble fiber, and plant compounds that give them a number of health benefits. Lemons may aid in weight loss and reduce your risk of heart disease, digestive issues, and cancer, etc. It can also help cure sore throats and inflammation of the tonsils.",
        "brand": "Amazon",
        "total_reviews": 1254,
        "rating": 4.5,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 42,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png",
        "title": "Virgin Avocado Oil",
        "style": "Virgin Avocado Oil",
        "price": 4144,
        "description": "Avocado oil is an edible oil extracted from the pulp of avocados, the fruit of Persea americana. It is used as an edible oil both raw and for cooking, where it is noted for its high smoke point. It is also used for lubrication and in cosmetics etc.",
        "brand": "ProV",
        "total_reviews": 835,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 43,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-rice.png",
        "title": "Basmati Rice",
        "style": "Fortune Basmati Rice",
        "price": 244,
        "description": "Fortune Super Basmati Rice is a specially aged and carefully picked, dried, and sorting machine at our state-of-the-art milling plant. On cooking, it becomes exceptionally long while remaining non-sticky. It is best used to prepare pulao, fried rice, risotto, etc. ",
        "brand": "Fortune",
        "total_reviews": 245,
        "rating": 3.6,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 44,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-sugar-cubes.png",
        "title": "Crystal Sugar",
        "style": "Crystal Sugar",
        "price": 278,
        "description": "Sugar denotes sweetness and contains an Organin ingredient that has been around for a long time. Sulphurless Organic Sugar occupies a very unique place in our culture. It is hygienically packed and undergoes rigorous and stringent laboratory tests to meet food safety norms.",
        "brand": "NatureVit",
        "total_reviews": 245,
        "rating": 3.6,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 45,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-turmeric.png",
        "title": "Turmeric Powder",
        "style": "Turmeric Powder",
        "price": 1234,
        "description": "It is the most frequently used ingredient in Indian cooking after salt. Turmeric powder is a combination of pure quality, fresh aroma, and lively color. It is known for its high  (color property) content. Curcumin is a major component of turmeric. It gives the yellow color to the turmeric prowder.",
        "brand": "Patanjali",
        "total_reviews": 245,
        "rating": 2.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 36,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-eggs.png",
                "title": "Eggs",
                "style": "Eggs",
                "price": 60,
                "description": "Eggs are a very good source of inexpensive, high-quality protein and help to improve heart health. It Aids in the growth and development of the body and maintains the healthy hormonal functioning of the thyroid. Consuming boiled eggs every day gives a good long-term impact on brain health.",
                "brand": "Naturoz",
                "total_reviews": 245,
                "rating": 3.6,
                "availability": "In Stock"
            },
            {
                "id": 37,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-extract.png",
                "title": "Chilli Extract Sauce",
                "style": "Chilli Extract Sauce",
                "price": 788,
                "description": "It is made from sun-ripen chilies which are ground into a smooth paste along with garlic and packaged in a convenient squeeze bottle. It gives a delicious spicy taste. Like all our sauces we use only the ingredients and never any artificial colors or flavorings.",
                "brand": "Everin",
                "total_reviews": 8676,
                "rating": 4.1,
                "availability": "In Stock"
            },
            {
                "id": 38,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/grocery--flour.png",
                "title": "Flour Unbleached",
                "style": "TWF Store Flour Unbleached",
                "price": 200,
                "description": " It is made with the choicest of grains sourced from the fields across the country. It has 6 natural grains – wheat, maize, oats, soya, chana, and psyllium husk. This unique combination of grains ensures that the flour is high in fiber which aids in the digestion of food and keeps the gut healthy. ",
                "brand": "TWF Store",
                "total_reviews": 678,
                "rating": 4.3,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 46,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
        "title": "Batman Batmobile",
        "style": "Funskool Batman Batmobile",
        "price": 745,
        "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
        "brand": "Funskool",
        "total_reviews": 1244,
        "rating": 4.7,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 49,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
                "title": "Knitted Rabbit",
                "style": "Rabbit",
                "price": 620,
                "description": "This knitted white fluffy rabbit is easily washable and durable. Best quality fabric is used which is non-toxic and super smooth. This soft toy is home washable and very durable. If someone is asking for soft toys and you are willing to gift soft toys you should prefer this.",
                "brand": "Ira",
                "total_reviews": 1234,
                "rating": 4.4,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 47,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
        "title": "Panda Baby Product",
        "style": "Panda Baby Product",
        "price": 1399,
        "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
        "brand": "Panda",
        "total_reviews": 12434,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            },
            {
                "id": 49,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
                "title": "Knitted Rabbit",
                "style": "Rabbit",
                "price": 620,
                "description": "This knitted white fluffy rabbit is easily washable and durable. Best quality fabric is used which is non-toxic and super smooth. This soft toy is home washable and very durable. If someone is asking for soft toys and you are willing to gift soft toys you should prefer this.",
                "brand": "Ira",
                "total_reviews": 1234,
                "rating": 4.4,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 48,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
        "title": "Monsters Charm Toy",
        "style": "Monsters Charm Toy",
        "price": 8600,
        "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
        "brand": "Trendytap",
        "total_reviews": 1243,
        "rating": 4.2,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 49,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
                "title": "Knitted Rabbit",
                "style": "Rabbit",
                "price": 620,
                "description": "This knitted white fluffy rabbit is easily washable and durable. Best quality fabric is used which is non-toxic and super smooth. This soft toy is home washable and very durable. If someone is asking for soft toys and you are willing to gift soft toys you should prefer this.",
                "brand": "Ira",
                "total_reviews": 1234,
                "rating": 4.4,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 49,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-rabbit.png",
        "title": "Knitted Rabbit",
        "style": "Rabbit",
        "price": 620,
        "description": "This knitted white fluffy rabbit is easily washable and durable. Best quality fabric is used which is non-toxic and super smooth. This soft toy is home washable and very durable. If someone is asking for soft toys and you are willing to gift soft toys you should prefer this.",
        "brand": "Ira",
        "total_reviews": 1234,
        "rating": 4.4,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 50,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-orange-robot.png",
        "title": "Bot Robot Toy",
        "style": "Bot Robot Toy",
        "price": 355,
        "description": "This WireScorts Robot is made of quality material, safe, simple, and easy to use. It is safe for your kids as it is non-toxic. Buy once and enjoy for years. Our Robot Pioneer can move forward and backward, turn left and right. Hands can rotate and feet can move in all directions.",
        "brand": "WireScorts",
        "total_reviews": 2345,
        "rating": 3.8,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 51,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-red-train.png",
        "title": "Kids Toy Train",
        "style": "Kids Toy Train",
        "price": 599,
        "description": "Vintage Toy Train Set with tracks and comes with realistic sounds, flashlight, and smoke effect when the train chugs on the tracks. There is no greater excitement and thrill for children and kids than watching a train go past them, rumbling along, puffing out smoke and going full steam ahead.",
        "brand": "FIONA",
        "total_reviews": 12341,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 52,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-short-green-robot.png",
        "title": "Non-Toxic Robot Toys",
        "style": "Non-Toxic Robot Toys",
        "price": 1545,
        "description": "Wooden robot toys are flexible and even can stand up more for more lifetime. It can be served as a perfect gift for both boys and girls. It is made of wooden material, non-toxic, and safe for children to play with. The bright color and cute pattern of the wooden robot will attract children.",
        "brand": "FunBlast",
        "total_reviews": 123412,
        "rating": 3.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 53,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-simple-teddy.png",
        "title": "Honey Teddy Bear",
        "style": "Honey Teddy Bear",
        "price": 599,
        "description": "Honey introduces this Beige Teddy, a fun-sized and loveable companion to make playtime more fun and exciting. It is extremely soft and huggable with comfortable. It can conveniently clean it by hand washing it when it gets dirty. It is recommended for children who are above 3 years in age. ",
        "brand": "Honey",
        "total_reviews": 12341,
        "rating": 4.3,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 54,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-yellow-car.png",
        "title": "Nexa Yellow Car",
        "style": "Nexa Yellow Car",
        "price": 490,
        "description": "Nexa Baleno providing long-lasting strength and this Whistle Racer car uses expertly crafted durable plastic to withstand bumping into walls and endless hours of play. Children love it. It is made up of good quality plastic material. and available in different attractive colors.",
        "brand": "Quinergys",
        "total_reviews": 12341,
        "rating": 4.1,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 46,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-batman-toy.png",
                "title": "Batman Batmobile",
                "style": "Funskool Batman Batmobile",
                "price": 745,
                "description": "When the batmobile is out of the Batcave, it is a tough time for the bad guys. This heavily armored vehicle is undoubtedly batman's favorite machine in his campaign to fight crime. It comes with a free batman figure with a window packaging missile launcher.",
                "brand": "Funskool",
                "total_reviews": 1244,
                "rating": 4.7,
                "availability": "In Stock"
            },
            {
                "id": 47,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-big-two-wheeler.png",
                "title": "Panda Baby Product",
                "style": "Panda Baby Product",
                "price": 1399,
                "description": "This Ride-on is a brightly colored and visually appealing Ride-on Tricycle. This toddler riding toy can be used indoors or outdoors. It makes learning to ride fun And easy. The wide, long-lasting EVA tires offer a stylish look your child Is Sure To Love. Self Assembly Required.",
                "brand": "Panda",
                "total_reviews": 12434,
                "rating": 4.3,
                "availability": "In Stock"
            },
            {
                "id": 48,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-minnos.png",
                "title": "Monsters Charm Toy",
                "style": "Monsters Charm Toy",
                "price": 8600,
                "description": "Monsters Charm Toy is a random pack of 5 Mini Generic silicon rubber charm Figures with a pocket-size of 3 cm wide. It has threads to hang as a charm pendant. Perfect for decorating your succulent plants, flower pot, mini garden, etc. Also great as a decoration in your children's room.",
                "brand": "Trendytap",
                "total_reviews": 1243,
                "rating": 4.2,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 1001,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-silver-hair-dryer.png",
        "title": "Hair Dryer",
        "style": "Philips HP8100/46 Hair Dryer - Salon Dry Compact",
        "price": 760,
        "description": "Cleverly designed, this compact hairdryer is easy to handle and lightweight. The ThermoProtect temperature setting provides the optimal hair drying rate while protecting your hair from overheating. An efficient hairdryer sets your hair dry in just a few seconds. It also comes with a rubber storage hook.",
        "brand": "Phillips",
        "total_reviews": 5463,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1002,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-people-toys.png",
                "title": "Minifigures",
                "style": "Minifigures",
                "price": 760,
                "description": "Collect all mystery mini-figures in the new series 11 and grow your LEGO Minifigure Collection. Each mini-figure comes in a sealed “mystery” bag with its accessories, display plate, and collector’s booklet. Only 1 of 16 individual mini-figures will be available in each “mystery” bag.",
                "brand": "LEGO",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            },
            {
                "id": 1003,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-short-tri-pod.png",
                "title": "Lightweight Tripod",
                "style": "Lightweight Tripod",
                "price": 760,
                "description": "Capture vivid, professional-style photographs with help from this Lightweight Tripod. The tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot. The handy tripod accommodates a wide range of digital, video, and still cameras.",
                "brand": "LEGO",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 1002,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-people-toys.png",
        "title": "Minifigures",
        "style": "Minifigures",
        "price": 760,
        "description": "Collect all mystery mini-figures in the new series 11 and grow your LEGO Minifigure Collection. Each mini-figure comes in a sealed “mystery” bag with its accessories, display plate, and collector’s booklet. Only 1 of 16 individual mini-figures will be available in each “mystery” bag.",
        "brand": "LEGO",
        "total_reviews": 5463,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1001,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-silver-hair-dryer.png",
                "title": "Hair Dryer",
                "style": "Philips HP8100/46 Hair Dryer - Salon Dry Compact",
                "price": 760,
                "description": "Cleverly designed, this compact hairdryer is easy to handle and lightweight. The ThermoProtect temperature setting provides the optimal hair drying rate while protecting your hair from overheating. An efficient hairdryer sets your hair dry in just a few seconds. It also comes with a rubber storage hook.",
                "brand": "Phillips",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            },
            {
                "id": 1003,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-short-tri-pod.png",
                "title": "Lightweight Tripod",
                "style": "Lightweight Tripod",
                "price": 760,
                "description": "Capture vivid, professional-style photographs with help from this Lightweight Tripod. The tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot. The handy tripod accommodates a wide range of digital, video, and still cameras.",
                "brand": "LEGO",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    },
    {
        "id": 1003,
        "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-short-tri-pod.png",
        "title": "Lightweight Tripod",
        "style": "Lightweight Tripod",
        "price": 760,
        "description": "Capture vivid, professional-style photographs with help from this Lightweight Tripod. The tripod makes it easy to achieve reliable stability and score just the right angle when going after that award-winning shot. The handy tripod accommodates a wide range of digital, video, and still cameras.",
        "brand": "LEGO",
        "total_reviews": 5463,
        "rating": 3.9,
        "availability": "In Stock",
        "similar_products": [
            {
                "id": 1001,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-silver-hair-dryer.png",
                "title": "Hair Dryer",
                "style": "Philips HP8100/46 Hair Dryer - Salon Dry Compact",
                "price": 760,
                "description": "Cleverly designed, this compact hairdryer is easy to handle and lightweight. The ThermoProtect temperature setting provides the optimal hair drying rate while protecting your hair from overheating. An efficient hairdryer sets your hair dry in just a few seconds. It also comes with a rubber storage hook.",
                "brand": "Phillips",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            },
            {
                "id": 1002,
                "image_url": "https://assets.ccbp.in/frontend/react-js/ecommerce/toys-people-toys.png",
                "title": "Minifigures",
                "style": "Minifigures",
                "price": 760,
                "description": "Collect all mystery mini-figures in the new series 11 and grow your LEGO Minifigure Collection. Each mini-figure comes in a sealed “mystery” bag with its accessories, display plate, and collector’s booklet. Only 1 of 16 individual mini-figures will be available in each “mystery” bag.",
                "brand": "LEGO",
                "total_reviews": 5463,
                "rating": 3.9,
                "availability": "In Stock"
            }
        ]
    }
]

const dbPath = path.join(__dirname, 'ecommerce.db');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    // Create product_details table
    db.run(`
      CREATE TABLE IF NOT EXISTS product_details (
        id INTEGER PRIMARY KEY,
        image_url TEXT,
        title TEXT,
        style TEXT,
        price INTEGER,
        description TEXT,
        brand TEXT,
        total_reviews INTEGER,
        rating TEXT,
        availability TEXT
      )
    `);

    // Create similar_products table
    db.run(`
      CREATE TABLE IF NOT EXISTS similar_products (
        id INTEGER PRIMARY KEY,
        image_url TEXT,
        title TEXT,
        style TEXT,
        price INTEGER,
        description TEXT,
        brand TEXT,
        total_reviews INTEGER,
        rating TEXT,
        availability TEXT
      )
    `);

    // Insert data
    selectedProductData.forEach(product => {
        // Insert into product_details
        db.run(`
        INSERT OR IGNORE INTO product_details (
          id, image_url, title, style, price, description,
          brand, total_reviews, rating, availability
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
            product.id,
            product.image_url,
            product.title,
            product.style,
            product.price,
            product.description,
            product.brand,
            product.total_reviews,
            product.rating,
            product.availability
        ], (err) => {
            if (err) {
                console.error(`Error inserting main product ID ${product.id}:`, err.message);
            } else {
                console.log(`Inserted main product ID ${product.id}`);
            }
        });

        // Insert similar products
        product.similar_products.forEach(similar => {
            db.run(`
          INSERT OR IGNORE INTO similar_products (
            id, image_url, title, style, price, description,
            brand, total_reviews, rating, availability
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
                similar.id,
                similar.image_url,
                similar.title,
                similar.style,
                similar.price,
                similar.description,
                similar.brand,
                similar.total_reviews,
                similar.rating,
                similar.availability
            ], (err) => {
                if (err) {
                    console.error(`Error inserting similar product ID ${similar.id}:`, err.message);
                } else {
                    console.log(`Inserted or skipped similar product ID ${similar.id}`);
                }
            });
        });
    });
});

// Close DB after slight delay to ensure all queries are completed
setTimeout(() => {
    db.close((err) => {
        if (err) {
            return console.error('Error closing DB:', err.message);
        }
        console.log('All data inserted. Database connection closed.');
    });
}, 1000);