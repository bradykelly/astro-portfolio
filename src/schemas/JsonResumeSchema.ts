import { z } from "astro/zod";
import { workSchema } from "./workSchema";


export const JsonResumeSchema = z.object({

    name: z.string(),

    label: z.string(),

    image: z.string(),

    email: z.string().email(),

    phone: z.string(),

    URL: z.string().url(),

    summary: z.string(),

    //location: Location,

    //TODO Use type Location
    location: z.string(),

    // profiles?: Profile[],
    work: workSchema,

    // volunteer?: Volunteer[],
    // awards?: Award[],
    
    certificates?: Certificate[],
    
    // publications?: Publication[],
    // skills?: Skill[],
    // languages?: Language[],
    // interests?: Interest[],
    // references?: Reference[],
    // projects?: Project[],
    // [k: z.string()]: unknown
});
