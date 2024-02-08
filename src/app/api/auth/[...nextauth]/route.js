import { NextApiRequest, NextApiResponse } from "next";

import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import { authOptions } from "@/lib/auth";
// we need auth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
