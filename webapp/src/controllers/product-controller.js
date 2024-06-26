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
            images: true, // Assuming 'images' is correctly defined in your schema.prisma
            reviews: true,
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

    // Lấy tất cả các sản phẩm
    const allProducts = await prisma.product.findMany();

    // Hàm tiện ích để lấy các phần tử ngẫu nhiên từ mảng
    function getRandomItems(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // Lấy 4 sản phẩm ngẫu nhiên
    const randomProducts = getRandomItems(allProducts, 10);

    // Tính toán trung bình tổng điểm và số lượng đánh giá
    const totalReviews = product.reviews.length;
    const averageRating = totalReviews > 0 ? product.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews : 0;

    if (req.xhr) {
        return res.json(productWithImages);
    }

    return res.render('pages/details', { product: productWithImages, colors, sizes, randomProducts, totalReviews, averageRating  });
};

export { getNewArrivals, getMan, getWomen, getProductById };
