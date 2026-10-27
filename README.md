# Panel de Tareas con Angular

Aplicación web desarrollada con **Angular 19** para gestionar tareas pendientes. Permite aadir, marcar como completadas, filtrar y eliminar tareas con persistencia en `localStorage`.

## Funcionalidades

- **Aadir tareas**: con botón o pulsando Enter.
- **Marcar como completadas/pendientes**: con el checkbox.
- **Filtrar**: por *Todas*, *Pendientes* o *Completadas*.
- **Eliminar tareas**: con un solo clic.
- **Persistencia**: guarda automticamente en `localStorage`.
- **Contadores**: muestra el nmero de tareas por estado.

## Tecnologas

- [Angular 19](https://angular.io/) - Framework frontend
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) - Estilos

## Instalación paso a paso (local)

```bash
# 1. Clonar el repositorio
git clone https://github.com/AlvaroGarcia97/panel-tareas-angular.git
cd panel-tareas-angular

# 2. Instalar dependencias
npm install

# 3. Arrancar la aplicación en modo desarrollo
ng serve

# 4. Abrir en el navegador
# http://localhost:4200
```

## Build para producción

```bash
ng build
```

Los archivos se generarn en `dist/`.

## Estructura

```
src/
 app/
    app.component.ts   # Lógica del componente
    app.component.html # Plantilla
    app.component.css  # Estilos
    app.config.ts      # Configuracin
 index.html
 styles.css
```

## Notas

- Proyecto creado con **componentes standalone** (sin módulos).
- Sin backend: toda la información se guarda en el navegador.
- Ideal para practicar Angular básico.
