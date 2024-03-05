import { z } from "astro/zod";



export const skillSchema = z.object({
    name: z.string(),

    level: z.string(),

    keywords: z.array(z.string()),
    // TODO props
    //[k: z.string()]: unknown
});
