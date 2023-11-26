export {  default } from 'next-auth/middleware'

export const config = {
    matcher: [
      "/dashboard"
      /*
       * Match all request paths except for the ones starting with:
       * - login
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      // '/((?!login|/|_next/static|_next/image|favicon.ico).*)',
    ],
  }