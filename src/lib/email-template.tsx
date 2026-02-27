interface EmailTemplateProps {
  name: string;
  email: string;
  attendance: "yes" | "no";
  guests?: string;
  dietary?: string;
  message?: string;
}

export function createEmailTemplate({
  name,
  email,
  attendance,
  guests,
  dietary,
  message,
}: EmailTemplateProps): string {
  const attendanceText = attendance === "yes" ? "¡Sí, asistiré!" : "No podré asistir";
  const attendanceColor = attendance === "yes" ? "#c9a962" : "#94a3b8";

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmación RSVP - Boda María José & Pablo José</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #faf8f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%); padding: 48px 32px; text-align: center;">
              <h1 style="margin: 0 0 16px 0; font-family: 'Georgia', serif; font-size: 36px; font-weight: 300; color: #ffffff; letter-spacing: 1px;">
                María José & Pablo José
              </h1>
              <div style="height: 2px; width: 80px; background-color: #c9a962; margin: 0 auto 16px;"></div>
              <p style="margin: 0; font-size: 18px; color: #e8eef4; letter-spacing: 2px;">
                01 DE AGOSTO 2026
              </p>
              <p style="margin: 8px 0 0 0; font-size: 16px; color: #e8eef4;">
                Santa Marta, Colombia
              </p>
            </td>
          </tr>

          <!-- Confirmation Badge -->
          <tr>
            <td style="padding: 40px 32px 32px; text-align: center;">
              <div style="display: inline-block; background-color: ${attendanceColor}; color: #ffffff; padding: 12px 32px; border-radius: 24px; font-size: 16px; font-weight: 600; margin-bottom: 24px;">
                ${attendanceText}
              </div>
              <h2 style="margin: 0 0 16px 0; font-family: 'Georgia', serif; font-size: 28px; color: #1e3a5f;">
                Confirmación Recibida
              </h2>
              <p style="margin: 0; font-size: 16px; color: #64748b; line-height: 1.6;">
                ${attendance === "yes"
                  ? "¡Nos emociona saber que estarás con nosotros en nuestro día especial!"
                  : "Lamentamos que no puedas acompañarnos. ¡Te extrañaremos!"}
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding: 0 32px 32px;">
              <table role="presentation" style="width: 100%; background-color: #faf8f5; border-radius: 12px; padding: 24px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                      Nombre
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #1e3a5f; font-weight: 600;">
                      ${name}
                    </p>

                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                      Email
                    </p>
                    <p style="margin: 0 0 20px 0; font-size: 16px; color: #1e3a5f; font-weight: 600;">
                      ${email}
                    </p>

                    ${attendance === "yes" && guests ? `
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                        Número de Invitados
                      </p>
                      <p style="margin: 0 0 20px 0; font-size: 16px; color: #1e3a5f; font-weight: 600;">
                        ${guests} ${parseInt(guests) === 1 ? 'persona' : 'personas'}
                      </p>
                    ` : ''}

                    ${attendance === "yes" && dietary ? `
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                        Restricciones Alimentarias
                      </p>
                      <p style="margin: 0 0 20px 0; font-size: 16px; color: #1e3a5f; font-weight: 600;">
                        ${dietary}
                      </p>
                    ` : ''}

                    ${message ? `
                      <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                        Mensaje
                      </p>
                      <p style="margin: 0; font-size: 16px; color: #1e3a5f; font-style: italic; line-height: 1.6;">
                        "${message}"
                      </p>
                    ` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${attendance === "yes" ? `
            <!-- Event Details -->
            <tr>
              <td style="padding: 0 32px 32px;">
                <div style="background: linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%); border-radius: 12px; padding: 24px; color: #ffffff;">
                  <h3 style="margin: 0 0 16px 0; font-family: 'Georgia', serif; font-size: 20px; color: #c9a962;">
                    Recordatorio de la Ceremonia
                  </h3>
                  <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6;">
                    <strong>Ceremonia:</strong> Catedral Basílica de Santa Marta<br>
                    <strong>Hora:</strong> 6:30 PM<br>
                    <strong>Dirección:</strong> Plaza de la catedral, Cra 4, Comuna 2
                  </p>
                  <p style="margin: 16px 0 0 0; font-size: 14px; line-height: 1.6;">
                    <strong>Recepción:</strong> Club Santa Marta<br>
                    <strong>Hora:</strong> 8:30 PM<br>
                    <strong>Dirección:</strong> Cra 1C #22-110
                  </p>
                </div>
              </td>
            </tr>
          ` : ''}

          <!-- Footer -->
          <tr>
            <td style="padding: 32px; text-align: center; border-top: 1px solid #e8eef4;">
              <p style="margin: 0 0 8px 0; font-size: 14px; color: #64748b;">
                Con amor,
              </p>
              <p style="margin: 0; font-family: 'Georgia', serif; font-size: 18px; color: #c9a962;">
                María José & Pablo José
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
