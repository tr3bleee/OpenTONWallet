import copy from "@/app/_assets/Copy.svg";
import settings from "@/app/_assets/Settings.svg";
import { IconButton, Text } from "@telegram-apps/telegram-ui";
import Image from "next/image";

interface WalletHeaderProps {
  address: string;
}

export const WalletHeader = ({ address }: WalletHeaderProps) => (
  <div className="flex justify-between px-6 pt-5">
    <div className="items-center flex gap-2 cursor-pointer">
      <IconButton mode="bezeled" size="s">
        <Image
          src={copy}
          alt="Copy"
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard
                .writeText(address)
                .then(() => alert("Address copied to clipboard"))
                .catch((err) => console.error("Failed to copy: ", err));
            }
          }}
        />
      </IconButton>
      <Text className="text-sm text-gray-50">
        {address.slice(0, 4) + "..." + address.slice(-4)}
      </Text>
    </div>
    <div>
      <IconButton mode="bezeled" size="s">
        <Image src={settings} alt="Settings" />
      </IconButton>
    </div>
  </div>
);