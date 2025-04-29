"use client";

import { Button, LargeTitle, Text, Title } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page";
import Login from "./_assets/Login.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import TonLogo from "./_assets/ton_logo.svg";

export default function WelcomePage() {
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== "undefined") {
			const data = localStorage.getItem("wallet");
			if (data) {
				router.push("/wallet");
			}
		}
	}, [router]);

	return (
		<Page back={false}>
			<div className="flex h-screen items-center justify-center pb-28">
				<div className="flex flex-col items-center">
					<LargeTitle weight="1" className="mb-5 text-center">
						Welcome to The Open Wallet
					</LargeTitle>
					<Title weight="2" className="mb-8 text-center px-4 sm:px-0 max-w-md">
						The Open Wallet is a <span className="text-[#0098EA]">free</span>{" "}
						and <span className="text-[#0098EA]">open-source</span> wallet for
						the community.
					</Title>
					<Button
						before={<Image src={Login} alt="Login" />}
						mode="filled"
						size="s"
					>
						<Link href="/auth/login">Start using The Open Wallet</Link>
					</Button>
					<div className="flex items-center gap-2 mt-8">
						<Image src={TonLogo} alt="Ton Logo" width={24} height={24} />
						<Text className="text-sm text-gray-400">
							Built on the{" "}
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
