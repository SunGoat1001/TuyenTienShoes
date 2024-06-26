import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getNewArrivals = async (req, res) => {
    // TODO: Fetch products from the database
    return res.render('pages/search');
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
            images: true, // Assuming 'images' is correctly defined in your schema.prisma
        },
    });

    if (!product) {
        throw new Error('Product not found');
    }

    // Fetch associated images from 'productimage' table
    const imageObjects = await prisma.productImage.findMany({
        where: { productId: parseInt(id, 10) },
    });

    // Extract image URLs from image objects
    const images = imageObjects.map((image) => image.imageUrl); // 'imageUrl' should match the property in your productImage model

    // Combine product and image data
    const productWithImages = {
        ...product,
        images: images, // Replace the existing images property with the URLs
    };

    // Extract unique colors and sizes from product data
    const colors = [...new Set(productWithImages.images.map(image => image.color))];
    const sizes = product.variants.map(variant => variant.size);

    if (req.xhr) {
        return res.json(productWithImages);
    }

    return res.render('pages/details', { product: productWithImages, colors, sizes });
};

export { getNewArrivals, getMan, getWomen, getProductById };
