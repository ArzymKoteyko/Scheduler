import React from 'react';
import { createRoot } from 'react-dom/client';

import "../../css/index.css"

// Функция createSmartappDebugger используется в development среде. В production среде необходимо использовать createAssistant.
/*
import { createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';


const initialize = (getState, getRecoveryState) => {
    if (process.env.NODE_ENV === 'development') {
        return createSmartappDebugger({
            // Токен из Кабинета разработчика
            token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZjAwMTAzMGFkMTNmMGE0NmRmMjRhNTgxZDk5MzBmMGZkZmZmN2U3NmM0NTkzODBlYzk0Yzc3MDQyYWU1ZjZmMDFlYmMiLCJhdWQiOiJWUFMiLCJleHAiOjE2NzY3MDU4ODYsImlhdCI6MTY3NjYxOTQ3NiwiaXNzIjoiS0VZTUFTVEVSIiwidHlwZSI6IkJlYXJlciIsImp0aSI6IjAyOGYzNWQ0LTFlODAtNDA0Mi05MTczLTk1NjlkNmRiYmIxNSIsInNpZCI6ImVmZWRhMjJjLTFjMjYtNDY3Ni04MWZkLTE4NTk5MGYzNTc4YyJ9.AyS0vE9oIsrlQuIVJeg3ZqNcBsMwAekSKbEyX_d5zYxXFa2ABHXn4kX_xoLGLJntN-6IMoEGK8Soyd6Pmn2Nbu1Ghr-2bJY5E4deo-qXJ-k8Y0vkMVBSOqcCTGLvJzpAekDp9_k2RkNJW3sPdQgl0iS7k5RjA0IAuyYHacWpfvXgL--oADCiuY4Q8is2Ah-l3w9UlJl39AQNUWIFPwav8UOt2DdTc98SanKdHegPrwbcwsfO23C_c2GSSxpXVFkOlbG0dSGNdd451QFC5LrCO7pySsSSfy7OiIMvc0R_HWNgI5c7IPmVpf3fxFAgIdpL5aBovDtjNZDBSusINAayMm8Sv58tXgxonKQDsfnX7IN9CJdiNzAEE6IVdD6XOKikyHZoGgNvYDmEl5Kh4WYD-wSVddGTy3HBdRLE38JUeZpV-a4teRv1nO182tYSQwicbwCjAQHo0gA91vAOgxTsSNDUmGaJNrAjJGG9bfD6JGBaJTfuKG21cxRhzLBgwOPpCIeCahxtJhzc_O5Y8H2RdxaFlQkds3jnHNivBf-EJtha2zyYABUMm5hxxnU8fA_8A2mYfH9l3_U85HqQshy0TfXCN0ATxvy9KZZtcTYjJKujtTHZeRVo-KXEjwwT30Ad7gDdnvXP3-hREXl3kcdcRRhZtHDhGoibpAM82Teg8oc",
            // Пример фразы для запуска смартапа
            initPhrase: 'Хочу попкорн',
            // Текущее состояние смартапа
            getState,
            // Состояние смартапа, с которым он будет восстановлен при следующем запуске
            getRecoveryState,
            // Необязательные параметры панели, имитирующей панель на реальном устройстве
            nativePanel: {
                // Стартовый текст в поле ввода пользовательского запроса
                defaultText: 'Покажи что-нибудь',
                // Позволяет включить вид панели, максимально приближенный к панели на реальном устройстве
                screenshotMode: false,
                // Атрибут `tabindex` поля ввода пользовательского запроса
                tabIndex: -1,
            },
        });
    }

	  // Только для среды production
    return createAssistant({ getState, getRecoveryState });
}

const assistant = initialize(() => state, () => recoveryState);
assistant.on('data', (command) => {
    // Подписка на команды ассистента, в т.ч. команда инициализации смартапа.
    // Ниже представлен пример обработки голосовых команд "ниже"/"выше"
    if (command.navigation) {
        switch(command.navigation.command) {
            case 'UP':
                window.scrollTo(0, 0);
                break;
            case 'DOWN':
                window.scrollTo(0, 1000);
                break;
        }
    }
});
*/



import { YourComponentName } from './your_component_name';

import { App } from './app';

const root = createRoot(document.getElementById('root'))


root.render(
    <App/>
)