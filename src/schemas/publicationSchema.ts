import { z } from "astro/zod";



export const publicationSchema = z.object({
    name: z.string(),

    publisher: z.string(),

    releaseDate: z.string().datetime(),

    url: z.string().url(),

    summary: z.string(),
    // TODO props
    //[k: z.string(),]: unknown
});
