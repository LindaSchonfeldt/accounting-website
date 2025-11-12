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
      subject: `Ny beställning från ${templateParams.from_name}`,
      html: `
        <h2>Ny beställning</h2>
        <p><strong>Namn:</strong> ${templateParams.from_name}</p>
        <p><strong>E-post:</strong> ${templateParams.from_email}</p>
        <p><strong>Telefon:</strong> ${templateParams.phone}</p>
        
        <h3>Valda tjänster:</h3>
        <pre>${templateParams.services}</pre>
        
        ${
          templateParams.message
            ? `<h3>Meddelande:</h3><p>${templateParams.message.replace(
                /\n/g,
                '<br>'
              )}</p>`
            : ''
        }
        
        <h3>Prisuppskattning:</h3>
        <p><strong>Summa exkl. moms:</strong> ${
          templateParams.total_excl_vat
        } kr</p>
        <p><strong>Moms (25%):</strong> ${templateParams.vat_amount} kr</p>
        <p><strong>Totalt inkl. moms:</strong> ${
          templateParams.total_incl_vat
        } kr</p>
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
