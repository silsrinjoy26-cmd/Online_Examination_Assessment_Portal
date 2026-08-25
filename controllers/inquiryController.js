const transporter = require('../utils/emailService');

exports.sendInquiry = async (req, res) => {
  const { targetEmail, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from: process.env.SYSTEM_EMAIL,
      to: targetEmail,
      subject: `Academic Portal Inquiry Dispatch: ${subject}`,
      html: `
        <div style="font-family: Arial; padding: 20px; border: 1px solid #ddd;">
          <h3>New Support Desk Inquiry Transmission</h3>
          <p><strong>Sender Profile:</strong> ${req.user.name} (${req.user.email})</p>
          <hr/>
          <p><strong>Message Data content:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-left: 5px solid #3498DB;">${message}</p>
        </div>`
    });
    res.json({ message: "Inquiry successfully processed and sent to the target recipient email." });
  } catch (err) {
    res.status(500).json({ error: "Communication dispatch failed over outbound SMTP." });
  }
};