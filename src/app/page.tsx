"use client";

import { Button, LargeTitle, Title } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page";
import Login from "./_assets/Login.svg";
import Image from "next/image";

export default function Home() {
	return (
		<Page back={false}>
			<div className="flex h-screen items-center justify-center pb-28">
				<div className="flex flex-col items-center">
					<LargeTitle weight="1" className="mb-5">
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
						Start using the wallet
					</Button>
				</div>
			</div>
		</Page>
	);
}
