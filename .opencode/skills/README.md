# Skills del proyecto

Skills instaladas para diseño y front end. OpenCode las descubre desde
`.opencode/skills/<id>/SKILL.md` y las carga sola cuando la tarea coincide.

| Skill | Para qué sirve | Origen |
|-------|----------------|--------|
| `frontend-design` | Dirección visual con personalidad: paleta, tipografía y layout que no se ven genéricos. | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design) |
| `web-design-guidelines` | Auditoría de UI con +100 reglas: accesibilidad, foco, formularios, animación, tipografía, imágenes, dark mode, i18n. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) |
| `react-best-practices` | 70 reglas de performance de React/Next de Vercel: waterfalls, bundle, re-renders, rendering. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices) |
| `composition-patterns` | Patrones de composición: compound components, estado, APIs reutilizables, React 19. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/composition-patterns) |
| `react-view-transitions` | Transiciones nativas con `<ViewTransition>`, `addTransitionType` y recetas CSS. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-view-transitions) |
| `theme-factory` | 10 temas con paletas y pares tipográficos listos para aplicar. | [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/theme-factory) |

## Actualizar

```bash
git clone --depth 1 https://github.com/vercel-labs/agent-skills.git
git clone --depth 1 https://github.com/anthropics/skills.git
```

Copia la carpeta de cada skill sobre `.opencode/skills/<id>/`.

También puedes instalarlas con el CLI oficial: `npx skills add vercel-labs/agent-skills`.
