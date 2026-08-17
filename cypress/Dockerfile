# Використання базового образу Ubuntu
FROM cypress/included:15.10.0

WORKDIR /cypress

# Копіювання файлів проекту
COPY . .

# Видалення неактуальних (приклади або застарілі) тестів
RUN rm -rf cypress/e2e/1-getting-started
RUN rm -rf cypress/e2e/2-advanced-examples
RUN rm -rf cypress/e2e/qauto_test/test.cy.js

# Видалення старих репортів
RUN rm -rf cypress/reports
RUN rm -rf cypress/screenshots

# Встановлення необхідних пакетів in package.json
RUN npm i

# Виконання Node.js скрипта
ENTRYPOINT [ "npm" ]
CMD [ "run", "cypress:run:firefox:env:qauto" ]
