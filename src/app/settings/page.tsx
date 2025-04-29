'use client'

import { List, Cell, Section } from '@telegram-apps/telegram-ui';
import { IconContainer } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page';
import Image from 'next/image';
import DeleteIcon from "@/app/_assets/delete.svg";
import PasscodeIcon from "@/app/_assets/Passcode.svg";
import NotificationsIcon from "@/app/_assets/Notifications.svg";
import LanguageIcon from "@/app/_assets/Language.svg";
import CurrencyIcon from "@/app/_assets/Currency.svg";

export default function SettingsPage() {
  const handleClearStorage = () => {
    localStorage.clear();
  };

  return (
    <Page back={true}>
    <List
      style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding: '30px',
        width: 500
      }}
    >
      <Section header="Settings">
        <Cell
            before={ 
              <IconContainer>
                <Image src={NotificationsIcon} alt="Notifications" />
              </IconContainer>
            }>
          Notifications
        </Cell>
        <Cell
            before={
              <IconContainer>
                <Image src={PasscodeIcon} alt="Passcode" />
              </IconContainer>
            }>
          Passcode
        </Cell> 
      </Section>
      <Section>
        <Cell
          before={
            <IconContainer>
              <Image src={LanguageIcon} alt="Language" />
            </IconContainer>
          }
        >
          Language
        </Cell>
        <Cell
          before={
            <IconContainer>
              <Image src={CurrencyIcon} alt="Currency" />
            </IconContainer>
          }
        >
          Currency
        </Cell>
      </Section>
      <Section header="Danger Zone">
        <Cell
          before={
            <IconContainer>
              <Image src={DeleteIcon} alt="Delete" />
            </IconContainer>
          }
          onClick={handleClearStorage}
          className='text-red-500'
        >
          Clear Data
        </Cell>
      </Section> 
    </List>
    </Page>
  );
}