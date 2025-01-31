import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    // Your custom middleware logic here, if needed
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/dashboard"] };