import emailjs from "@emailjs/browser";
import * as dotenv from "dotenv";

// Initiate Environment Variables
dotenv.config();
const MAIL_JS_KEY = process.env.MAIL_JS_KEY!;
const MAIL_SERVICE_ID = process.env.MAIL_SERVICE_ID!;
const TEMPLATE_ID = "template_pwxbfqm";

// Initialize Mail
emailjs.init(MAIL_JS_KEY);

// Example Email Data
/*
 * const templateParams = {
    to_name : "Alp Efe Karalar",
    from_name : "Fenasi Kerim",
    message : "Hello, this is a test email from TypeScript"
};

interface EmailProps {
    to_name?: string;
    from_name?: string;
    from_email?: string;
    title?: string;
    message?: string;
}
*/

// Function to send email
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("email-form") as HTMLFormElement;

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent Default form submission behcaior
        try {
            const response = await emailjs.send(
                MAIL_SERVICE_ID,
                TEMPLATE_ID,
                form
                );
            // Error handling
            console.log("Email sent succesfully!", response);
        } catch (error) {
            console.error("Failted to send email:", error);
        }
    });
});
