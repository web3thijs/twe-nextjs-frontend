const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req: any, res: any) {
    const body = JSON.parse(req.body);
    const message = `
      Name: ${body.firstName} ${body.lastName}\r\n
      Email: ${body.mail}\r\n
      Message: ${body.message}\r\n
    `;

    const dataTo = {
      to: `twelektriciteitswerken@outlook.com`,
      from: body.mail,
      subject: `Form`,
      text: message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    sgMail.send(dataTo);

    const dataFrom = {
      to: body.mail,
      from: 'form@tw-elek.be',
      subject: `Bericht succesvol verzonden.`,
      text: message,
      cc: ``,
      html: message.replace(/\r\n/g, '<br>')
    };

    sgMail.send(dataTo);

    console.log(body)
    res.status(200).json({ status: 'Ok' });
  }