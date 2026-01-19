# Devsu QA Automation – Technical Test

Este repositorio contiene la resolución de la prueba técnica de automatización solicitada por **Devsu**, incluyendo:

- Pruebas **E2E** automatizadas con **Cypress + TypeScript** aplicando **Page Object Model**
- Pruebas **API** automatizadas utilizando **Cypress**
- Uso de **data externa** (fixtures)
- Documentación clara de ejecución y estructura

---

## 🧪 Tecnologías utilizadas

- Node.js
- Cypress v14
- TypeScript (ES Modules)
- Page Object Model (POM)

---

## 📁 Estructura del proyecto

```text
cypress/
├── e2e/
│   ├── e2e/                # Pruebas E2E (UI)
│   │   └── purchase.cy.ts
│   └── api/                # Pruebas de APIs
│       └── petstore.cy.ts
│
├── pages/                  # Page Objects
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── fixtures/               # Data externa
│   ├── users.json
│   ├── checkout.json
│   └── pet.json
│
└── support/
    └── e2e.ts
```

## ⚙️ Requisitos previos

- Node.js v18 o superior
- Git
- Acceso a internet

## 📦 Instalación

1. Clonar el repositorio:
``` git clone https://github.com/<usuario>/devsu-qa-automation.git ```

2. Acceder al proyecto:
- cd devsu-qa-automation

3. Instalar dependencias:
- npm install

## ▶️ Ejecución de pruebas

Ejecutar pruebas E2E (UI)
- npm run test:e2e

Ejecutar pruebas de API
- npm run test:api

Abrir Cypress en modo interactivo
- npm run cy:open


## 📊 Reportería de pruebas
Actualmente Cypress genera reportes en consola con:

- Estado de ejecución (Passed / Failed)
- Tiempo de ejecución
- Screenshots automáticos en fallos
- Videos de ejecución (modo headless)

## 📸 Evidencias automáticas

Screenshots:
- cypress/screenshots/

Videos:
- cypress/videos/