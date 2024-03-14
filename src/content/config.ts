import { defineCollection, z } from 'astro:content'
import { JsonResumeSchema } from 'schemas/JsonResumeSchema';

const jsonResumeCollection = defineCollection({
	schema: JsonResumeSchema
});

export const collections = {
	jsonResume: jsonResumeCollection,
};
