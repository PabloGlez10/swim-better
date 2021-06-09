'use strict'

const nodemailer = require("nodemailer")

class Mailer {
  constructor() {
    this.testAccount = null
    this.transporter = null
  }

  async initialize() {
    this.testAccount = await nodemailer.createTestAccount()

    this.transporter = nodemailer.createTransport({
      host: this.testAccount.smtp.host,
      port: this.testAccount.smtp.port,
      secure: this.testAccount.smtp.secure,
      auth: {
        user: this.testAccount.user,
        pass: this.testAccount.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  async send(from, to, subject, body, asHTMLBody = true) {
    if (!this.testAccount || !this.transporter) {
      await this.initialize()
    }

    let emailItem = {
      from: '"' + from.name + '" <' + from.email + '>',
      to: to,
      subject: subject
    }

    if(asHTMLBody){
      emailItem.html = body
    }

    if(!asHTMLBody){
      emailItem.text = body
    }

    let transporterResponse = await this.transporter.sendMail(emailItem);

    console.log("Message sent: %s", transporterResponse.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(transporterResponse));

    return transporterResponse
  }
}

let Mailer = new Mailer()

module.exports = new Mailer()
