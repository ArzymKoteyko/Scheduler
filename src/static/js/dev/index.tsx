import React from 'react';
import { createRoot } from 'react-dom/client';

// Функция createSmartappDebugger используется в development среде. В production среде необходимо использовать createAssistant.
import { createAssistant, createSmartappDebugger } from '@sberdevices/assistant-client';

const initialize = (getState, getRecoveryState) => {
    if (process.env.NODE_ENV === 'development') {
        return createSmartappDebugger({
            // Токен из Кабинета разработчика
            token: 'token',
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


import { YourComponentName } from './your_component_name';

const root = createRoot(document.getElementById('root'))


root.render(
    <YourComponentName/>
)