"use client";

import { Page } from "@/components/Page";
import { ActionButtons } from "@/components/Wallet/ActionButtons";
import { BalanceDisplay } from "@/components/Wallet/BalanceDisplay";
import { WalletHeader } from "@/components/Wallet/WalletHeader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WalletPage() {
  const [walletData, setWalletData] = useState<{
    address: string;
    balance: string;
  } | null>(null);
  const router = useRouter();

  useEffect(() => {
    const data = sessionStorage.getItem("wallet");
    if (!data) {
      router.push("/auth/login");
      return;
    }
    setWalletData(JSON.parse(data));
  }, [router]);

  if (!walletData) {
    return null;
  }

  return (
    <Page back={false}>
      <WalletHeader address={walletData.address} />
      <BalanceDisplay balance={walletData.balance} />
      <ActionButtons />
    </Page>
  );
}
