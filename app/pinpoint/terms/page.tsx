import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "../LegalPage";

export const metadata = pageMetadata({
  title: "Pinpoint Arcade Terms of Service",
  description: "The terms for using the Pinpoint Arcade app.",
  path: "/pinpoint/terms",
});

export default function PinpointTermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="27 October 2026">
      <p>
        These terms apply to Pinpoint Arcade (“Pinpoint”), made by Tribus
        Technologies SRL, Romania (“we”). By using the app you agree to them.
      </p>

      <h2>Your account</h2>
      <p>
        You need an account to play. Keep your sign-in secure and choose a
        display name that is not offensive or misleading. You can delete your
        account at any time in the app.
      </p>

      <h2>Fair play</h2>
      <p>
        Don’t cheat, automate games, exploit bugs or harass other players. We
        may remove scores, reset progress or suspend accounts that break these
        rules.
      </p>

      <h2>Pinpoint+ and purchases</h2>
      <p>
        Pinpoint+ is an auto-renewing subscription sold through the App Store
        or Google Play. It renews unless you cancel at least 24 hours before
        the end of the current period, in your store account settings. Payments,
        refunds and cancellations follow the rules of the store you bought
        from.
      </p>

      <h2>The game</h2>
      <p>
        We keep improving Pinpoint and may change, add or remove features and
        game modes. The app is provided as is; we do our best to keep it
        running but can’t promise it will always be available or error free.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle your data is described in the{" "}
        <Link href="/pinpoint/privacy">Privacy Policy</Link>.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms; the date above shows the latest version.
        Romanian law applies. Questions? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
