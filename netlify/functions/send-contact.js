/* eslint-env node */

export async function handler(event) {
  console.log('Function called:', event.httpMethod)

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const data = JSON.parse(event.body)
    console.log('Received data:', data)

    // Check env vars
    console.log('Env vars present:', {
      serviceId: !!process.env.EMAILJS_SERVICE_ID,
      templateId: !!process.env.EMAILJS_CONTACT_TEMPLATE_ID,
      publicKey: !!process.env.EMAILJS_PUBLIC_KEY
    })

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_CONTACT_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: data.templateParams
    }

    console.log('Sending to EmailJS:', payload)

    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0' // Trick EmailJS into thinking it's a browser
        },
        body: JSON.stringify(payload)
      }
    )

    const responseText = await response.text()
    console.log('EmailJS response:', response.status, responseText)

    if (!response.ok) {
      console.error('EmailJS error:', responseText)
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: 'Failed to send email',
          details: responseText
        })
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        details: error.message
      })
    }
  }
}
