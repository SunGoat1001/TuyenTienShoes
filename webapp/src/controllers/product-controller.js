// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

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
    // const { id } = req.params;

    // const product = await prisma.product.findUnique({
    //     where: { id: parseInt(id) },
    // });
    //
    // if (!product) {
    //     throw new Error('Product not found');
    // }
    //
    // if (req.isAjax()) {
    //     return res.json(product);
    // }

    return res.render('pages/details');
};

export { getNewArrivals, getMan, getWomen, getProductById };
