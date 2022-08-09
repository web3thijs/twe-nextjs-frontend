const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
    const body = JSON.parse(req.body);
    const message = `
      Naam: ${body.firstName} ${body.lastName}\r\n
      Email: ${body.mail}\r\n
      Bericht:\r\n ${body.message}\r\n
    `;

    const dataTo = {
      to: `info@tw-elek.be`,
      from: 'no-reply@tw-elek.be',
      subject:  `Contact: ${body.firstName} ${body.lastName}`,
      text: message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataTo);

    const dataFrom = {
      to: body.mail,
      from: 'no-reply@tw-elek.be',
      subject: `TW Elektriciteitswerken - Uw vraag / offerte`,
      text: 'Uw bericht naar TW elektriciteitswerken:\n' + message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataFrom);

    console.log(body)
    res.status(200).json({ status: 'Ok' });
  }