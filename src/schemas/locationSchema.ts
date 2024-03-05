import { z } from 'astro/zod';


export const locationSchema = z.object({
    address: z.string(),

    postalCode: z.string(),

    city: z.string(),

    // TODO Validation voodoo: ISO-3166-1 ALPHA-2, e.g. US, AU, IN
    countryCode: z.string(),

    region: z.string(),
    // TODO Additional properties
    //[k: z.string()]: unknown
});
