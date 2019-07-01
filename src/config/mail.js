export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com',
  },
};

// Serviços de envio de email:
// Amazon SES (recomendado; usado muito na Rocketseat)
// Mailgun
// Sparkpost
// Mandril (recomendado pra quem usa o Mailchimp)
// *Mailtrap (apenas para desenvolvimento)
