// src/lib/emailTemplates.ts
// Professional branded HTML email templates for AMS Civil Construction

export interface EnquiryData {
  name:    string;
  phone:   string;
  email?:  string | null;
  service: string;
  message?: string | null;
  source:  string; // 'contact-form' | 'quote-popup'
}

/* ─────────────────────────────────────────────────────────────────
   Shared brand colours / tokens
───────────────────────────────────────────────────────────────── */
const C = {
  bg:        '#0B1120',
  card:      '#111827',
  border:    '#1E2D45',
  orange:    '#F97316',
  orangeDk:  '#EA580C',
  white:     '#FFFFFF',
  textMuted: '#94A3B8',
  textLight: '#CBD5E1',
  green:     '#10B981',
};

const now = () => {
  const d = new Date();
  return d.toLocaleString('en-IN', {
    timeZone:    'Asia/Kolkata',
    day:         '2-digit',
    month:       'short',
    year:        'numeric',
    hour:        '2-digit',
    minute:      '2-digit',
    hour12:      true,
  });
};

/* ─────────────────────────────────────────────────────────────────
   ADMIN ALERT EMAIL
   Sent to: ams.constructionwork@gmail.com
───────────────────────────────────────────────────────────────── */
export function adminAlertHtml(data: EnquiryData): string {
  const { name, phone, email, service, message, source } = data;
  const tag   = source === 'quote-popup' ? '🏗️ Free Quote Request' : '📩 Contact Form Enquiry';
  const waUrl = `https://wa.me/91${phone}?text=Hi%20${encodeURIComponent(name)}!%20Thank%20you%20for%20contacting%20AMS%20Civil%20Construction.%20We%20have%20received%20your%20request%20for%20${encodeURIComponent(service)}.%20Our%20team%20will%20call%20you%20shortly.`;

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- HEADER BANNER -->
      <tr>
        <td style="background:linear-gradient(135deg,${C.orange} 0%,${C.orangeDk} 100%);padding:28px 36px;border-radius:10px 10px 0 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0;color:rgba(255,255,255,0.85);font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:600;">AMS Civil Construction</p>
                <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:800;letter-spacing:-0.3px;">New Lead Received!</h1>
              </td>
              <td align="right" valign="middle">
                <div style="background:rgba(255,255,255,0.2);border-radius:50%;width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;font-size:24px;line-height:52px;text-align:center;">🏗️</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- SOURCE BADGE -->
      <tr>
        <td style="background:${C.bg};padding:14px 36px;border-left:4px solid ${C.orange};">
          <p style="margin:0;color:${C.orange};font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${tag}</p>
          <p style="margin:4px 0 0;color:${C.textMuted};font-size:12px;">Received on ${now()} IST</p>
        </td>
      </tr>

      <!-- LEAD DETAILS CARD -->
      <tr>
        <td style="background:${C.card};padding:28px 36px;border:1px solid ${C.border};border-top:none;">

          <p style="margin:0 0 18px;color:${C.textMuted};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Client Details</p>

          <!-- Name -->
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
            <tr>
              <td style="width:130px;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:12px 0;border-bottom:1px solid ${C.border};">👤 Full Name</td>
              <td style="padding:12px 0 12px 16px;border-bottom:1px solid ${C.border};color:${C.white};font-size:15px;font-weight:700;">${name}</td>
            </tr>
            <tr>
              <td style="width:130px;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:12px 0;border-bottom:1px solid ${C.border};">📱 Phone</td>
              <td style="padding:12px 0 12px 16px;border-bottom:1px solid ${C.border};">
                <a href="tel:+91${phone}" style="color:${C.orange};font-size:16px;font-weight:800;text-decoration:none;">+91 ${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr>
              <td style="width:130px;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:12px 0;border-bottom:1px solid ${C.border};">✉️ Email</td>
              <td style="padding:12px 0 12px 16px;border-bottom:1px solid ${C.border};">
                <a href="mailto:${email}" style="color:${C.orange};font-size:14px;text-decoration:none;">${email}</a>
              </td>
            </tr>` : ''}
            <tr>
              <td style="width:130px;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:12px 0;border-bottom:1px solid ${C.border};">🔧 Service</td>
              <td style="padding:12px 0 12px 16px;border-bottom:1px solid ${C.border};">
                <span style="display:inline-block;background:rgba(249,115,22,0.15);color:${C.orange};padding:4px 12px;border-radius:4px;font-size:13px;font-weight:700;border:1px solid rgba(249,115,22,0.3);">${service}</span>
              </td>
            </tr>
            ${message ? `
            <tr>
              <td style="width:130px;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;padding:12px 0;vertical-align:top;">💬 Message</td>
              <td style="padding:12px 0 12px 16px;color:${C.textLight};font-size:14px;line-height:1.6;">${message}</td>
            </tr>` : ''}
          </table>

          <!-- ACTION BUTTONS -->
          <p style="margin:24px 0 14px;color:${C.textMuted};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Quick Actions</p>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-right:10px;">
                <a href="tel:+91${phone}"
                  style="display:inline-block;background:linear-gradient(135deg,${C.orange},${C.orangeDk});color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
                  📞 Call Now
                </a>
              </td>
              <td style="padding-right:10px;">
                <a href="${waUrl}" target="_blank"
                  style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 22px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
                  💬 WhatsApp
                </a>
              </td>
              <td>
                <a href="https://www.amscivilwork.in/admin"
                  style="display:inline-block;background:${C.border};color:${C.textLight};text-decoration:none;padding:12px 22px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.5px;">
                  🗂️ View Admin
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:${C.bg};padding:18px 36px;border-radius:0 0 10px 10px;border:1px solid ${C.border};border-top:none;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <p style="margin:0;color:${C.textMuted};font-size:11px;">AMS Civil Construction · Mumbai, Maharashtra</p>
                <p style="margin:4px 0 0;color:${C.textMuted};font-size:11px;">
                  <a href="https://www.amscivilwork.in" style="color:${C.orange};text-decoration:none;">www.amscivilwork.in</a>
                  &nbsp;·&nbsp;
                  <a href="mailto:ams.constructionwork@gmail.com" style="color:${C.orange};text-decoration:none;">ams.constructionwork@gmail.com</a>
                </p>
              </td>
              <td align="right">
                <p style="margin:0;color:${C.textMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;">Automated Alert</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

/* ─────────────────────────────────────────────────────────────────
   CLIENT THANK-YOU AUTO-REPLY EMAIL
   Sent to: client's email (if provided)
───────────────────────────────────────────────────────────────── */
export function clientAutoReplyHtml(data: EnquiryData): string {
  const { name, phone, service, message } = data;

  return /* html */ `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- TOP ORANGE BAR -->
      <tr><td style="background:linear-gradient(135deg,${C.orange} 0%,${C.orangeDk} 100%);height:6px;border-radius:10px 10px 0 0;"></td></tr>

      <!-- HEADER -->
      <tr>
        <td style="background:${C.bg};padding:36px 36px 20px;text-align:center;">
          <p style="margin:0 0 8px;color:${C.orange};font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;">AMS Civil Construction</p>
          <h1 style="margin:0;color:${C.white};font-size:26px;font-weight:800;line-height:1.2;">Thank You, ${name}! 🙏</h1>
          <p style="margin:12px 0 0;color:${C.textMuted};font-size:14px;line-height:1.6;">
            We have received your enquiry and our team will<br>contact you within <strong style="color:${C.white};">24 hours</strong>.
          </p>
        </td>
      </tr>

      <!-- DIVIDER -->
      <tr><td style="background:${C.bg};padding:0 36px;"><div style="border-top:1px solid ${C.border};"></div></td></tr>

      <!-- YOUR SUBMISSION SUMMARY -->
      <tr>
        <td style="background:${C.card};padding:28px 36px;border-left:1px solid ${C.border};border-right:1px solid ${C.border};">
          <p style="margin:0 0 18px;color:${C.textMuted};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">Your Submission Summary</p>

          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid ${C.border};color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;width:120px;">Service</td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${C.border};">
                <span style="display:inline-block;background:rgba(249,115,22,0.15);color:${C.orange};padding:3px 10px;border-radius:4px;font-size:13px;font-weight:700;border:1px solid rgba(249,115,22,0.3);">${service}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid ${C.border};color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Phone</td>
              <td style="padding:10px 0 10px 16px;border-bottom:1px solid ${C.border};color:${C.textLight};font-size:14px;font-weight:600;">+91 ${phone}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding:10px 0;color:${C.textMuted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px;vertical-align:top;">Message</td>
              <td style="padding:10px 0 10px 16px;color:${C.textMuted};font-size:13px;line-height:1.6;">${message}</td>
            </tr>` : ''}
          </table>
        </td>
      </tr>

      <!-- WHAT HAPPENS NEXT -->
      <tr>
        <td style="background:${C.bg};padding:28px 36px;border:1px solid ${C.border};border-top:none;">
          <p style="margin:0 0 18px;color:${C.textMuted};font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;">What Happens Next?</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td valign="top" style="padding:0 0 14px;">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="background:${C.orange};color:#fff;width:28px;height:28px;border-radius:50%;text-align:center;font-size:13px;font-weight:800;line-height:28px;">1</td>
                  <td style="padding-left:12px;color:${C.textLight};font-size:13px;line-height:1.5;">Our team reviews your enquiry and prepares a tailored response.</td>
                </tr></table>
              </td>
            </tr>
            <tr>
              <td valign="top" style="padding:0 0 14px;">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="background:${C.orange};color:#fff;width:28px;height:28px;border-radius:50%;text-align:center;font-size:13px;font-weight:800;line-height:28px;">2</td>
                  <td style="padding-left:12px;color:${C.textLight};font-size:13px;line-height:1.5;">We call you at <strong style="color:${C.white};">+91 ${phone}</strong> within <strong style="color:${C.white};">24 hours</strong> to discuss your project.</td>
                </tr></table>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <table cellpadding="0" cellspacing="0"><tr>
                  <td style="background:${C.orange};color:#fff;width:28px;height:28px;border-radius:50%;text-align:center;font-size:13px;font-weight:800;line-height:28px;">3</td>
                  <td style="padding-left:12px;color:${C.textLight};font-size:13px;line-height:1.5;">We provide a <strong style="color:${C.white};">detailed FREE quote</strong> with no obligations.</td>
                </tr></table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- CTA — NEED FASTER RESPONSE -->
      <tr>
        <td style="background:rgba(249,115,22,0.07);padding:22px 36px;border:1px solid rgba(249,115,22,0.2);border-top:none;text-align:center;">
          <p style="margin:0 0 14px;color:${C.white};font-size:14px;font-weight:600;">Need an even faster response?</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:0 5px;">
                <a href="https://wa.me/918779391690?text=Hi!%20I%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}%20and%20need%20quick%20assistance."
                  target="_blank"
                  style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.3px;">
                  💬 WhatsApp 1
                </a>
              </td>
              <td align="center" style="padding:0 5px;">
                <a href="https://wa.me/919004298911?text=Hi!%20I%20submitted%20an%20enquiry%20for%20${encodeURIComponent(service)}%20and%20need%20quick%20assistance."
                  target="_blank"
                  style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:13px;font-weight:700;letter-spacing:0.3px;">
                  💬 WhatsApp 2
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- CONTACT INFO STRIP -->
      <tr>
        <td style="background:${C.card};padding:20px 36px;border:1px solid ${C.border};border-top:none;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:0 10px;border-right:1px solid ${C.border};">
                <p style="margin:0;color:${C.textMuted};font-size:9px;text-transform:uppercase;letter-spacing:1px;">Call / WhatsApp</p>
                <p style="margin:4px 0 0;"><a href="tel:+918779391690" style="color:${C.orange};text-decoration:none;font-weight:700;font-size:12px;">+91 87793 91690</a></p>
                <p style="margin:2px 0 0;"><a href="tel:+919004298911" style="color:${C.orange};text-decoration:none;font-weight:700;font-size:12px;">+91 90042 98911</a></p>
              </td>
              <td align="center" style="padding:0 10px;border-right:1px solid ${C.border};">
                <p style="margin:0;color:${C.textMuted};font-size:10px;text-transform:uppercase;letter-spacing:1.5px;">Email</p>
                <p style="margin:4px 0 0;"><a href="mailto:ams.constructionwork@gmail.com" style="color:${C.orange};text-decoration:none;font-size:12px;">ams.constructionwork@gmail.com</a></p>
              </td>
              <td align="center" style="padding:0 10px;">
                <p style="margin:0;color:${C.textMuted};font-size:10px;text-transform:uppercase;letter-spacing:1.5px;">Hours</p>
                <p style="margin:4px 0 0;color:${C.textLight};font-size:12px;">Mon–Sat: 9AM–7PM</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background:${C.bg};padding:18px 36px;border-radius:0 0 10px 10px;border:1px solid ${C.border};border-top:none;text-align:center;">
          <p style="margin:0;color:${C.textMuted};font-size:11px;">
            © ${new Date().getFullYear()} AMS Civil Construction · Mumbai, Maharashtra, India
          </p>
          <p style="margin:6px 0 0;color:${C.textMuted};font-size:11px;">
            <a href="https://www.amscivilwork.in" style="color:${C.orange};text-decoration:none;">www.amscivilwork.in</a>
            &nbsp;·&nbsp;
            <span>20+ Years of Excellence in Construction</span>
          </p>
          <p style="margin:10px 0 0;color:${C.border};font-size:10px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}
