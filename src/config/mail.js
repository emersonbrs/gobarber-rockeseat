export default {
  host: 'smtp.mailtrap.io',
  port: '2525',
  secure: false,
  auth: {
    user: '47cdc14a0f876b',
    pass: '4c696f3db3b1bd',
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
