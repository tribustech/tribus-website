import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "../LegalPage";

export const metadata = pageMetadata({
  title: "Pinpoint Arcade Privacy Policy",
  description: "What the Pinpoint Arcade app collects, why, and what you can do about it.",
  path: "/pinpoint/privacy",
});

export default function PinpointPrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="27 October 2026">
      <p>
        Pinpoint Arcade (“Pinpoint”) is a daily geography game made by Tribus
        Technologies SRL, Romania (“we”). This policy explains what the app
        collects, why, and what you can do about it.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Your account.</strong> Playing needs an account. We keep the
          identifier Apple, Google or Facebook gives us for you (or your email
          address if you sign in with an email code), the email address they
          share (with Sign in with Apple this can be a private relay address),
          your display name and, if you add one, your profile photo.
        </li>
        <li>
          <strong>Your games.</strong> For each game: the score and distance of
          every round, how long it took, the game mode and the date. We keep
          the places you guessed only as distances and scores.
        </li>
        <li>
          <strong>A random install id</strong>, created on your device, so games
          played on that device can be moved onto your account.
        </li>
        <li>
          <strong>Purchases.</strong> If you subscribe to Pinpoint+ or buy an
          item, we receive the purchase status from Apple or Google. We never
          see your payment details.
        </li>
        <li>
          <strong>Notifications.</strong> If you allow notifications, we keep
          your device’s push token to send reminders and duel invites.
        </li>
        <li>
          <strong>Diagnostics and usage.</strong> Crash reports and anonymous
          usage events (which screens and features are used) to fix bugs and
          improve the game.
        </li>
        <li>
          <strong>Suggestions</strong> you send us from the app.
        </li>
        <li>
          <strong>Server logs.</strong> Technical request data such as IP
          addresses, kept for a short time to run and protect the service.
        </li>
      </ul>
      <p>
        We do not show ads, we do not track you across other apps or websites,
        and we do not sell your data.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To run the game: score your rounds and keep your streak, levels, leagues and badges in sync across your devices.</li>
        <li>For leaderboards and leagues: your display name, photo, level and scores are shown to other players.</li>
        <li>For friends and duels: players you add see your display name, level, streak, today’s score and your duel results with them.</li>
        <li>To provide Pinpoint+ and the items you buy.</li>
        <li>To keep the app working and improve it.</li>
      </ul>

      <h2>Services we rely on</h2>
      <ul>
        <li><strong>Railway</strong> hosts our servers and database.</li>
        <li><strong>Apple, Google and Facebook</strong> handle sign-in, and Apple and Google handle payments, under their own privacy policies.</li>
        <li><strong>RevenueCat</strong> manages subscriptions and purchases.</li>
        <li><strong>Postmark</strong> sends sign-in codes by email.</li>
        <li><strong>Sentry</strong> collects crash reports.</li>
        <li><strong>PostHog</strong> (EU hosting) collects anonymous usage statistics.</li>
        <li><strong>Mapbox</strong> draws the map and may receive anonymous usage and device data under the <a href="https://www.mapbox.com/legal/privacy">Mapbox privacy policy</a>.</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        We keep your data while you use Pinpoint. When you delete your account,
        your account and every game recorded under it are deleted immediately.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR you can ask to access, correct, export or delete your
        data, and object to how we use it. You can delete your account at any
        time in the app: <em>Profile → Delete account</em>. You can also
        complain to the Romanian data protection authority (ANSPDCP).
      </p>

      <h2>Children</h2>
      <p>
        Pinpoint is meant for players aged 13 and over. We do not knowingly
        collect personal data from younger children.
      </p>

      <h2>Contact</h2>
      <p>
        For anything about your data, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <Link href="/pinpoint/terms">Terms of Service</Link>
      </p>
    </LegalPage>
  );
}
