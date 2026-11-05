# Privacy and AdMob completion — November 4, 2026

The user authorized reviewing apps already registered in AdMob, treating advertising and Firebase as planned integrations, publishing missing policies, and completing missing UMP configuration. Other app repositories were inspected read-only.

## Magnifier: Reading Loupe

- Project: `D:/workspace/toolapps/magnifier`.
- Reviewed: `README.md`, `pubspec.yaml`, `lib/main.dart`, `lib/ad_helper.dart`, `lib/vault_service.dart`, Android manifest, iOS Info.plist.
- Camera preview, mirror, frozen images, locally saved PNGs and image metadata, gallery export, local reward/quota records.
- Google Mobile Ads / UMP already present. Firebase Core and Analytics present; startup calls Firebase initialization and app-open logging.
- No Crashlytics dependency found; policy labels Crashlytics as release-dependent/planned, per user authorization, rather than claiming it currently runs.
- No existing app policy found in this project or website. New original policy: `/privacy/magnifier/`; support page follows the website's existing contact template.
- App-side issue discovered but NOT changed: UMP update failure calls `_startMobileAds` without checking `canRequestAds`. Firebase starts before UMP and no analytics toggle was found. Backend setup does not fix this code behavior. App/device consent testing remains outstanding.
- No iOS Magnifier entry in the 23-app AdMob picker; only the existing Android entry can be configured there.

## Tear-Off Notes

- Project: `D:/workspace/toolapps/teargingcalendar`.
- Reviewed: `AGENTS.md`, `README.md`, `docs/ads.md`, Android `NativeAdsController.java`, `src/nativeAds.js`.
- Android AdMob and UMP present, production requests gated by `canRequestAds`; privacy choices button supported.
- Firebase not found in the inspected implementation. Existing policy extended for release-dependent/planned Firebase Analytics and Crashlytics per user request; no default-off control or implemented iOS SDK is claimed.
- Android entry already selected and policy migrated. Existing iOS entry has no policy URL and is not selected. Both platforms use `/privacy/tear-off-notes/`.
- Empty Changes section repaired, platform-dependent storage and privacy choices clarified.

## Writing and sources

New policy prose was written for Rice Awn LLC from user-owned project facts; the Notes policy is an authorized edit of the user's existing policy, backed up alongside this record. No third-party text, template, code, image, or font was copied.

Google documentation was consulted as factual reference only:

- https://developers.google.com/admob/android/privacy/play-data-disclosure
- https://firebase.google.com/support/privacy

Original Gists and app code remain unchanged. Website policies, app builds, store fields, SDK configuration, and AdMob message publication are separate deliverables. Backend actions and verification are recorded in `../admob-privacy-migration-2026-11-04/admob-updates.json`.
