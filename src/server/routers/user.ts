import { procedure, router } from "../trpc";
import db, { User } from "@/lib/db";

const userRouter = router({
    getAll: procedure.query(async () => {
        const users: User[] = await db.user.findMany({});

        return { users };
    }),
});

export default userRouter;
