import { getByEmail, verifyPassword } from "@/services/user";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    // Configure one or more authentication providers
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize({ confirmEmail, enterPassword }) {
                const user = getByEmail(confirmEmail)
                // console.log(user)
                if (!user) {
                    throw new Error("User not Found")
                }
                const isValid = await verifyPassword(user.password, enterPassword)
                if (!isValid) {
                    throw new Error("Incorrect Password")
                }

                // const data = {
                //     id: user.id, firstName: user.firstName, lastName: user.lastName
                // };
                
                return {confirmEmail};
            }
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)