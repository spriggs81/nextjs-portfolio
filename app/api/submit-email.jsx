// pages/api/submit-email.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    // In a real application, you would validate the email again and save it to a database
    // For now, we'll just log it to the console.
    console.log(`Received email for storage: ${email}`);

    res.status(200).json({ message: 'Email submitted successfully.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}