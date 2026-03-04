## Panel de usuario con React y Tailwind CSS

Este proyecto implementa un pequeño **panel de usuario** en React utilizando **Tailwind CSS** siguiendo los requisitos de la práctica.

### Decisiones de diseño

- **Coherencia visual**: se ha utilizado una paleta basada en tonos `slate` y acentos azules (`blue-600`) para mantener una apariencia limpia y moderna.
- **Componentes reutilizables**: el botón es un componente genérico con variantes (`primary`, `secondary`, `danger`) que se reutiliza en la barra de navegación, la tarjeta de usuario y el formulario de login.
- **Enfoque responsive**: se han usado utilidades responsive (`sm`, `lg`) para pasar de diseño en columna en móvil a distribución en fila en pantallas más grandes.
- **Accesibilidad básica**: se han definido estados `hover`, `focus-visible` y `disabled` visibles en el botón y `focus` claro en los campos del formulario.

### Componentes reutilizables creados

- **`Button.jsx`**: botón reutilizable con variantes `primary`, `secondary` y `danger`, soporta estado `disabled` y se utiliza en varios puntos de la interfaz.
- **`Navbar.jsx`**: barra de navegación superior con logo, enlaces con `hover` y distribución mediante Flexbox, responsive (`sm:` para menú horizontal).
- **`UserCard.jsx`**: tarjeta de usuario tipo _card_ con sombra, padding consistente y layout flexible (`flex`, `sm:flex-row`) para adaptarse a móvil y escritorio.
- **`LoginForm.jsx`**: formulario de login con inputs estilados, estados de `focus`, espaciado vertical y mensaje de error simulado.
