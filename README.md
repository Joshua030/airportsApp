
# Airports App

Aplicación web para buscar y visualizar información de aeropuertos utilizando la API de AviationStack.

## Características

* Búsqueda de aeropuertos por nombre exacto o código IATA
* Visualización de información detallada de aeropuertos
* Mapa interactivo con ubicación de aeropuertos
* Animaciones suaves con AOS
* Gestión de estado con Zustand
* Interfaz responsive con Tailwind CSS


# Instalacion

1. clonar el repositorio
```
git clone https://github.com/Joshua030/airportsApp.git
cd airportsApp

```

2. Instalar dependencias

```
npm install

```
3. Renombrar el archivo .env.example a .env
4. Rmeplazar las variables de entorno, la variable API_ACCESS_KEY debe ser generada en [Solicitar api key]( https://aviationstack.com/) 

5. Ejecutar el comando ``` npm run dev ```

6. Open your browser and navigate to [Abrir web](http://localhost:3000)


# Testing

1. para correr el test ``npm test`` or ``` npm test AirportGrid.test ``` 


# Tecnologias usadas

* Next.js
* TypeScript
* CSS / Tailwind (si aplica)
* Jest + React Testing Library
* zustand

# Paquetes adicionales

* AOS
* clsx
* leaflet
* tailwind-merge

# Endpoints api

* Listar aeropuertos: http://api.aviationstack.com/v1/airports [GET]
*  Buscar por código IATA: http://api.aviationstack.com/v1/airports?access_key={{API_ACCESS_KEY}}&iata_code={iatacode} [GET]
* Buscar por nombre: http://api.aviationstack.com/v1/airports?access_key={{API_ACCESS_KEY}}&airport_name={{airport_name}} [GET]


# Notas

* La API no permite búsquedas parciales (solo exactas). La única flexibilidad aplicada desde el frontend es normalizar mayúsculas/minúsculas y espacios. ya que la opción search de la API solo está disponible en la versión de pago.
* No se realizó el adicional  de modo oscuro, ya que se considera que la paleta de colores actual refleja cómo se vería en esa versión.
* Se deja con nocache en las requests. En producción se podría revalidar cada 24h o mas, ya que los aeropuertos no cambian con frecuencia.


# Produccion
* Para general el build:

``` npm run build ```

# Stage

# Autor
** Jose Luis
[LInk Proyecto]( https://github.com/Joshua030/airportsApp)
