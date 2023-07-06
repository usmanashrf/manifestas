import {z} from "zod"
//user login form types
export type userFormData = {
    userEmail: string;
    userPassword: string;
  };

export const loginSchema = z.object({
    userEmail: z.string().nonempty({message: "This field is required."}).email({ message: 'Invalid email address' }),
    userPassword: z.string().nonempty({message: "This field is required."}),
  });