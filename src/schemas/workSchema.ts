import { z } from "astro/zod";
import { locationSchema } from './locationSchema';


export const workSchema = z.object({

    name: z.string(),

    location: locationSchema,

    description: z.string(),

    position: z.string(),

    URL: z.string(),

    startDate: z.string().datetime({ message: "Invalid datetime string! Must be UTC." }),

    endDate: z.string().datetime({ message: "Invalid datetime string! Must be UTC." }),

    summary: z.string(),

    highlights: z.array(z.string())
})
