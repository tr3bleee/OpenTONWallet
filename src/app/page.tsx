"use client";

import { Button, LargeTitle, Text, Title } from "@telegram-apps/telegram-ui";
import { useTranslations } from 'next-intl';
import { Page } from "@/components/Page";
import Login from "./_assets/Login.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TonLogo from "./_assets/ton_logo.svg";

export default function WelcomePage() {
	const router = useRouter();
	const t = useTranslations('welcome');

	useEffect(() => {
		const data = localStorage.getItem("wallet");
		if (data) {
			router.push("/wallet");
		}
	}, [router]);

	return (
		<Page back={false}>
			<div className="flex h-screen items-center justify-center pb-28">
				<div className="flex flex-col items-center">
					<LargeTitle weight="1" className="mb-5 text-center">
						{t('title')}
					</LargeTitle>
					<Title weight="2" className="mb-8 text-center px-4 sm:px-0 max-w-md">
						{t('description')}
					</Title>
					<Button
						before={<Image src={Login} alt="Login" />}
						mode="filled"
						size="s"
					>
						<Link href="/auth/login">{t('start_button')}</Link>
					</Button>
					<div className="flex items-center gap-2 mt-8">
						<Image src={TonLogo} alt="Ton Logo" width={24} height={24} />
						<Text className="text-sm text-gray-400">
							{t('built_on')}{" "}
							<a
								href="https://ton.org/"
								className="text-[#0098EA] hover:underline"
							>
								TON Blockchain
							</a>
						</Text>
					</div>
				</div>
			</div>
		</Page>
	);
}
