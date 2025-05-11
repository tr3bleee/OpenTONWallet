//use server is required
"use server";

import { cookies } from "next/headers";

import { defaultLocale } from "./config";
import type { Locale } from "./types";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

const getLocale = async () => {
  const savedLocale = cookies().get(COOKIE_NAME)?.value;
  if (savedLocale) return savedLocale;

  // Get system language from Accept-Language header
  const headers = new Headers();
  const acceptLanguage = headers.get('accept-language');
  const systemLocale = acceptLanguage?.split(',')[0]?.split('-')[0] || defaultLocale;

  // Check if system locale is supported
  return systemLocale === 'ru' ? 'ru' : defaultLocale;
};

const setLocale = async (locale?: string) => {
  cookies().set(COOKIE_NAME, locale as Locale || defaultLocale);
};

export { getLocale, setLocale };


