function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

    const firstName = e.parameter.firstName || "";
    const lastName = e.parameter.lastName || "";
    const email = e.parameter.email || "";
    const message = e.parameter.message || "";

    if (!firstName || !lastName || !email || !message) {
      return jsonResponse({ ok: false, error: "Missing required fields" });
    }

    const subject = "Thanks for Visiting My Portfolio!";

    const body = `
Hi ${firstName},

Thanks for visiting my portfolio and reaching out!

I received your message:
"${message}"

I appreciate your interest and I'll get back to you as soon as possible.

Best regards,
Prince Christiane Tolentino
`;

    MailApp.sendEmail({
      to: email,
      subject: subject,
      body: body
    });

    sheet.appendRow([
      firstName,
      lastName,
      email,
      message,
      "EMAIL_SENT",
      new Date()
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: String(error)
    });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
