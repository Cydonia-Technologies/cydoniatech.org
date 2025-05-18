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
const templateParams = {
    to_name : "Alp Efe Karalar",
    from_name : "Fenasi Kerim",
    message : "Hello, this is a test email from TypeScript"
};

// Function to send email
const sendEmail = async () => {
    try {
        const response = await emailjs.send(
            MAIL_SERVICE_ID,
            TEMPLATE_ID,
            templateParams
            );
        // Error handling
        console.log("Email sent succesfully!", response);
    } catch (error) {
        console.error("Failted to send email:", error);
    }
};
