# Advertising authorization records

## Unity Ads

- Publisher/provider: Unity Technologies.
- Source: the logged-in Unity Monetization Organization settings, Organization `1374575419165`, App-ads.txt / Show full list; verified November 12, 2026.
- Official publication instructions: https://docs.unity.com/en-us/grow/ads/optimization/app-ads-txt . Unity instructs the publisher to copy its complete seller list into the developer website's root app-ads.txt file, and to include the publisher OwnerDomain.
- Use: all 163 distinct Unity-provided seller records reproduced unchanged in `content/app-ads.txt` and generated `docs/app-ads.txt`; also retained on the legacy developer domain still crawled for existing iOS store listings.
- Direct record: `unity.com, 107009801, DIRECT, 96cabb5fbdde37a7`. This seller ID is distinct from the Unity Organization ID and from an app Game ID.
- Permission: the explicit integration/publication instruction above. No separate open-source license is stated for these configuration records. They are not represented as independently authored code or CC0 material.
- Publisher variable: `ownerdomain=riceawn.com`. Existing Google and Magnite direct records are retained.
- Source, purpose, unchanged use and publication permission were disclosed in the chat before publication. Public publication does not prove crawler refresh, SDK integration or production bidding.

## Magnite Google Open Bidding

- Publisher: Magnite, Inc.
- Source: https://www.magnite.com/openbiddingFAQ/ (question 3).
- Verified: November 12, 2026. The live official FAQ instructs Open Bidding publishers to insert the record below into ads.txt/app-ads.txt.
- Record: `rubiconproject.com, 22884, DIRECT, 0bfd66d529a55807`
- Use: reproduced unchanged in `content/app-ads.txt` and its generated public copy, `docs/app-ads.txt`.
- Permission: Magnite's explicit publication instruction in the official integration FAQ. No separate open-source license is stated; this record is not represented as independently created code or as CC0 material.
- Existing Google publisher authorization is retained.
- Publishing this record does not itself complete the AdMob bidding partnership or approve additional apps. Those states must be verified separately.
