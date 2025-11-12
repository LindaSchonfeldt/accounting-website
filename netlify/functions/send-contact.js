/* eslint-env node */
const nodemailer = require('nodemailer')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { templateParams } = JSON.parse(event.body)

    // Create transporter for one.com
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })

    // Email content
    const mailOptions = {
      from: `"Billig Bokföring" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: templateParams.from_email,
      subject: `Nytt kontaktformulär: ${
        templateParams.contact_reason || 'Allmän fråga'
      }`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${templateParams.from_name}</p>
        <p><strong>E-post:</strong> ${templateParams.from_email}</p>
        <p><strong>Telefon:</strong> ${templateParams.phone}</p>
        <p><strong>Orsak:</strong> ${templateParams.contact_reason}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${templateParams.message.replace(/\n/g, '<br>')}</p>
      `
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send email',
        details: error.message
      })
    }
  }
}
