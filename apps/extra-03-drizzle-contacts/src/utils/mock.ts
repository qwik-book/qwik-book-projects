import { db } from "./../database/connection";
import { users } from "./../database/schema";


async function createSeedUsers(n: number) {
    for (let i = 1; i <= n; i++) {
        db.transaction(async (tx: any) => {
            const [user] = await tx
                .insert(users)
                .values({
                    fullName: `User ${i}`,
                    lastName: `---${i}`,
                    phone: `${Math.floor(100000000 + Math.random() * 900000000)}`
                })
                .returning();

        });
    }
}

export { createSeedUsers };