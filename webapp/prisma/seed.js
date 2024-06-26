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
                name: 'Air Jordan 1 Low',
                shortDesc: 'Comfortable sports shoes',
                cartDesc: 'red',
                longDesc: `
                <p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
          Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's
          familiar yet always fresh. With an iconic design that pairs perfectly with any 'fit, these kicks ensure you'll
          always be on point.
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Encapsulated Air-Sole unit provides lightweight cushioning.</li>
          <li class="mb-2">Genuine leather in the upper offers durability and a premium look.</li>
          <li class="mb-2">Solid rubber outsole enhances traction on a variety of surfaces.</li>
          <li class="mb-2">Colour Shown: White/Varsity Red/White/Black</li>
          <li class="mb-2">Style: 553558-161</li>
          <li class="mb-2">Country/Region of Origin: Vietnam, Indonesia</li>
        </ul>
        <p class="mb-4">
          <b class="text-xl font-bold">Tried and True</b>
        </p>
        <p>
          A timeless rubber cupsole teams up with a plush sockliner and encapsulated Nike Air cushioning for all-day
          comfort. A rubber outsole supplies durable traction on a variety of surfaces.
        </p>`,
                price: 129.99,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-lFCSjp.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-01'),
            },
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: '',
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-zTWr01.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: '',
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25dfd854-eb11-45db-984d-24721d8c34cc/air-jordan-1-low-shoes-6Q1tFM.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: '',
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7b457df1-d698-455e-ba39-694868991933/air-jordan-1-low-shoes-nGLZR9.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },
            {
                name: 'Nike React Infinity 3',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "",
                price: 389.99,
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
                price: 85.49,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d45cfbff-7b7f-4e04-bc79-b28011263026/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png',
                categoryId: 3,
                gender: 0,
                importedDate: new Date('2024-06-11'),
            },
            {
                name: 'Air Jordan XXXVIII Low PF',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: '',
                categoryId: 1,
                gender: 1,
                importedDate: new Date('2024-06-14'),
            },
            {
                name: 'Nike Go Flyase',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: '',
                categoryId: 4,
                gender: 1,
                importedDate: new Date('2024-06-05'),
            },
            {
                name: 'InfinityRN4',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 31.88,
                mainImageUrl: '',
                categoryId: 2,
                gender: 1,
                importedDate: new Date('2024-06-25'),
            },
            {
                name: 'Jumpman MVP',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 82.83,
                mainImageUrl: '',
                categoryId: 1,
                gender: 1,
                importedDate: new Date('2024-06-25'),
            },
            {
                name: 'Nike Go Flyase',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: '',
                categoryId: 4,
                gender: 1,
                importedDate: new Date('2024-06-05'),
            },
        ],
    });

    // Fetch created products to get their IDs
    const createdProducts = await prisma.product.findMany();

    // Insert ProductImages data
    await prisma.productImage.createMany({
        data: [
            // Images for Air Jordan 1 Low - Red
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe657d71-ee16-43ca-b7de-3e9313b288a1/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7ce75f02-661e-4726-a940-bdcaff08caab/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a21d548e-eb3d-4a1b-a086-fffc780f0e0a/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/398bd28b-18d5-4a79-9433-a3b80a564dc7/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ade1053d-9b68-49dc-9eeb-278b29daa5d7/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7642a8e3-f829-40b4-b884-a4eb63a283e3/air-jordan-1-low-shoes-lFCSjp.png' },
            { productId: createdProducts[0].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/da34aa91-c3b3-4b50-95c9-5ed225f20421/air-jordan-1-low-shoes-lFCSjp.png' },

            // Images for Air Jordan 1 Low - White
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29754f85-3581-4ddb-8b27-ba736bafaf75/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/371b345c-29c6-433f-b04a-fe2c37248a2d/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/83f0f4d2-216c-449d-a51c-7b0d71dddb03/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5f8ec2d6-b375-4fa3-bfc8-7b02c1d19537/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2000aa0b-13ae-4ae2-9ce6-add019369103/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cae1f741-ad92-4d24-a73b-37ef64122104/air-jordan-1-low-shoes-zTWr01.png' },
            { productId: createdProducts[1].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/575dfd59-4007-4e4a-8775-e9772aed722b/air-jordan-1-low-shoes-zTWr01.png' },

            // Images for Air Jordan 1 Low - Black
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25dfd854-eb11-45db-984d-24721d8c34cc/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e2e50942-270b-4cfd-8924-fd88a48e904b/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/433cf71e-b111-4e41-85ee-83642272f52e/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c1612776-b003-4080-a981-f7c62677c354/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04a5521d-4363-4413-8227-779ae92f7509/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/aed8767c-f353-4984-b1d2-a614bab8b466/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5eb76969-ee0d-42ce-9d4c-fab693a1de7e/air-jordan-1-low-shoes-6Q1tFM.png' },
            { productId: createdProducts[2].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/70fc5f76-1917-490f-8e55-89d5da6bb4c9/air-jordan-1-low-shoes-6Q1tFM.png' },

            // Images for Air Jordan 1 Low - Blue
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7b457df1-d698-455e-ba39-694868991933/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-3fbb9dd9-35ab-4ff8-af86-a3b7dbefaad0/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-51da801c-c2ed-4101-a0e5-7f04165b0878/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-58788170-077c-4108-a08c-ed091f466482/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-54af5812-75ac-487f-9eef-4208cc6810cb/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-71c37d0f-3899-42a4-af1d-cf43e59b409c/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-91769a12-f38f-474c-9584-8b3613318e82/air-jordan-1-low-shoes-nGLZR9.png' },
            { productId: createdProducts[3].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-4e1b10ab-0d43-4086-89e1-fd111f51deb1/air-jordan-1-low-shoes-nGLZR9.png' },

            // Nike React Infinity 3
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96bb6586-fe27-44a5-b4d7-b13f500ea206/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef0f4114-40cc-4574-ab23-2fd8107519f2/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7671589-00a1-46bb-acc4-77d6ab7cf4fa/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3876b452-79a4-4837-8d3e-21a5b353653f/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b33a9ace-b033-4648-9a23-08f5122eae05/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },
            { productId: createdProducts[4].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d778a1e8-1f40-4a38-abb0-d797b3e6e3c8/react-infinity-3-womens-road-running-shoes-XpNmlR.png' },

            // Nike SB Zoom Pogo Plus Premium
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d45cfbff-7b7f-4e04-bc79-b28011263026/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e354538c-b182-4768-909e-8a9c97ffdbb4/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e682abe-d67e-4629-8501-d91c5476bebf/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/492a846d-9a10-45f6-9c84-594d1deb10a6/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c65cb12b-36f9-49b8-aab8-041bf9db924d/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
            { productId: createdProducts[5].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/141f7c51-47a5-4708-b6c8-77eee3a1517f/sb-zoom-pogo-plus-premium-skate-shoes-RvSjsf.png' },
        ],
    });

    // Insert ProductVariants data
    await prisma.productVariant.createMany({
        data: [
            // Sizes for Air Jordan 1 Low - red
            { productId: createdProducts[0].id, size: 37.5, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 38, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 39, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 40, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 41, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 42, color: 'red', stockQuantity: 10 },
            { productId: createdProducts[0].id, size: 43, color: 'red', stockQuantity: 10 },

            // Sizes for Air Jordan 1 Low - White
            { productId: createdProducts[1].id, size: 37.5, color: 'white', stockQuantity: 10 },
            { productId: createdProducts[1].id, size: 38, color: 'white', stockQuantity: 10 },
            { productId: createdProducts[1].id, size: 39, color: 'white', stockQuantity: 10 },
            { productId: createdProducts[1].id, size: 40, color: 'white', stockQuantity: 10 },
            { productId: createdProducts[1].id, size: 38.5, color: 'white', stockQuantity: 10 },
            { productId: createdProducts[1].id, size: 40.5, color: 'white', stockQuantity: 10 },

            // Sizes for Air Jordan 1 Low - Black
            { productId: createdProducts[2].id, size: 37.5, color: 'black', stockQuantity: 10 },
            { productId: createdProducts[2].id, size: 38, color: 'black', stockQuantity: 10 },
            { productId: createdProducts[2].id, size: 39, color: 'black', stockQuantity: 10 },
            { productId: createdProducts[2].id, size: 40, color: 'black', stockQuantity: 10 },
            { productId: createdProducts[2].id, size: 42.5, color: 'black', stockQuantity: 10 },

            // Sizes for Air Jordan 1 Low - Blue
            { productId: createdProducts[3].id, size: 37.5, color: 'blue', stockQuantity: 10 },
            { productId: createdProducts[3].id, size: 38, color: 'blue', stockQuantity: 10 },
            { productId: createdProducts[3].id, size: 39, color: 'blue', stockQuantity: 10 },
            {
                productId: createdProducts[4].id,
                size: 38,
                color: 'black',
                stockQuantity: 30,
            },
            {
                productId: createdProducts[5].id,
                size: 43,
                color: 'white',
                stockQuantity: 30,
            },
        ],
    });

    // Insert RelatedProducts data
    await prisma.relatedProduct.createMany({
        data: [
            // Related products for Air Jordan 1 Low - Red
            { productId: createdProducts[0].id, relatedProductId: createdProducts[1].id },
            { productId: createdProducts[0].id, relatedProductId: createdProducts[2].id },
            { productId: createdProducts[0].id, relatedProductId: createdProducts[3].id },

            // Related products for Air Jordan 1 Low - White
            { productId: createdProducts[1].id, relatedProductId: createdProducts[0].id },
            { productId: createdProducts[1].id, relatedProductId: createdProducts[2].id },
            { productId: createdProducts[1].id, relatedProductId: createdProducts[3].id },

            // Related products for Air Jordan 1 Low - Black
            { productId: createdProducts[2].id, relatedProductId: createdProducts[0].id },
            { productId: createdProducts[2].id, relatedProductId: createdProducts[1].id },
            { productId: createdProducts[2].id, relatedProductId: createdProducts[3].id },

            // Related products for Air Jordan 1 Low - Blue
            { productId: createdProducts[3].id, relatedProductId: createdProducts[0].id },
            { productId: createdProducts[3].id, relatedProductId: createdProducts[1].id },
            { productId: createdProducts[3].id, relatedProductId: createdProducts[2].id },
        ]
    });

    // Insert Reviews data
    await prisma.review.createMany({
        data: [
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Tốc độ giao hàng siêu ánh sáng',
                reviewerName: 'E lờn mớt',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'Tôi đang ở sao hoả và thật sự rất bất ngờ với tốc độ giao hàng thần tốc của shop TuyenTien ở trái đất, hàng tới tiền tay trong 1 "block" sau khi vừa hoàn tất thanh toán. Thật sự rất hợp với phong cách làm việc 5 phút của tôi. Quả thực CEO Ngọc Tiến là một người văn võ song toàn, ngàn năm có 1',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Sản phẩm tốt và chuẩn như sách giáo khoa',
                reviewerName: 'Ngọc Tờ rinh',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'Sản phẩm tốt và đẹp, đeo rất thoải mái. Ngoài ra, CEO Ngọc Tiến rất đẹp trai nữa. Tiếc là chỉ có thể đứng ngắm nhìn từ xa nên đánh giá 4 sao thôi',
            },
            {
                productId: createdProducts[1].id,
                rating: 5,
                title: 'Giày thần kỳ, nhảy cao không tưởng',
                reviewerName: 'Sú Bờ Mờ Lầy',
                reviewDate: new Date('2024-06-11'),
                reviewDesc: 'Mang giày này vào tôi như có thể nhảy cao như Michael Jordan. Thực tế thì tôi chỉ nhảy lên giường ngủ thôi, nhưng vẫn rất tuyệt vời!',
            },
            {
                productId: createdProducts[2].id,
                rating: 5,
                title: 'CEO Ngọc Tiến là thần thánh!',
                reviewerName: 'Vô Số Lô',
                reviewDate: new Date('2024-06-12'),
                reviewDesc: 'Tôi đã mua giày này chỉ vì nghe nói CEO Ngọc Tiến đã thiết kế nó từ tâm hồn. Quả thật đúng là hàng của thiên tài, giống như sản phẩm từ một người hiểu rõ tâm hồn giày hơn bất kỳ ai!',
            },
            {
                productId: createdProducts[1].id,
                rating: 4,
                title: 'Giày này khiến tôi chạy nhanh như gió',
                reviewerName: 'Bốn Bánh Phanh',
                reviewDate: new Date('2024-06-13'),
                reviewDesc: 'Mang giày này vào tôi cảm thấy mình như Usain Bolt. Nhưng vì vẫn chưa thắng được trong cuộc thi với con chó nhà hàng xóm nên đánh giá 4 sao thôi.',
            },
            {
                productId: createdProducts[2].id,
                rating: 5,
                title: 'CEO Tiến là người dẫn đường',
                reviewerName: 'Bàn Chân Thần Tốc',
                reviewDate: new Date('2024-06-14'),
                reviewDesc: 'Nghe nói CEO Ngọc Tiến cũng tự tay mang giày này mỗi ngày. Nếu ông ấy có thể điều hành cả công ty trong khi đi giày này, chắc chắn tôi cũng có thể điều hành cái tủ lạnh nhà tôi.',
            },
            {
                productId: createdProducts[3].id,
                rating: 5,
                title: 'Giày tuyệt vời, không cần thêm gì',
                reviewerName: 'Cái Chân Vàng',
                reviewDate: new Date('2024-06-15'),
                reviewDesc: 'Giày này thật tuyệt vời, giống như là đôi giày bước ra từ giấc mơ của tôi. Và tôi nghĩ CEO Ngọc Tiến cũng vậy, chắc chắn là một giấc mơ trở thành hiện thực.',
            },
            {
                productId: createdProducts[3].id,
                rating: 4,
                title: 'Ngọc Tiến là ông tiên của giày',
                reviewerName: 'Chân Chạy Nhanh',
                reviewDate: new Date('2024-06-16'),
                reviewDesc: 'CEO Ngọc Tiến đúng là ông tiên của giày. Tuy nhiên, tôi chỉ đánh giá 4 sao vì vẫn chưa thấy ông ấy xuất hiện từ chiếc giày khi tôi gọi tên ông ấy.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Tôi đã trở thành người mẫu giày',
                reviewerName: 'Thần Chân Dài',
                reviewDate: new Date('2024-06-17'),
                reviewDesc: 'Mang giày này tôi cảm thấy mình như người mẫu. CEO Ngọc Tiến chắc hẳn đã biết rõ tâm lý người dùng, ông ấy đúng là thiên tài.',
            },
            {
                productId: createdProducts[1].id,
                rating: 5,
                title: 'Giày này giúp tôi làm mọi việc',
                reviewerName: 'Siêu Nhân Chân',
                reviewDate: new Date('2024-06-18'),
                reviewDesc: 'Tôi đã làm việc nhà, đi chợ, và còn chạy maraton với giày này. CEO Ngọc Tiến chắc hẳn đã gửi gắm siêu năng lực vào đây!',
            },
            {
                productId: createdProducts[1].id,
                rating: 4,
                title: 'Giày này khiến tôi trở thành vũ công',
                reviewerName: 'Vũ Công Chân Ngắn',
                reviewDate: new Date('2024-06-19'),
                reviewDesc: 'Sau khi mang giày này, tôi đã nhảy múa suốt ngày. CEO Ngọc Tiến thật sự là một thiên tài, nhưng tiếc là giày không tự động dọn nhà nên đánh giá 4 sao.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Ngọc Tiến là thiên tài giày',
                reviewerName: 'Chân Nhỏ',
                reviewDate: new Date('2024-06-20'),
                reviewDesc: 'Giày này là tuyệt tác. CEO Ngọc Tiến đúng là thiên tài, ông ấy đã biết cách kết hợp giữa sự thoải mái và phong cách một cách hoàn hảo.',
            },
        ],
    });

}

main()
    .then(() => console.log('Data seeded'))
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
