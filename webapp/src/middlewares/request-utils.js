import config from '../configs/app.js';
import app from '../app.js';

/**
 * Middleware to set utility function that uses to check if request is an AJAX request
 */
const isAjax = (req, res, next) => {
    req.isAjax = () => {
        return (
            req.xhr ||
            req.headers['x-requested-with'] === 'XMLHttpRequest' ||
            req.headers['accept'].includes('application/json')
        );
    };
    next();
};

/**
 * Middleware to set CSRF token in response locals to be used in views
 */
const setCSRFToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

/**
 * Middleware to set request metadata in response locals to be used in views
 */
const setupLocalVariables = (req, res, next) => {
    app.locals.siteName = config.siteName; // Set site name

    res.locals.requestQuery = req.query;
    res.locals.requestPath = req.path;
    res.locals.pageTitle = 'Page Name';
    res.locals.isHomePage = req.path === '/';
    res.locals.isPaymentPage = req.path === '/payment';
    res.locals.isThankYouPage = req.path === '/thankyou';

    next();
};

export default {
    isAjax,
    setCSRFToken,
    setupLocalVariables,
};
