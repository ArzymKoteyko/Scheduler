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
            token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZjAwMTAzMGFkMTNmMGE0NmRmMjRhNTgxZDk5MzBmMGZkZmZmN2U3NmM0NTkzODBlYzk0Yzc3MDQyYWU1ZjZmMDFlYmMiLCJhdWQiOiJWUFMiLCJleHAiOjE2NzczMzIzNzMsImlhdCI6MTY3NzI0NTk2MywiaXNzIjoiS0VZTUFTVEVSIiwidHlwZSI6IkJlYXJlciIsImp0aSI6ImQzZTMxM2YyLTUxZDUtNGYyMi04N2FlLTcyMzBhOWE3YjhiYiIsInNpZCI6Ijc0YmZhNDNiLWM1YjEtNDk2Yi1iOTdhLWJlMDJlYmNkZDNmMyJ9.DUKv8dD4VMhB7g79NUAsuRv2N4KjejLm8rAgzwoum_Ogc0QV0POS__pML9e1-7FMjMKUqcdb139BR8iYgWzNegxLHAf2rH4jZoioF1OaQjBEhgtII8Be84cp536Je089XIh_e-xdQYD8Yl9CW6XaNnQuciE0CXoacm9zUAd8MkOYm9dd70ZrGIvV_B99ge-uBttdMqYz-titliz4pQDgdfq8JzD9_KViTlfCDN3asW07KumCVXXEP_iiCJ9KdxSPXxjPNOQo1-wPGjk-unUsPsCKFKQtrsv7xXT56N0avvZcZM0QRxNpNJ0U7smERb77P6V27yznUbJ2DZXy6RDFikgVWYM-BMI8GrR18UrTyEK-AZYWeOQL-5AjCJH-gSbURDDVwQu6PksI9hsi8xLH2QgRPiv7Q0E20PqFHqlEUFtn8ljsB5vbsYeTPxKJg8btGbhP4UeXIHzyM3ygjhp_AjuG1q46sDM3z-vqzhVaNHs7iF8Cg8K6VrLiyireO9Kkn4wxoIFEFdvICEGtE_UpX_5Z9fSjfm3XGmVbZSauvP17CEi1fOZbIftuUNkuwyivcESfiEo1dmBJDs0A8XxjhnuEApPKYjl56DRGlkdN-jtmZ8noaJvsMt21cHZ1f5TOPEGEbZzhOmpCMn6JLFZTBz_16_hQtgNg2H9uOGVKTGY",
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




import { App } from './app';

const root = createRoot(document.getElementById('root'))


root.render(
    <App/>
)