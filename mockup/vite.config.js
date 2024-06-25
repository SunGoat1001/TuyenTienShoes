import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VITE_BASE_PATH || '/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                contact: 'contact.html',
                details: 'details.html',
                man: 'man.html',
                newarrivals: 'newarrivals.html',
                payment: 'payment.html',
                sigin: 'sigin.html',
                thankyou: 'thankyou.html',
                women: 'women.html',
            }
        }
    }
});