import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  matter: z.string().min(5),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    console.log("Contact submission received:", data);
    
    try {
      const apiKey = process.env.RESEND_API_KEY || "re_5oSzwMsF_7pUeBs3yBSFvhsGmAmZmeZyX";
      const resend = new Resend(apiKey);
      
      console.log("Attempting to send email via Resend...");
      
      const { data: resendData, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'tiveke2508@bitmah.com',
        subject: `New Inquiry: ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMatter:\n${data.matter}`,
      });

      if (error) {
        console.error("Resend Error Object:", JSON.stringify(error, null, 2));
        throw new Error(`Resend failed: ${error.message}`);
      }

      console.log("Email sent successfully:", resendData);
    } catch (err: any) {
      console.error("Critical Email Error:", err.message || err);
      throw new Error(err.message || "Failed to send email");
    }
    
    return { success: true };
  });
