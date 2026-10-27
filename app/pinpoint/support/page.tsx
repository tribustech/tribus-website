import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "../LegalPage";

export const metadata = pageMetadata({
  title: "Pinpoint Arcade Support",
  description: "Help with the Pinpoint Arcade app: scoring, streaks, subscriptions and your account.",
  path: "/pinpoint/support",
});

export default function PinpointSupportPage() {
  return (
    <LegalPage title="Support">
      <p>
        Questions, bugs or ideas? Write to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>; we usually answer
        within two working days.
      </p>

      <h2>How scoring works</h2>
      <p>
        Each round is worth up to 100 points. The closer your pin is to the
        answer, the more points you get.
      </p>

      <h2>When does a new daily start?</h2>
      <p>Every day at midnight, Romanian time. Everyone gets the same places.</p>

      <h2>Keep your progress on a new phone</h2>
      <p>
        Sign in on both devices with the same Apple, Google, Facebook or email
        account.
      </p>

      <h2>Pinpoint+</h2>
      <p>
        Manage or cancel your subscription in your App Store or Google Play
        account settings. To restore a purchase on a new device, sign in and
        tap <em>Restore</em> on the Pinpoint+ screen.
      </p>

      <h2>Delete your account</h2>
      <p>
        In the app, open <em>Profile → Delete account</em>. Your account and
        all your games are deleted immediately.
      </p>

      <p>
        <Link href="/pinpoint/privacy">Privacy Policy</Link> ·{" "}
        <Link href="/pinpoint/terms">Terms of Service</Link>
      </p>
    </LegalPage>
  );
}
