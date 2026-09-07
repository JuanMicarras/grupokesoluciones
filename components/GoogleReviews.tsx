import Link from "next/link";
import Image from "next/image";

// Tipado para la nueva API de Places
type Review = {
  rating: number;
  text: { text: string };
  authorAttribution: { displayName: string; photoUri: string };
  relativePublishTimeDescription: string;
};

export default async function GoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // URL para el perfil de Google Maps (el botón que pidió tu papá)
  // Reemplaza esto con el link directo a dejar una reseña o ver el perfil en Maps
  const googleMapsUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey || "",
          // Solo pedimos los datos que necesitamos para ahorrar consumo
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        // Revalida la caché cada 24 horas (86400 segundos)
        next: { revalidate: 86400 },
      },
    );

    if (!res.ok) {
      console.error("Error al obtener las reseñas de Google:", res.statusText);
      throw new Error("No se pudieron cargar las reseñas");
    }

    const data = await res.json();
    const reviews: Review[] = data.reviews || [];

    return (
      <section className="py-12 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--dark)] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[var(--muted)] mb-8">
            Calificación global:{" "}
            <strong className="text-yellow-500">{data.rating} ⭐</strong>
            basada en {data.userRatingCount} opiniones reales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Solo mostramos las 3 primeras reseñas para no saturar el diseño */}
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[var(--radius)] shadow-sm border border-[var(--border)] text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={review.authorAttribution.photoUri}
                    alt={review.authorAttribution.displayName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-[var(--dark)]">
                      {review.authorAttribution.displayName}
                    </h4>
                    <p className="text-xs text-[var(--muted)]">
                      {review.relativePublishTimeDescription}
                    </p>
                  </div>
                </div>
                <div className="text-yellow-500 mb-2">
                  {"⭐".repeat(review.rating)}
                </div>
                {review.text?.text && (
                  <p className="text-[var(--text)] text-sm italic line-clamp-4">
                    "{review.text.text}"
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* El CTA solicitado por tu papá */}
          <Link
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btnPrimary inline-block px-8 py-3 rounded-full font-semibold transition-transform hover:scale-105"
          >
            Leer todas las opiniones en Google
          </Link>
        </div>
      </section>
    );
  } catch (error) {
    console.error(error);
    // Si falla la API, no rompemos la página, simplemente no renderizamos la sección
    return null;
  }
}
