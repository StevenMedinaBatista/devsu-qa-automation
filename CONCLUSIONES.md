
---

# 🧠 CONCLUSIONS.md (hallazgos y mejoras)


```md
# Conclusiones y Oportunidades de Mejora

## Conclusiones

- Se implementaron pruebas E2E y de API utilizando Cypress, permitiendo cubrir ambos tipos de pruebas dentro de un solo framework.
- El uso del patrón Page Object Model mejora la mantenibilidad, legibilidad y escalabilidad del proyecto.
- La externalización de la data de prueba evita el hardcode y facilita la reutilización de escenarios.
- Las validaciones agregadas en cada página permiten asegurar que el sistema se encuentre en el estado esperado antes de continuar el flujo, reduciendo falsos positivos.
- Las pruebas E2E cubren el flujo crítico de compra de extremo a extremo, validando tanto la funcionalidad como la experiencia del usuario.

---

## Oportunidades de mejora

- Integrar la ejecución automática de las pruebas en un pipeline de CI/CD (por ejemplo, GitHub Actions).
- Agregar reportería avanzada (Mochawesome o Allure) para una mejor visualización de resultados.
- Incluir pruebas negativas y validaciones de mensajes de error.
- Parametrizar la ejecución por ambientes (QA, Staging, Prod).
- Implementar paralelización de pruebas para reducir tiempos de ejecución.
