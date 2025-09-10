import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters long'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters long'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    password: z.string().min(6, 'Password must be at least 6 characters lonng'),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
});

export const bookingSchema = z.object({
    propertyId: z.string(),
    checkIn: z.date(),
    checkOut: z.date(),
    guestCount: z.number().min(1).max(20),
}).refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out date must be after check-in date",
    path: ['checkOut'],
})