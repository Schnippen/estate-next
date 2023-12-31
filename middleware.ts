import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

//const isLoggedIn: boolean = false

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
        },
      },
    }
  );
  /* let cookie = request.headers;
  console.log(cookie); */
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (session) {
    return NextResponse.redirect(new URL("/user", request.url));
  }
  //error handling
  /*   console.log("Session:", session);
  console.log("ERROR:", error?.message); */
  /*   if (error) {
    response.cookies.delete("");
    return ["error", response];
  } */
  return response;
}

export const config = {
  matcher: ["/user/createuser", "/user/loginuser"],
};
