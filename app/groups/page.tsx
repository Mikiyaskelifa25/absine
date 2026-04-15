import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import GroupsHero from "@/components/groups/GroupsHero";
import GroupsContent from "@/components/groups/GroupsContent";

export const metadata = {
  title: "Ethiopia Group Tours | Aventure en Abyssinie",
  description:
    "Discover Ethiopia with our curated group circuits. Explore ancient churches, dramatic landscapes, and vibrant cultures.",
};

export default function GroupsPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <TopNavBar />
      <main>
        <GroupsHero />
        <GroupsContent />
      </main>
      <Footer />
    </div>
  );
}
