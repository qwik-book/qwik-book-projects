CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"last_name" varchar(256),
	"phone" varchar(256)
);
