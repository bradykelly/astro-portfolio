import { ZodString, z } from 'astro/zod';

export class Iso8601Date extends ZodString {
    // TODO Validation voodoo: ISO8601-1:2019
    // Schema: Pattern '^([1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]|[1-2][0-9]{3}-[0-1][0-9]|[1-2][0-9]{3})$'
}

