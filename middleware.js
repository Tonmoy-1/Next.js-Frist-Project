import { withKindeAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

export default withKindeAuth({
  loginPath: "/api/auth/login",
  logoutPath: "/api/auth/logout",
  postLoginRedirectUri: "/profile",
});

export const config = {
  matcher: ["/profile"],
};
