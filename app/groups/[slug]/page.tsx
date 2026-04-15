import { notFound } from "next/navigation";
import { trips, getTripBySlug } from "@/lib/tripsData";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import TripDetailContent from "@/components/groups/TripDetailContent";

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return { title: "Trip Not Found" };
  return {
    title: `${trip.title} | Aventure en Abyssinie`,
    description: trip.description,
  };
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) notFound();

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopNavBar />
      <main>
        <TripDetailContent trip={trip} />
      </main>
      <Footer />
    </div>
  );
}

