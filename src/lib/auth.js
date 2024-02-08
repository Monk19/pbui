import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

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
      async authorize(credentials) {
        // const user = "";
        // const token = "";
        try {
          const response = await axios.post("http://localhost:3402/api/login", {
            userName: loginDetails.userName,
            password: loginDetails.password,
          });
          if (!response.ok) {
            throw response;
          }
          const { user, token } = response.json();
          if (!token) {
            throw response;
          }
          return { ...response.json(), token: data.token };

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
    jwt: async ({ token, user, trigger, session }) => {
      console.log(token, user, trigger, session);
      return true;
    },
  },
};
