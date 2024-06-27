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
                longDesc: `<p class="mb-4">
  <b class="text-xl font-bold">Stay on Your Feet.</b>
</p>
<p class="mb-4">
  Stay on your feet with soft and supportive cushioning, built to help keep you on the run. A wider forefoot and higher foam stacks help shield you from recurring attrition, giving you the peace of mind to pound the pavement every day. The springy responsiveness will surprise you too, adding an element of pure speed to one of our most tested shoes to help you go longer, faster, and further than ever.
</p>
<p class="mb-4">
  <b class="text-xl font-bold">Colour Refresh</b>
</p>
<p class="mb-4">
  We updated the Swoosh design and added a couple of extra shielding skins to drive the new colour block, so that you can stay upright in style.
</p>
<p class="mb-4">
  <b class="text-xl font-bold">Smooth Ride</b>
</p>
<p class="mb-4">
  Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride. Shaped like a rocker, the foam provides support for the three phases of a runner's stride. It offers flexibility when your foot rises off the ground, a smooth ride when your foot is moving forwards and cushioning at ground contact.
</p>
<p class="mb-4">
  <b class="text-xl font-bold">Adjusted Tongue</b>
</p>
<p class="mb-4">
  Fully adjustable Flyknit tongue can be pulled out for a style perspective or toggled and tailored to different types of runs. It works with Flywire to create that just-right sensation of comfort and security. Non-knit collar is made from super-soft foam that complements the Flyknit.
</p>
<p class="mb-4">
  <b class="text-xl font-bold">Breathable at All Times</b>
</p>
<p class="mb-4">
  An advanced Flyknit upper provides breathability where you need it most. It's strong and durable, helping to keep your foot secure with every mile. Flywire technology offers extra support and stability through the midfoot.
</p>
<p class="mb-4">
  <b class="text-xl font-bold">More Benefits</b>
</p>
<ul class="list-disc pl-5 mb-4">
  <li class="mb-2">Increased rubber on the outsole helps deliver traction and durability.</li>
  <li class="mb-2">Cushioned collar provides soft comfort.</li>
  <li class="mb-2">A wide shape provides a more stable ride, helping release energy with every step.</li>
  <li class="mb-2">Colour Shown: Oatmeal/Oxygen Purple/Diffused Blue/White</li>
  <li class="mb-2">Style: DZ3016-101</li>
  <li class="mb-2">Country/Region of Origin: Vietnam</li>
</ul>`,
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
                longDesc: `<p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
 The Zoom Pogo delivers a serious boost to any skate session. 
 With a broken-in fit straight out of the box and mixed materials that age to perfection, 
 they bring comfort you have to feel to believe. Oh, and the raised taping increases control for the perfect flick,
  while Zoom Air cushioning delivers the ultimate boardfeel.
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Canvas in the upper breaks in beautifully, while suede accents add durability where you need it.</li>
          <li class="mb-2">Vulcanised construction fuses the sole to the upper for a flexible, broken-in feel.</li>
          <li class="mb-2">Raised taping and reinforced toe area deliver durability and excellent board control.</li>
          <li class="mb-2">Rubber outsole helps keep up during the toughest skate sessions.</li>
           <li class="mb-2">Snappy and responsive, Zoom Air cushioning helps provide a quick-off-the-ground sensation.</li>
          <li class="mb-2">Colour Shown: White/Varsity Red/White/Black</li>
          <li class="mb-2">Style: 553558-161</li>
          <li class="mb-2">Country/Region of Origin: Vietnam, Indonesia</li>
        </ul>
        <p class="mb-4">
          <b class="text-xl font-bold">Tried and True</b>
        </p>
        <p>
          Snappy and responsive, Zoom Air cushioning helps provide a quick-off-the-ground sensation. 
          It uses stretched tensile fibres knit inside a pressurised Nike Air unit, giving athletes everywhere a chance to find their fast.
        </p>`,
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
                longDesc: `<p class="mb-4">
                        <b class="text-xl font-bold">ALWAYS FRESH.</b>
                        </p>
                        <p class="mb-4">
                       Get grounded, stay grounded. The AJ XXXVIII is all about groundwork—we're talking about your running, your cutting
                       , your turn-around jumpers—with low-to-the-court cushioning and a secure upper that helps support every move.
                        It's also designed with sustainability in mind, with at least 20% recycled content by weight
                        . So you can hit 'em with that windscreen-wiper fake and feel good about more than just sinking a bucket for your team.
                        </p>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Benefits</b>
                        </p>
                        <ul class="list-disc pl-5 mb-4">
                        <li class="mb-2">Court mobility</li>
                        <li class="mb-2">Strength in security</li>
                        <li class="mb-2">Heritage details</li>
                         <li class="mb-2">Waste not, want not</li>
                        <li class="mb-2">Colour Shown: White/Varsity Red/White/Black</li>
                        <li class="mb-2">Style: 553558-161</li>
                        <li class="mb-2">Country/Region of Origin: Vietnam, Indonesia</li>
                        </ul>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Tried and True</b>
                        </p>
                        <p>
                       You want quicker cuts, speedier sprints and all-over court control
                       . The low-to-the-court Zoom Air Strobel unit helps you get there.
                        </p>`,
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
                longDesc: `<p class="mb-4">
                        <b class="text-xl font-bold">ALWAYS FRESH.</b>
                        </p>
                        <p class="mb-4">
                       Get grounded, stay grounded. The AJ XXXVIII is all about groundwork—we're talking about your running, your cutting
                       , your turn-around jumpers—with low-to-the-court cushioning and a secure upper that helps support every move.
                        It's also designed with sustainability in mind, with at least 20% recycled content by weight
                        . So you can hit 'em with that windscreen-wiper fake and feel good about more than just sinking a bucket for your team.
                        </p>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Benefits</b>
                        </p>
                        <ul class="list-disc pl-5 mb-4">
                        <li class="mb-2">Court mobility</li>
                        <li class="mb-2">Strength in security</li>
                        <li class="mb-2">Heritage details</li>
                         <li class="mb-2">Waste not, want not</li>
                        <li class="mb-2">Colour Shown: White/Varsity Red/White/Black</li>
                        <li class="mb-2">Style: 553558-161</li>
                        <li class="mb-2">Country/Region of Origin: Vietnam, Indonesia</li>
                        </ul>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Tried and True</b>
                        </p>
                        <p>
                       You want quicker cuts, speedier sprints and all-over court control
                       . The low-to-the-court Zoom Air Strobel unit helps you get there.
                        </p>`,
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
                longDesc: `<p class="mb-4">
                        <b class="text-xl font-bold">ALWAYS FRESH.</b>
                        </p>
                        <p class="mb-4">
                       Get grounded, stay grounded. The AJ XXXVIII is all about groundwork—we're talking about your running, your cutting
                       , your turn-around jumpers—with low-to-the-court cushioning and a secure upper that helps support every move.
                        It's also designed with sustainability in mind, with at least 20% recycled content by weight
                        . So you can hit 'em with that windscreen-wiper fake and feel good about more than just sinking a bucket for your team.
                        </p>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Benefits</b>
                        </p>
                        <ul class="list-disc pl-5 mb-4">
                        <li class="mb-2">Court mobility</li>
                        <li class="mb-2">Strength in security</li>
                        <li class="mb-2">Heritage details</li>
                         <li class="mb-2">Waste not, want not</li>
                        <li class="mb-2">Colour Shown: White/Varsity Red/White/Black</li>
                        <li class="mb-2">Style: 553558-161</li>
                        <li class="mb-2">Country/Region of Origin: Vietnam, Indonesia</li>
                        </ul>
                        <p class="mb-4">
                        <b class="text-xl font-bold">Tried and True</b>
                        </p>
                        <p>
                       You want quicker cuts, speedier sprints and all-over court control
                       . The low-to-the-court Zoom Air Strobel unit helps you get there.
                        </p>`,
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
                longDesc: `<p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
          You never know where self-belief might take you. Inspired by the texture and colours of a passport, 
          and the stamps MJ collected on his world tours, this AJ1 is a fresh reminder to dream big. 
          Keep the included luggage tag as an adornment for your shoes (or your suitcase).
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Nike Air technology absorbs impact for cushioning with every step.</li>
          <li class="mb-2">Mix of materials in the upper prioritises comfort and durability.</li>
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
                longDesc: `<p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
          The Nike Manoa is the perfect match when dressing for winter.Featuring crisp leather on the upper,
           a thick padded collar and rugged tread, it helps you style for the season
           .The webbing pull tab and round laces add details ready for the outdoors.
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Leather in the upper is durable and is designed to help keep out the cold and wet.</li>
          <li class="mb-2">Gusseted tongue is designed to help keep debris out of the boot while letting you
           mix up how you wear them—laced or unlaced.</li>
           <li class="mb-2">Round laces with metal eyelets are easy to grab with gloved hands
           , let you personalise your comfort and add to the rugged, outdoorsy look.</li>
           <li class="mb-2">The foam midsole provides lightweight cushioning that lasts.</li>
           <li class="mb-2">Rugged rubber outsole with large lugs delivers long-lasting durability and traction.</li>
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
                longDesc: `<p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
          Welcome to the links, legend. We drew direct inspiration from the '93 classic released during MJ's first year in retirement and gave it a golf update
          . A memory foam insole and synthetic leather tongue highlight a low-top design worthy of statues
          , swing-throughs and clean ball strikes that ultimately land gently on the green.
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">We upgraded the insole to a memory foam that sits directly under your foot for extra cushioning
          , made to walk 18 holes or more. The full-length foam offers the soft, supportive ride you've come to expect 
          in Jordan Golf.</li>
          <li class="mb-2">The synthetic leather tongue offers comfort against your ankle
          . It's easy to clean after a wade through the rough or tall grass.</li>
           <li class="mb-2">The waterproof layers help keep your feet dry and warm when the elements turn.</li>
           <li class="mb-2">A strong plastic plate comes with 7 removable Champs spikes to give you traction for the course.</li>
           <li class="mb-2">Rugged rubber outsole with large lugs delivers long-lasting durability and traction.</li>
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
                longDesc: `<p class="mb-4">
          <b class="text-xl font-bold">ALWAYS FRESH.</b>
        </p>
        <p class="mb-4">
          The Nike Manoa is the perfect match when dressing for winter.Featuring crisp leather on the upper,
           a thick padded collar and rugged tread, it helps you style for the season
           .The webbing pull tab and round laces add details ready for the outdoors.
        </p>
        <p class="mb-4">
          <b class="text-xl font-bold">Benefits</b>
        </p>
        <ul class="list-disc pl-5 mb-4">
          <li class="mb-2">Leather in the upper is durable and is designed to help keep out the cold and wet.</li>
          <li class="mb-2">Gusseted tongue is designed to help keep debris out of the boot while letting you
           mix up how you wear them—laced or unlaced.</li>
           <li class="mb-2">Round laces with metal eyelets are easy to grab with gloved hands
           , let you personalise your comfort and add to the rugged, outdoorsy look.</li>
           <li class="mb-2">The foam midsole provides lightweight cushioning that lasts.</li>
           <li class="mb-2">Rugged rubber outsole with large lugs delivers long-lasting durability and traction.</li>
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
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e97dde71-d2e5-439f-95a8-da0d76a70f03/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/648e777e-7a3f-4c1e-9abd-f7e5e8abc278/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03eb932f-004a-446e-b8f3-5e35a1ffbbee/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b3878f91-1bf5-472c-8968-698f22d87052/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f0755c31-f4a4-4c23-8a67-641d5bb8c009/air-jordan-9-g-golf-shoes-Fp9GL3.png' },
            { productId: createdProducts[13].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d6fbfc06-16d8-49a4-b12b-a576ae1a3005/air-jordan-9-g-golf-shoes-Fp9GL3.png' },

            //Nike Icon Classic 
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dbf324ca-7619-4463-bc47-bc8d0783ce45/icon-classic-sandals-Jrc3kN.png' },
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b048870-8025-4898-894f-c9a38c30f1b9/icon-classic-sandals-Jrc3kN.png' },
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b048870-8025-4898-894f-c9a38c30f1b9/icon-classic-sandals-Jrc3kN.png' },
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f862bef-3cc2-44c1-b5b9-0ee33a6da58b/icon-classic-sandals-Jrc3kN.png' },
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36c6a94c-21d1-4f1f-b6f7-ab30fab9e54c/icon-classic-sandals-Jrc3kN.png' },
            { productId: createdProducts[14].id, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e942fdd-25c7-4523-b2ec-43068e35bb20/icon-classic-sandals-Jrc3kN.png' },
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
                reviewDesc: 'I am very satisfied with the delivery speed of TuyenTien shop. The product arrived immediately after the payment was completed.',
            },
            {
                productId: createdProducts[0].id,
                rating: 4,
                title: 'Good product, very comfortable',
                reviewerName: 'John Dan',
                reviewDate: new Date('2024-06-10'),
                reviewDesc: 'The product is good and looks nice. It’s very comfortable to wear.',
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
                rating: 4,
                title: 'Great for dancing',
                reviewerName: 'Laura Blue',
                reviewDate: new Date('2024-06-19'),
                reviewDesc: 'After wearing these shoes, I’ve been dancing all day. They are fantastic!',
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
