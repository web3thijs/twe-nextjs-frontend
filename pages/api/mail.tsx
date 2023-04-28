const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
    const body = JSON.parse(req.body);
    const message = `
      Naam: ${body.first_name} ${body.last_name}\r\n
      Bedrijf: ${body.company || '/'}\r\n
      Email: ${body.email}\r\n
      GSM: ${body.phone_number || '/'}\r\n
      Bericht:\r\n ${body.message}\r\n
    `;

    const dataTo = {
      to: process.env.CONTACT_MAIL,
      from: 'no-reply@tw-elek.be',
      subject:  `Contact: ${body.first_name} ${body.last_name}`,
      text: message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataTo);

    const dataFrom = {
      to: body.email,
      from: 'no-reply@tw-elek.be',
      subject: `TW Elek BV - Uw vraag / offerte`,
      text: 'Uw bericht naar TW elektriciteitswerken:\n' + message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataFrom);

    console.log(body)
    res.status(200).json({ status: 'Ok' });
  }