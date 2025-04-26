"use client";

import { Input, Title } from "@telegram-apps/telegram-ui";
import { useState } from "react";
import { Button } from "@telegram-apps/telegram-ui";

export default function AuthPage() {
	const [wordCount, setWordCount] = useState(24);

	const inputs = Array.from({ length: wordCount }, (_, i) => i + 1);

	return (
		<div className="container mx-auto px-6 py-12 max-w-4xl">
			<Title weight="2" className="mb-10 text-center text-3xl text-tg-text">
				Enter your recovery phrase
			</Title>
			<Title
				weight="3"
				className="mb-10 text-center text-lg text-tg-text text-gray-400"
			>
				Please enter your recovery phrase to access your wallet.
			</Title>

			<div className="flex justify-center gap-2 mb-6">
				<Button
					size="m"
					onClick={() => setWordCount(24)}
					className={` ${
						wordCount === 24
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300"
					}`}
				>
					24 words
				</Button>
				<Button
					size="m"
					onClick={() => setWordCount(12)}
					className={` ${
						wordCount === 12
							? "bg-blue-500 text-white"
							: "bg-gray-700 text-gray-300"
					}`}
				>
					12 words
				</Button>
			</div>

			<div className="p-6 rounded-2xl shadow-md">
				<div className="grid grid-cols-2 gap-4">
					{inputs.map((number) => (
						<Input key={number} placeholder={`${number}`} autoComplete="off" />
					))}
				</div>
			</div>
		</div>
	);
}
