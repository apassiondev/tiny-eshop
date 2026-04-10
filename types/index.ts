import { insertProductSchema } from '@/lib/validator'
import { z } from 'zod'

/*
    `z.infer` ensures that our TS types are always in sync with our validation schema. When we update the schema, the inferred type will automatically reflect the change, reducing the risk of type mismatches in our database.
*/
export type TProduct = z.infer<typeof insertProductSchema> & {
    id: string,
    createdAt: Date,
    rating: string,
    numberReviews: number,
}