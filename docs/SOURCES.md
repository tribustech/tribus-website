# Project imagery — sources & gaps

Origin of each project's screenshots in `content/projectMedia.ts`. Please review
the flagged items and send links so I can upgrade the rest.

| Project | Current source | Status |
|---------|----------------|--------|
| **Bluvi** | Google Play marketing screenshots (`com.tribustech.bluvi`) | ✅ upgraded |
| **VoteMonitor** | Google Play marketing screenshots (Code for Romania) | ✅ upgraded |
| Secom Professional | Deck mockups | ⏳ private B2B — send a link if public |
| Clubo | Deck mockups | ⚠️ the `com.clubo.clubo` Play listing is a **different** app (a Brazilian telecom) — please send the correct store/site link |
| Arhiv360 | Deck screenshots | ⏳ private — keep deck or send link |
| Juke | Deck composite | ❓ ambiguous store match — send the correct App/Play link |
| Neuro Performance | Deck composite | ⏳ send link if public |
| PlayTech | Deck composite | ⏳ send link if public |
| Tattoo App | Deck composite | ⏳ send link if public |
| ONG Hub | Deck screenshots | ⏳ private admin — keep deck or send link |
| WERK24 | Deck screenshot | ⏳ send link if public |
| Edu-Sport | Deck screenshots | ⏳ send website URL to capture |
| Covasna Media | Deck screenshot | ℹ️ live site is covasnamedia.ro (cookie-walled); deck shot kept |
| VIC | Deck mockup + dashboard | ⏳ send link if public |
| Silent Auction | Deck mobile-web screenshots | ⏳ send link if public |
| PTSD Help | Provided app screenshots (4) | ✅ clean in-app screens |
| Practice4Good | Live capture practice4good.ro | ✅ headless Chrome hero |
| Centru Civic | Live capture centrucivic.ro | ✅ headless Chrome hero |
| Rundezvous | Live capture rundezvous.ro | ✅ headless Chrome hero (work page only) |
| PescarMania | Live capture pescarmania.ro | ✅ headless Chrome hero (work page only) |
| Invest in Romania | invest-in-romania.previewhub.eu | 🔒 401 — PreviewHub auth gate; need credentials or screenshots |
| WWF | Live capture wwf.ro green-procurement page | ✅ headless Chrome hero (work page only); logo whitened for clients strip |

## How to add/upgrade a project's imagery

1. Send me an **App Store / Google Play link** (for apps) or a **website URL**
   (for web products) per project — or the raw screenshots themselves.
2. I re-run the sourcing step (`tools/`, headless Chrome) to fetch + optimize to
   WebP under `public/images/work/<slug>/`.
3. I update the entry in `content/projectMedia.ts` (tagging each asset
   `shot` | `phone` | `browser` | `mockup`).

## Notes

- App Store CDN transforms returned blank images in automated fetch; Google Play
  was reliable. For App-Store-only apps, sending the screenshots directly is
  easiest.
- Auto-sourced matches are best-effort — always sanity-check the flagged rows.
