import express from 'express';
import { getHomepage } from './controllers/homepage-controller.js';
import { getNewArrivals, getMan, getWomen, getProductById } from './controllers/product-controller.js';
import { getContactForm, createContact, contactSuccess } from './controllers/contact-controller.js';
import { getThankYou } from './controllers/general-controller.js';
import { getPayment } from './controllers/payment-controller.js';
import { contactValidator } from './validators/index.js';

const router = express.Router();

/** Homepage **/
router.get('/', getHomepage);

/** Products **/
router.get('/newarrivals', getNewArrivals);
router.get('/man', getMan);
router.get('/women', getWomen);
router.get('/products/:id', getProductById);
router.get('/payment', getPayment);
router.get('/thankyou', getThankYou);

/** Contact **/
router.get('/contact', getContactForm);
router.post('/contact', contactValidator, createContact);
router.get('/contact-success', contactSuccess);

export default router;
