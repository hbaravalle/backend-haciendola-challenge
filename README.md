
![portada_haciendola](https://github.com/hbaravalle/backend-haciendola-challenge/assets/24690415/43f3f53c-3178-470e-8103-b52938d38821)

# [Backend] Challenge Full Stack, Haciendola

## Prerrequisitos

Tener instalados Node y NPM:

- [Node.js](https://nodejs.org/es/download/)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)

## Endpoints de la API

### Autenticación

- `POST /register` → Registrar un nuevo usuario.
- `POST /login` → Iniciar sesión de un usuario.

### Mailtrap Test Mode

- `POST /otp` → Enviar un código de un solo uso (OTP) para restablecer la contraseña.
- `POST /otp-check` → Verificar el código OTP.
- `POST /reset-password` → Restablecer la contraseña del usuario.

### Productos

- `GET /` → Listar todos los productos. Admite por query string el número de página. Ejemplo: `/products?page=2`.
- `GET /:product` → Obtener los detalles de un producto específico a través de su SKU o Handle.
- `POST /` → Crear un nuevo producto.
- `PUT /:product` → Actualizar un producto existente a través de su SKU o Handle.
- `DELETE /:product` → Eliminar (soft) un producto a través de su SKU o Handle.

## Primeros Pasos

Seguir los siguientes pasos para la correcta ejecución (local) del proyecto:

### 1. Clonar el repositorio

```bash
git clone https://github.com/hbaravalle/backend-haciendola-challenge
cd backend-haciendola-challenge
```

### 2. Instalar dependencias

Navegar al directorio del proyecto y ejecutar:

```bash
npm install
```

### 3. Crear variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno. Por ejemplo:

```plaintext
APP_PORT=

DB_DATABASE=
DB_USER=
DB_PASS=
DB_HOST=
DB_PORT=
DB_DIALECT=

SEEDER_USER_PASS=

NODEMAILER_FROM=
NODEMAILER_USER=
NODEMAILER_PASS=

JWT_SECRET=
```

### 4. Inicializar la base de datos

Ejecuta el siguiente comando para crear la base de datos (si no existe) con el nombre especificado en las variables de entorno. Además, se ejecutarán seeders necesarios para tener datos de prueba:

```bash
npm run db-init
```

### 5. Ejecutar seeders

Si se necesita borrar y ejecutar varios datos de prueba en la base de datos, usar el siguiente comando:

```bash
npm run seeders
```

### 6. Ejecutar el servidor

Inicia el servidor de desarrollo:

```bash
npm start
```

El servidor debería estar ejecutándose en el puerto seleccionado.

---

¡Gracias por la oportunidad!
