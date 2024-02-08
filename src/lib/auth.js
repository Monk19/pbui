import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE) || 1209600,
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
          console.log("data---->", response);
          if (!response.ok) {
            throw response;
          }
          const { ui, token } = response.json();

          if (!token) {
            throw response;
          }
          return { ...response.json(), token: token };

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
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      console.log("check jwt callback-->", token, uId, trigger, session);
      return true;
    },
    async session(session, token) {
      // Modify the session object
      session.user.id = token.id; // Example: Set user ID in the session
      return session;
    },
  },
};
