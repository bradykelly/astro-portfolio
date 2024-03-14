import { z } from "astro/zod";
import { workSchema } from "./workSchema";
import {locationSchema} from "./locationSchema";
import {certificateSchema} from "./certificateSchema";
import {publicationSchema} from "./publicationSchema";
import {skillSchema} from "./skillSchema";
import {projectSchema} from "./projectSchema";


// TODO Pull all descriptions from json schema
export const JsonResumeSchema = z.object({

    name: z.string(),
    label: z.string(),
    image: z.string().optional(),
    email: z.string().email(),
    phone: z.string(),
    URL: z.string().url(),
    summary: z.string(),
    location: locationSchema,
    // profiles?: Profile[],
    work: workSchema,
    // volunteer?: Volunteer[],
    // awards?: Award[],
    certificates: z.array(certificateSchema),
    publications: z.array(publicationSchema),     
    skills: z.array(skillSchema),
    //languages: Language[],
    // interests?: Interest[],
    // references?: Reference[],
    projects: z.array(projectSchema)
    // [k: z.string()]: unknown
});
