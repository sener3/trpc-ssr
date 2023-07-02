import db, { User } from "../lib/db";

const users: Omit<User, "id">[] = [
    { name: "User 1" },
    { name: "User 2" },
    { name: "User 3" },
    { name: "User 4" },
    { name: "User 5" },
    { name: "User 6" },
    { name: "User 7" },
    { name: "User 8" },
    { name: "User 9" },
    { name: "User 10" },
];

async function main() {
    try {
        users.forEach(async (user: Omit<User, "id">) => {
            await db.user.create({
                data: user,
            });
        });

        console.log("Seed completed successfully");
    } catch (err) {
        console.log("Seed failed", err);
    } finally {
        await db.$disconnect();
    }
}

main();
