const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const {
    host,
    port,
    user,
    pass
} = require('../config/mailer.json');
const transport = nodemailer.createTransport({
    host: host,
    port: port,
    auth: {
        user: user,
        pass: pass
    }
});
transport.use('compile', hbs({
    ViewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail'),
    extName: '.html'
}));

module.export = transport;