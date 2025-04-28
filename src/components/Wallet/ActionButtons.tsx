import receive from "@/app/_assets/Receive.svg";
import send from "@/app/_assets/Send.svg";
import { Button, Text } from "@telegram-apps/telegram-ui";
import Image from "next/image";

export const ActionButtons = () => (
  <div className="flex justify-center mt-12">
    <Button mode="bezeled" size="l" className="w-32 h-[70px]">
      <div className="flex flex-col items-center gap-2">
        <Image src={send} alt="Send" />
        <Text className="text-white">Send</Text>
      </div>
    </Button>
    <Button mode="bezeled" size="l" className="w-32 h-[70px] ml-4">
      <div className="flex flex-col items-center gap-2">
        <Image src={receive} alt="Receive" />
        <Text className="text-white">Receive</Text>
      </div>
    </Button>
  </div>
);