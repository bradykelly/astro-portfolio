import { z } from "astro/zod"


export const certificateSchema= z.object({

	name: z.string(),

	date: z.string().datetime(),


	url: z.string(),

	issuer: z.string(),

    // TODO Additional properties
    //[k: z.string(),]: unknown    
})