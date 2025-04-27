This is a [Tina CMS](https://tina.io/) project.

## Local Development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Starter Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
yarn build
```

## Learn More

To learn more about Tina, take a look at the following resources:

- [Tina Docs](https://tina.io/docs)
- [Getting starter guide](https://tina.io/guides/tina-cloud/starter/overview/)

You can check out [Tina Github repository](https://github.com/tinacms/tinacms) - your feedback and contributions are welcome!

## [Deploy on Vercel](https://tina.io/guides/tina-cloud/add-tinacms-to-existing-site/deployment/)

For the website --> https://www.experienciasfutaleufu.cl

el sitio web experienciasfutaleufu.cl funciona bien, es barato y es fácil de manejar. Ocupa 4 plataformas.
GitHub.com es donde se guardan todos los archivos del sitio web (como textos, fotos y el código que hace que el sitio funcione). Es como una caja fuerte digital que guarda todo de forma segura.

Tina.io permite cambiar el contenido del sitio (por ejemplo, actualizar textos o subir nuevas fotos) de manera fácil, sin tener que usar códigos complicados. Es como un editor que muestra el sitio y permite hacer cambios en tiempo real.

Vercel.com es donde se "publica" el sitio web para que cualquier persona pueda verlo desde cualquier parte del mundo. Cuando se hacen cambios en GitHub o Tina.io, Vercel se encarga de mostrar esos cambios en el sitio real automáticamente.

NIC.cl es la empresa que gestiona los nombres de sitios web en Chile. Aquí se compra el dominio experienciasfutaleufu.cl, que es la dirección que la gente escribe para visitar el sitio. NIC.cl solo conecta ese nombre con Vercel, para que al escribirlo se abra el sitio correcto.

En resumen: GitHub guarda los archivos, Tina.io permite editarlos fácilmente, Vercel muestra el sitio en internet, y NIC.cl gestiona el nombre del sitio web. Juntas, estas plataformas hacen posible tener un sitio bonito, fácil de actualizar y con muy bajo costo.
