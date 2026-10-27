import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "./LegalPage";

export const metadata = pageMetadata({
  title: "Pinpoint Arcade",
  description:
    "Pinpoint Arcade is a daily geography game by Tribus Technologies: five places a day, drop a pin on the map and see how close you get.",
  path: "/pinpoint",
});

export default function PinpointPage() {
  return (
    <LegalPage title="Five places a day. How close can you get?">
      <p>
        Pinpoint Arcade is a daily geography game made by {site.legalName}.
        Every day everyone gets the same five places: cities, landmarks, lakes
        and mountains from all over the world. Find each one on the map, drop
        your pin and see how many kilometres you were off.
      </p>
      <ul>
        <li>Up to 100 points a round: the closer your pin, the higher your score.</li>
        <li>Build your streak, level up and climb the leagues.</li>
        <li>Play live duels with friends.</li>
      </ul>
      <p>
        Available on the App Store and Google Play. Questions? Write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <Link href="/pinpoint/privacy">Privacy Policy</Link> ·{" "}
        <Link href="/pinpoint/terms">Terms of Service</Link>
      </p>
    </LegalPage>
  );
}
