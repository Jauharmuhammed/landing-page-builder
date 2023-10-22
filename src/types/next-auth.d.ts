import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth" {
	interface Session {
		user: User & {
			id: UserId;
			username?: string | null;
			name? : string | null;
            image? : string | null;
		};
	}
}