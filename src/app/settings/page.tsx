'use client'

import { List, Cell, Section } from '@telegram-apps/telegram-ui';
import { IconContainer } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';
import { Page } from '@/components/Page';
import Image from 'next/image';
import DeleteIcon from "@/app/_assets/delete.svg";
import PasscodeIcon from "@/app/_assets/Passcode.svg";
import NotificationsIcon from "@/app/_assets/Notifications.svg";
import LanguageIcon from "@/app/_assets/Language.svg";
import CurrencyIcon from "@/app/_assets/Currency.svg";

export default function SettingsPage() {
  const t = useTranslations('settings');

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
      <Section header={t('title')}>
        <Cell
            before={
              <IconContainer>
                <Image src={NotificationsIcon} alt="Notifications" />
              </IconContainer>
            }>
          {t('notifications')}
        </Cell>
        <Cell
            before={
              <IconContainer>
                <Image src={PasscodeIcon} alt="Passcode" />
              </IconContainer>
            }>
          {t('passcode')}
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
          {t('language')}
        </Cell>
        <Cell
          before={
            <IconContainer>
              <Image src={CurrencyIcon} alt="Currency" />
            </IconContainer>
          }
        >
          {t('currency')}
        </Cell>
      </Section>
      <Section header={t('danger_zone')}>
        <Cell
          before={
            <IconContainer>
              <Image src={DeleteIcon} alt="Delete" />
            </IconContainer>
          }
          onClick={handleClearStorage}
          className='text-red-500'
        >
          {t('clear_data')}
        </Cell>
      </Section>
    </List>
    </Page>
  );
}

