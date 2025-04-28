import { mnemonicToPrivateKey } from "@ton/crypto";
import { TonClient, WalletContractV4 } from "@ton/ton";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("[API] Login request received");
  
  try {
    const body = await request.json();
    console.log("[API] Request body:", { mnemonicsLength: body.mnemonics?.length });

    if (!body.mnemonics) {
      console.error("[API] No mnemonics provided");
      return NextResponse.json({ error: "No mnemonics provided" }, { status: 400 });
    }

    console.log("[API] Converting mnemonics to private key");
    let keyPair = await mnemonicToPrivateKey(body.mnemonics);
    console.log("[API] Private key generated successfully");

    console.log("[API] Creating TON client");
    const client = new TonClient({
      endpoint: process.env.TON_URL || "https://toncenter.com/api/v2/jsonRPC",
    });
    
    console.log("[API] Creating wallet contract");
    const wallet = WalletContractV4.create({ publicKey: keyPair.publicKey, workchain: 0 });
    const address = wallet.address.toString();
    console.log("[API] Wallet address:", address);

    console.log("[API] Fetching wallet balance");
    const balance = await client.getBalance(wallet.address);
    console.log("[API] Wallet balance:", balance.toString());

    return NextResponse.json({ address, balance: balance.toString() });
  } catch (error) {
    console.error("[API] Error during login:", error);
    return NextResponse.json({ error: "Invalid mnemonics" }, { status: 400 });
  }
}
