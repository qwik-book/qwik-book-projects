import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    lastName: varchar('last_name', { length: 256 }),
    phone: varchar('phone', { length: 256 }),
});