import './objects';
import './enums';
import './resolvers/user';

import { dev } from '@/env';
import { builder } from './builder';

export const schema = builder.toSchema();

if (dev) {
  const { writeFileSync } = await import('node:fs');
  const { lexicographicSortSchema, printSchema } = await import('graphql');
  writeFileSync('schema.graphql', `${printSchema(lexicographicSortSchema(schema))}\n`);
}
