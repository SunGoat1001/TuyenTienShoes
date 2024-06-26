import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // TODO: Add seed data here

    // Insert ProductCategory data
    await prisma.category.createMany({
        data: [
            { name: 'Jordan' },
            { name: 'Running' },
            { name: 'Skate' },
            { name: 'Lifestyle' },
            { name: 'Boots' },
            { name: 'Golf' },
            { name: 'Sandals' },
        ],
    });

    // Insert Products data
    const products = await prisma.product.createMany({
        data: [
            {
                name: 'Air Jordan 1',
                shortDesc: 'Comfortable sports shoes',
                cartDesc: 'cart desc',
                longDesc: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll always be on point.",
                price: 129.99,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-lFCSjp.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-01'),
            },
            {
                name: 'Nike React Infinity 3',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 89.99,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96bb6586-fe27-44a5-b4d7-b13f500ea206/react-infinity-3-womens-road-running-shoes-XpNmlR.png',
                categoryId: 2,
                gender: 0,
                importedDate: new Date('2024-06-15'),
            },
            {
                name: 'Nike SB Zoom Pogo Plus Premium',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 89.99,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d45cfbff-7b7f-4e04-bc79-b28011263026/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png',
                categoryId: 3,
                gender: 0,
                importedDate: new Date('2024-06-15'),
            },
        ],
    });

    // Fetch created products to get their IDs
    const createdProducts = await prisma.product.findMany();

    // Insert ProductImages data
    await prisma.productImage.createMany({
        data: [
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe657d71-ee16-43ca-b7de-3e9313b288a1/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ce75f02-661e-4726-a940-bdcaff08caab/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ce75f02-661e-4726-a940-bdcaff08caab/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a21d548e-eb3d-4a1b-a086-fffc780f0e0a/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/398bd28b-18d5-4a79-9433-a3b80a564dc7/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ade1053d-9b68-49dc-9eeb-278b29daa5d7/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef0f4114-40cc-4574-ab23-2fd8107519f2/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7671589-00a1-46bb-acc4-77d6ab7cf4fa/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3876b452-79a4-4837-8d3e-21a5b353653f/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b33a9ace-b033-4648-9a23-08f5122eae05/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d778a1e8-1f40-4a38-abb0-d797b3e6e3c8/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e354538c-b182-4768-909e-8a9c97ffdbb4/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e682abe-d67e-4629-8501-d91c5476bebf/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/492a846d-9a10-45f6-9c84-594d1deb10a6/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c65cb12b-36f9-49b8-aab8-041bf9db924d/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/141f7c51-47a5-4708-b6c8-77eee3a1517f/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[3].id, imageUrl: '' },
        ],
    });


    // Insert ProductVariants data
    await prisma.productVariant.createMany({
        data: [
            {
                productId: 1,
                size: '41',
                color: 'red',
                stockQuantity: 50,
            },
            {
                productId: 1,
                size: '42',
                color: 'red',
                stockQuantity: 20,
            },
            {
                productId: 1,
                size: '43',
                color: 'red',
                stockQuantity: 30,
            },
            {
                productId: 2,
                size: '38',
                color: 'black',
                stockQuantity: 30,
            },
            {
                productId: 3,
                size: '433',
                color: 'white',
                stockQuantity: 30,
            },
        ],
    });

    // // Insert Orders data
    // await prisma.order.createMany({
    //     data: [
    //         {
    //             customerName: 'John Doe',
    //             customer_phone: '123456789',
    //             customer_address: '123 Elm Street',
    //             customer_email: 'john.doe@example.com',
    //             orderDate: new Date(),
    //             total_amount: 259.98,
    //         },
    //     ],
    // });

    // // Insert OrderItems data
    // await prisma.orderItem.createMany({
    //     data: [
    //         { orderId: 1, productId: 1, product_variantId: 1, quantity: 2, price: 129.99 },
    //     ],
    // });

    // Insert Reviews data
    await prisma.review.createMany({
        data: [
            {
                productId: 1,
                rating: 5,
                title: 'Tốc độ giao hàng siêu ánh sáng',
                reviewerName: 'E lờn mớt',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'Tôi đang ở sao hoả và thật sự rất bất ngờ với tốc độ giao hàng thần tốc của shop TuyenTien ở trái đất, hàng tới tiền tay trong 1 "block" sau khi vừa hoàn tất thanh toán. Thật sự rất hợp với phong cách làm việc 5 phút của tôi. Quả thực CEO Ngọc Tiến là một người văn võ song toàn, ngàn năm có 1',
            },
            {
                productId: 1,
                rating: 4,
                title: 'Sản phẩm tốt và chuẩn như sách giáo khoa',
                reviewerName: 'Ngọc Tờ rinh',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'Sản phẩm tốt và đẹp, đeo rất thoải mái. Ngoài ra, CEO Ngọc Tiến rất đẹp trai nữa. Tiếc là chỉ có thể đứng ngắm nhìn từ xa nên đánh giá 4 sao thôi',
            },
        ],
    });

    // Insert Contact data
    await prisma.contact.createMany({
        data: [
            {
                customerName: 'Jane Doe',
                phone: '987654321',
                email: 'jane.doe1123@example.com',
                message: 'I have a question about my order.',
            },
        ],
    });

    // Insert Subscribe data
    await prisma.subscribe.createMany({
        data: [
            { email: 'subscriber@example.com' },
        ],
    });
}

main()
    .then(() => console.log('Data seeded'))
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
