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
            // Id 1: red
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

            // Id 2: white
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: `<p class="mb-4">
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
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-zTWr01.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },

            // Id 3:black
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: `<p class="mb-4">
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
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25dfd854-eb11-45db-984d-24721d8c34cc/air-jordan-1-low-shoes-6Q1tFM.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },

            // Id 4: blue
            {
                name: 'Air Jordan 1 Low',
                shortDesc: 'Short description',
                cartDesc: '',
                longDesc: `<p class="mb-4">
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
                price: 120.00,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/i1-7b457df1-d698-455e-ba39-694868991933/air-jordan-1-low-shoes-nGLZR9.png',
                categoryId: 1,
                gender: 0,
                importedDate: new Date('2024-06-26'),
            },

            // Id 5:
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

            // Id 6:
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

            // Id 7:
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

            // Id 8:
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

            // Id 9:
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

            // Id 10: Yellow
            {
                name: 'Jumpman MVP',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: `<p class="mb-4">
                    We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7, and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile, and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.
                    </p>
                    <p class="mb-4">
                    <b class="text-xl font-bold">Benefits</b>
                    </p>
                    <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">The upper is a mix of AJ6 and AJ7 elements: The tongue top and modified overlay reference the AJ6 while the semi-bootie lining homages the AJ7.</li>
                    <li class="mb-2">The embroidered Nike Air heel logo references the AJ6 and the moulded heel detail comes from the AJ8.</li>
                    <li class="mb-2">The outsole design is a nod to the AJ6.</li>
                    <li class="mb-2">Encapsulated Nike Air-Sole unit provides lightweight cushioning.</li>
                    </ul>
                    <p class="mb-4">
                    <b class="text-xl font-bold">Product details</b>
                    </p>
                    <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">Embroidered Jumpman logo</li>
                    <li class="mb-2">Colour Shown: White/Black/Yellow Ochre</li>
                    </ul>`,
                price: 82.83,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d97678bb-9f78-4df6-a45a-7810508450c7/jumpman-mvp-shoes-JV1HCs.png',
                categoryId: 1,
                gender: 1,
                importedDate: new Date('2024-06-17'),
            },

            // Id 11: Green
            {
                name: 'Jumpman MVP',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: `<p class="mb-4">
                    We didn't invent the remix—but considering the material we get to sample, this one's a no-brainer. We took elements from the AJ6, 7, and 8, making them into a completely new shoe that celebrates MJ's first 3-peat championship run. With leather, textile, and nubuck details, these sneakers honour one legacy while encouraging you to cement your own.
                    </p>
                    <p class="mb-4">
                    <b class="text-xl font-bold">Benefits</b>
                    </p>
                    <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">The upper is a mix of AJ6 and AJ7 elements: The tongue top and modified overlay reference the AJ6 while the semi-bootie lining homages the AJ7.</li>
                    <li class="mb-2">The embroidered Nike Air heel logo references the AJ6 and the moulded heel detail comes from the AJ8.</li>
                    <li class="mb-2">The outsole design is a nod to the AJ6.</li>
                    <li class="mb-2">Encapsulated Nike Air-Sole unit provides lightweight cushioning.</li>
                    </ul>
                    <p class="mb-4">
                    <b class="text-xl font-bold">Product details</b>
                    </p>
                    <ul class="list-disc pl-5 mb-4">
                    <li class="mb-2">Embroidered Jumpman logo</li>
                    <li class="mb-2">Colour Shown: White/Black/Yellow Ochre</li>
                    </ul>`,
                price: 82.83,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/432e60d3-724d-4b03-9063-fe712c21704b/jumpman-mvp-shoes-JV1HCs.png',
                categoryId: 1,
                gender: 1,
                importedDate: new Date('2024-06-22'),
            },

            // Id 12:
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
                title: 'Very Fast Delivery',
                reviewerName: 'John Doe',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'I am very satisfied with the delivery speed of TuyenTien shop. The product arrived immediately after the payment was completed. CEO Ngoc Tien is truly commendable.',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Good product, very comfortable',
                reviewerName: 'John Dan',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'The product is good and looks nice. It’s very comfortable to wear. However, I could only admire it from afar, so I’m giving it 4 stars.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Amazing shoes, great for jumping',
                reviewerName: 'Jane Smith',
                reviewDate: new Date('2024-06-11'),
                reviewDesc: 'Wearing these shoes, I feel like I can jump really high. In reality, I just jumped onto my bed, but still, they’re awesome!',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Designed with great care',
                reviewerName: 'Bob Johnson',
                reviewDate: new Date('2024-06-12'),
                reviewDesc: 'I bought these shoes because I heard the CEO designed them with great care. Truly, they are the work of a genius, designed with a deep understanding of what makes great shoes!',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Makes me run fast',
                reviewerName: 'Mike Lee',
                reviewDate: new Date('2024-06-13'),
                reviewDesc: 'Wearing these shoes makes me feel like I can run as fast as Usain Bolt. However, I still lost a race against my neighbor’s dog, so I’m giving it 4 stars.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Great shoes, highly recommend',
                reviewerName: 'Sarah Brown',
                reviewDate: new Date('2024-06-14'),
                reviewDesc: 'I heard the CEO wears these shoes every day. If he can run a company in these, I can definitely manage my household tasks.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Perfect shoes',
                reviewerName: 'Chris Green',
                reviewDate: new Date('2024-06-15'),
                reviewDesc: 'These shoes are perfect, just like a dream come true. They are very comfortable and stylish.',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Good, but not perfect',
                reviewerName: 'Alex White',
                reviewDate: new Date('2024-06-16'),
                reviewDesc: 'The shoes are really good, but I didn’t give it 5 stars because they didn’t live up to all my expectations.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Feels like a model',
                reviewerName: 'Emily Black',
                reviewDate: new Date('2024-06-17'),
                reviewDesc: 'Wearing these shoes makes me feel like a model. The designer truly understands the needs of users.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Great for everything',
                reviewerName: 'Daniel Gray',
                reviewDate: new Date('2024-06-18'),
                reviewDesc: 'I have done housework, shopping, and even run a marathon in these shoes. They’re amazing!',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Great for dancing',
                reviewerName: 'Laura Blue',
                reviewDate: new Date('2024-06-19'),
                reviewDesc: 'After wearing these shoes, I’ve been dancing all day. They are fantastic, but they don’t clean the house on their own, so I’m giving them 4 stars.',
            },
            {
                productId: createdProducts[0].id,
                rating: 5,
                title: 'Perfect combination of comfort and style',
                reviewerName: 'Sam Red',
                reviewDate: new Date('2024-06-20'),
                reviewDesc: 'These shoes are a masterpiece. They perfectly combine comfort and style.',
            },
        ],
    });

}

main()
    .then(() => console.log('Data seeded'))
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
