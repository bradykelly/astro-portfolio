import { z } from "astro/zod";


export const educationSchema = {

    institution: z.string(),

    url: z.string(),

    area: z.string(),

    studyType: z.string(),

    startDate: z.string().datetime(),

    endDate: z.string().datetime(),

    score: z.string(),

    courses: z.array(z.string())

    // TODO Additional properties
    //[k: z.string(),]: unknown
};
