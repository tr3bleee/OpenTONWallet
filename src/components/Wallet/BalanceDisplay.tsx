import { LargeTitle, Text } from "@telegram-apps/telegram-ui";

interface BalanceDisplayProps {
	balance: string;
}

export const BalanceDisplay = ({ balance }: BalanceDisplayProps) => {
	const formatBalance = (balance: string) => {
		const nanoTON = BigInt(balance);
		const TON = Number(nanoTON) / 1e9;
		return TON.toFixed(4);
	};

	return (
		<div className="text-center mt-12">
			<LargeTitle weight="1" className="text-5xl">
				{formatBalance(balance)} TON
			</LargeTitle>
			<div className="mt-2">
				<Text className="text-lg text-gray-400">Your balance</Text>
			</div>
		</div>
	);
};
