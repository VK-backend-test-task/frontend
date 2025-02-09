# Frontend

Используется NextJS с antd для UI. Используется SSR, и браузер пользователя не взаимодействует с Backend API напрямую (и не может, так как он находится в частной сети). Запрос списка информации о контейнерах к сервису Backend происходит при открытии страницы пользователем, но не чаще раза в 10 секунд (используется кэширование).

Таким образом появляется дополнительный слой кэширования (уменьшая нагрузку на бэкенд), а также защиты (например, если внешний актор получит доступ к фронтенду, он хоть и сможет просматривать пинги, но при этом не сможет добавить кучу своих).

Клиент для Backend API сгенерирован через openapi-generator.
