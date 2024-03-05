import { z } from 'zod';

const workSchema = z.object({ 
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
})