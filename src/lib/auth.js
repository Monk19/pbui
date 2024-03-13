import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE) || 1200,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // const user = "";
        // const token = "";
        console.log("incoming credentials--->", credentials, req);
        const { userName, password } = credentials;
        try {
          const response = await axios.post("http://localhost:3402/api/login", {
            userName: userName,
            password: password,
          });
          //   console.log("data---->", response);
          console.log("response.ok", response.data);
          const { accessToken, uId } = response.data;
          if (!accessToken) {
            throw response;
          }
          const user = response.data;
          return user;

          // .then((res) => {
          //   localStorage.setItem("tkn", res.data.token);
          //   console.log("session token--->", res.data.token);
          //   user = res.data.userName;
          //   token = res.data.token;
          //   auth.changeAuth();
          //   router.push("/Dashboard");
          // });
        } catch (err) {
          console.log(err);
        }
      },
    }),
  ],
  //   session: {},
  callbacks: {
    async jwt({ token, user }) {
      console.log("check jwt callback-->", token, user);
      return { ...token, ...user };
      //   return true;
    },
    async session({ session, token, user }) {
      // Modify the session object
      console.log("session object--->form session callback-->", session);
      session.user = token; // Example: Set user ID in the session
      return session;
    },
  },
};
