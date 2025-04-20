// I think I'll need to look into Resend more to be sending emails as I believe currently I can only send to the registered email. Go back to that part of the tutorial to understand more.

import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);
