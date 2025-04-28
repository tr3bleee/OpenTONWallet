import { TonClient, WalletContractV4, internal } from "@ton/ton";
import { mnemonicNew, mnemonicToPrivateKey } from "@ton/crypto";

// Create Client
export const client = new TonClient({
  endpoint: process.env.TON_URL as string,
});