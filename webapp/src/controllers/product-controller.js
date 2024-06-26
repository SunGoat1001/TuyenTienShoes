import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getNewArrivals = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                images: true,
                category: true,
                variants: true,
                reviews: true,
                related: true,
                order_items: true,
                related_from: true
            },
            orderBy: {
                importedDate: "desc"
            },
        });

        return res.render('pages/search', { products });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

const getMan = async (req, res) => {
    // TODO: Fetch products from the database
    return res.render('pages/search');
};

const getWomen = async (req, res) => {
    // TODO: Fetch products from the database
    return res.render('pages/search');
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    // Fetch the product along with its variants and images
    const product = await prisma.product.findUnique({
        where: { id: parseInt(id) },
        include: {
            variants: true,
            images: true,
            reviews: true,
            related: {
                include: {
                    related_product: true,  // Correctly referencing the related_product field
                },
            },
            related_from: {
                include: {
                    product: true,  // Correctly referencing the product field
                },
            },
        },
    });

    if (!product) {
        return res.status(404).send('Product not found');
    }

    // Extract image URLs from image objects
    const images = product.images.map((image) => image.imageUrl);

    // Extract unique sizes from product data
    const sizes = product.variants.map(variant => variant.size);

    // Fetch related product colors
    const relatedColors = await prisma.relatedProduct.findMany({
        where: { productId: parseInt(id) },
        include: {
            related_product: {
                include: {
                    variants: true
                }
            }
        }
    });

    // Extract color information
    const relatedColorsInfo = relatedColors.map(rel => {
        return {
            productId: rel.relatedProductId,
            color: rel.related_product.variants[0]?.color || 'default' // Assuming each related product has at least one variant
        };
    });


    // Get all products for the random selection
    const allProducts = await prisma.product.findMany();

    // Utility function to get random items from an array
    function getRandomItems(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Get 10 random products
    const randomProducts = getRandomItems(allProducts, 10);

    // Calculate average rating
    const totalReviews = product.reviews.length;
    const averageRating = totalReviews > 0 ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews : 0;

    if (req.xhr) {
        return res.json({ ...product, images, sizes, relatedColors, randomProducts, totalReviews, averageRating });
    }

    // console.log(relatedColors);
    return res.render('pages/details', { product: { ...product, images }, sizes, randomProducts, totalReviews, averageRating, relatedColors: relatedColorsInfo });
};



export { getNewArrivals, getMan, getWomen, getProductById };
