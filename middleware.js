import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};

// import NextAuth from "next-auth";

// export const config = {
//     matcher: ['/'],
// };


// const myMiddleware = (req, res, next) => {
//     // Your middleware logic here
//     console.log('Middleware executed');

// };

// export default myMiddleware;