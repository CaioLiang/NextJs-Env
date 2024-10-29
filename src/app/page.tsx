import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY, //O process.env serve para que o node leia a variável de contexto
  version: "weekly",
})

export default function Home() {
  return (
    <main>
      <h1>Env Vars</h1>
    </main>
  )
}
