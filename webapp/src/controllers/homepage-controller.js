import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getHomepage = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                images: true,
                category: true,
                variants: true,
                reviews: true,
                related: true,
                order_items: true,
                related_from: true,
            },
            orderBy: {
                importedDate: "desc"
            },
            take: 8
        });

        // console.log(products);
        return res.render('pages/homepage', { products });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
};

export { getHomepage };
