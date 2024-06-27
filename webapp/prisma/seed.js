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
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6aa977d-3ad0-4f95-970f-2cae9a69dea5/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png',
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
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c76e2119-acb7-4944-9085-d4f5ae2bda4a/go-flyease-easy-on-off-shoes-3svRCL.png',
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
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c935bd3-ff96-449d-b28c-2e9c0bd0564e/infinityrn-4-road-running-shoes-9fcndR.png',
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
                name: 'Air Jordan 1 Mid SE',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ac668959-a9ca-4711-b40c-3997706a7db2/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png',
                categoryId: 4,
                gender: 1,
                importedDate: new Date('2024-06-05'),
            },

               // Id 13:  
            {
                name: 'Nike Manoa Leather',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99e98f0c-b4f2-47eb-a312-e63cf800f9db/manoa-leather-boot-bXlwh8.png',
                categoryId: 5,
                gender: 1,
                importedDate: new Date('2024-06-05'),
            },


                // Id 14:  Air Jordan 9 G
            {
                name: 'Air Jordan 9 G',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e97dde71-d2e5-439f-95a8-da0d76a70f03/air-jordan-9-g-golf-shoes-Fp9GL3.png',
                categoryId: 6,
                gender: 1,
                importedDate: new Date('2024-06-05'),
            },

             // Id 15:  
            {
                name: 'Nike Icon Classic',
                shortDesc: 'short desc',
                cartDesc: 'cart desc',
                longDesc: "Still 1 of our most tested shoes, the Nike React Infinity 3 has soft and supportive cushioning. Its soft, stable feel with a smooth ride will carry you through routes, long and short. A breathable upper is made to feel contained, yet flexible. We even added more cushioning to the collar for a soft feel. Keep running, we've got you.",
                price: 21.09,
                mainImageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbf324ca-7619-4463-bc47-bc8d0783ce45/icon-classic-sandals-Jrc3kN.png',
                categoryId: 7,
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
        
            // Air Jordan XXXVIII Low PF
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6aa977d-3ad0-4f95-970f-2cae9a69dea5/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f9e68907-f299-4fb5-b23f-b6dbcdb9ab18/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e139052a-5ee9-492f-84e8-4bb9dd6c92ca/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3d5bcb9-36a9-4a17-893a-6ac47ce99cbc/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/05d7d05a-af40-455c-9a32-576a7c94f375/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
            { productId: createdProducts[6].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2a17d6e6-adc2-4e9f-a4f2-7fc4900a4837/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn.png' },
        
            // Nike Go FlyEase
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c76e2119-acb7-4944-9085-d4f5ae2bda4a/go-flyease-easy-on-off-shoes-3svRCL.png' },
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e38ad395-18da-4d12-8b76-9336e12f7ab6/go-flyease-easy-on-off-shoes-3svRCL.png' },
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75d6eab9-270c-485d-8edc-851408f5f86a/go-flyease-easy-on-off-shoes-3svRCL.png' },
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bbe6f776-12d9-43b3-a8d0-338a95180a0c/go-flyease-easy-on-off-shoes-3svRCL.png' },
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0af510b3-6532-46c9-a315-95405e03ae52/go-flyease-easy-on-off-shoes-3svRCL.png' },
            { productId: createdProducts[7].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4face735-6dae-4db4-8456-99936374addf/go-flyease-easy-on-off-shoes-3svRCL.png' },
       
            // Nike InfinityRN 4
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c935bd3-ff96-449d-b28c-2e9c0bd0564e/infinityrn-4-road-running-shoes-9fcndR.png' },
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c935bd3-ff96-449d-b28c-2e9c0bd0564e/infinityrn-4-road-running-shoes-9fcndR.png' },
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5cc2d6a3-4d02-4020-9ec4-eebb6c217348/infinityrn-4-road-running-shoes-9fcndR.png' },
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/389ff347-7b98-4440-9ebc-f4285ac2f2e9/infinityrn-4-road-running-shoes-9fcndR.png' },
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7eaa8289-a14d-4465-a2b2-2eb87763df61/infinityrn-4-road-running-shoes-9fcndR.png' },
            { productId: createdProducts[8].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fcb59c30-eec2-43db-bea6-ad84a4e8f57c/infinityrn-4-road-running-shoes-9fcndR.png' },
            
            // Nike Jumpman MVP Yellow
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d97678bb-9f78-4df6-a45a-7810508450c7/jumpman-mvp-shoes-JV1HCs.png' },
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c75232e0-333f-4c99-acfe-1e3d5eccface/jumpman-mvp-shoes-JV1HCs.png' }, 
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/17eb36b4-16b7-4c46-b5d2-e4d8d816adde/jumpman-mvp-shoes-JV1HCs.png' },
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9e885989-b42e-45a5-b899-fd5e6303d9e8/jumpman-mvp-shoes-JV1HCs.png' },
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/585af017-7418-48f6-beac-52558962d2ba/jumpman-mvp-shoes-JV1HCs.png' },
            { productId: createdProducts[9].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2439052d-33d0-4093-8a55-6fdd0e86da42/jumpman-mvp-shoes-JV1HCs.png' },    
            
           // Nike Jumpman MVP Green
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/432e60d3-724d-4b03-9063-fe712c21704b/jumpman-mvp-shoes-JV1HCs.png' },
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1ddf63a5-887a-4d6e-b24a-8ba23e63308d/jumpman-mvp-shoes-JV1HCs.png' },
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/60a149ca-6b41-49e7-8bd2-32d9b7db13d8/jumpman-mvp-shoes-JV1HCs.png' },
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/21733f8b-0668-4b72-975c-daed423f059b/jumpman-mvp-shoes-JV1HCs.png' },
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d93f310d-e891-43b0-97c6-7227e99bf8d1/jumpman-mvp-shoes-JV1HCs.png' },
           { productId: createdProducts[10].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/123be174-680f-4af4-93e3-60d54efea681/jumpman-mvp-shoes-JV1HCs.png' }, 
  
    

                //Air Jordan 1 Mid SE 
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ac668959-a9ca-4711-b40c-3997706a7db2/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/abe9b6b1-2f2e-4d1b-99e5-465b8020b7fa/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0637f6bf-34e8-477f-9711-ee4ab7e2a2ad/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5390494e-3281-498a-ab4a-7369c1e90515/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f99612e1-0dcb-474d-980d-7676a1eaf4ec/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
            { productId: createdProducts[11].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/39b6360a-f4d8-4e40-8612-4fc17816d088/air-jordan-1-mid-se-older-shoes-ZMGf1Z.png' },
        
                  
           //Nike Manoa Leather   
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99e98f0c-b4f2-47eb-a312-e63cf800f9db/manoa-leather-boot-bXlwh8.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0acdf6b5-25c5-46e3-bd79-3abc7212cbca/manoa-leather-boot-bXlwh8.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e06c9c6-c31c-4a47-aba3-0bb413c540b5/manoa-leather-boot-bXlwh8.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2ed9909-de5f-4215-8615-44e125684982/manoa-leather-boot-bXlwh8.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0ba41250-8d50-4810-aa65-0024f0fc8b52/manoa-leather-boot-bXlwh8.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0ba41250-8d50-4810-aa65-0024f0fc8b52/manoa-leather-boot-bXlwh8.png' }, 
        

           //Air Jordan 9 G  
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e97dde71-d2e5-439f-95a8-da0d76a70f03/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/648e777e-7a3f-4c1e-9abd-f7e5e8abc278/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03eb932f-004a-446e-b8f3-5e35a1ffbbee/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3878f91-1bf5-472c-8968-698f22d87052/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0755c31-f4a4-4c23-8a67-641d5bb8c009/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6fbfc06-16d8-49a4-b12b-a576ae1a3005/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
        
               //Nike Icon Classic 
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbf324ca-7619-4463-bc47-bc8d0783ce45/icon-classic-sandals-Jrc3kN.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b048870-8025-4898-894f-c9a38c30f1b9/icon-classic-sandals-Jrc3kN.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b048870-8025-4898-894f-c9a38c30f1b9/icon-classic-sandals-Jrc3kN.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f862bef-3cc2-44c1-b5b9-0ee33a6da58b/icon-classic-sandals-Jrc3kN.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36c6a94c-21d1-4f1f-b6f7-ab30fab9e54c/icon-classic-sandals-Jrc3kN.png' },
           { productId: createdProducts[12].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e942fdd-25c7-4523-b2ec-43068e35bb20/icon-classic-sandals-Jrc3kN.png' },
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
