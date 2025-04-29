import copy from "@/app/_assets/Copy.svg";
import settings from "@/app/_assets/Settings.svg";
import { IconButton, Snackbar, Text } from "@telegram-apps/telegram-ui";
import Image from "next/image";
import { useState } from "react";

interface WalletHeaderProps {
  address: string;
}

export const WalletHeader = ({ address }: WalletHeaderProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setSnackbarOpen(true);
  };

  return (
    <div className="flex justify-between px-6 pt-5">
      <div className="items-center flex gap-2 cursor-pointer">
        <IconButton mode="bezeled" size="s" onClick={handleCopy}>
          <Image src={copy} alt="Copy" />
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
      {snackbarOpen && (
        <Snackbar
          onClose={() => setSnackbarOpen(false)}
          duration={4000}
        >
            <div className="flex items-center">
            <Image
              src={copy}
              alt="Copy"
              className="w-5 h-5 mr-1.5"
            />
            <Text className="text-xs text-gray-50">
              Address copied to clipboard
            </Text>
            </div>
        </Snackbar>
      )}
    </div>
  );
};