import { z } from "astro/zod";



export const projectSchema = z.object({
    name: z.string(),

    description: z.string(),

    highlights: z.array(z.string()),

    keywords: z.array(z.string()),

    startDate: z.string().datetime(),

    endDate: z.string().datetime(),

    url: z.string(),

    roles: z.array(z.string()),

    entity: z.string(),

    type: z.string(),
    // TODO Props
    //[k: z.string()]: unknown
});
