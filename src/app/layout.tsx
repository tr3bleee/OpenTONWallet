import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";

import { Root } from "@/components/Root/Root";
import { I18nProvider } from "@/core/i18n/provider";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";


export const metadata: Metadata = {
	title: "The Open Wallet",
	description:
		"The Open Wallet is a free and open-source wallet for the community. It is a community-driven project that aims to provide a secure and user-friendly wallet experience.",
};

export default async function RootLayout({ children }: PropsWithChildren) {
	const locale = await getLocale();

	return (
		<html lang={locale}>
			<body>
				<I18nProvider>
					<Root>{children}</Root>
				</I18nProvider>
			</body>
		</html>
	);
}
