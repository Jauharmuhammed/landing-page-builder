ALTER TABLE "project" RENAME COLUMN "json" TO "content";--> statement-breakpoint
ALTER TABLE "project" ADD COLUMN "is_published" boolean DEFAULT false;