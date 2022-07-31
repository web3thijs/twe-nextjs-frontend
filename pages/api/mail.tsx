const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: any, res: any) {
    const body = JSON.parse(req.body);
    const message = `
      Name: ${body.firstName} ${body.lastName}\r\n
      Email: ${body.mail}\r\n
      Message: ${body.message}\r\n
    `;

    const dataTo = {
      to: `twelektriciteitswerken@outlook.com`,
      from: 'form@thijstracker.com',
      subject:  `Contact: vraag / offerte ${body.firstName} ${body.lastName}`,
      text: message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataTo);

    const dataFrom = {
      to: body.mail,
      from: 'form@thijstracker.com',
      subject: `TW Elektriciteitswerken - Uw vraag / offerte`,
      text: 'Uw bericht naar TW elektriciteitswerken:\n' + message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    await sgMail.send(dataFrom);

    console.log(body)
    res.status(200).json({ status: 'Ok' });
  }