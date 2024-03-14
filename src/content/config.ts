import { defineCollection, z } from 'astro:content'
import { jsonResume } from '../schemas/jsonResume';

const jsonResumeCv = defineCollection({
	schema: jsonResume
});

export const collections = {
	cvmain: jsonResumeCv,
};
