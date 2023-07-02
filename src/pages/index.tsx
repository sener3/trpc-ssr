import { NextPage } from "next";
import { appRouter } from "@/server/routers/_app";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { User } from "@/generated/prisma";

interface HomeProps {
    users: User[];
}

const Home: NextPage<HomeProps> = ({ users }) => {
    return (
        <div>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

export async function getServerSideProps() {
    const helpers = createServerSideHelpers({
        router: appRouter,
        ctx: {},
    });

    const res = await helpers.user.getAll.fetch();

    return {
        props: {
            users: res.users,
        },
    };
}
