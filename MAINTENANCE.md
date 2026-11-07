# Maintenance record — 2026-11-06

Upstream: `https://github.com/SkylerrSimpson/Devfinder.git`
Source commit: `752694a094c1e5f92b1809cbdfae563531c18bc0`
Local branch: `maintained-original`
History: fetched directly from upstream; existing history was not rewritten. No push or production data access was performed.

## Changes

- Preserved original header navigation, pale-blue/white/blue Space Mono layout, public GitHub search, profile information, add/check control, and saved cards.
- Replaced Mongo/Mongoose with PostgreSQL; retained `/profile` GET/POST and DELETE by `_id` shapes. Numeric GitHub IDs continue to return as strings.
- Replaced hardcoded localhost API with same-origin requests; saves are private to this browser. No GitHub login or account system was added.
- Fixed invisible mutation failures, pending-state semantics, undefined saved-card keys, zero-value statistics, URL encoding, resize-listener cleanup, and unsafe website schemes.
- Added semantic named save/delete/view controls without replacing the card layout. Public GitHub lookup remains browser-side; its external API rate limits still apply.

## Persistence and deployment

MongoDB/Mongoose were removed from the executable backend. PostgreSQL schema `devfinder_original` is isolated from the modern application. The old global/shared collection semantics changed deliberately to browser-private ownership. Every saved-item SQL query includes owner_hash; request bodies cannot choose that hash. Mutations require an existing browser cookie, exact configured Origin, and JSON for POST/PATCH. Errors no longer return raw database messages. Validation and bounded JSON requests were added. The local setup creates a separate database and role, not only a shared table prefix.

No old Mongo data was read, exported, converted, assigned to browsers, or deleted. Importing legacy shared records would require a separate ownership decision and an authorized export; this code starts with an empty isolated database.

## Compatibility limits

CRA/react-scripts and the recognizable React component/style structure are retained. It is an intentionally maintained legacy UI, not a Next.js rewrite. A successful build does not establish that every transitive development dependency is vulnerability-free. Frontend external services/fonts retain their availability and privacy limitations. No automatic dependency audit fix or broad visual redesign was applied. The included server/API tests isolate external lookups and do not write to live services.

## Additional compatibility checks

Saved-list initialization is serialized across tabs using Web Locks. Production cookies use the `__Host-` prefix and ambiguous duplicate cookies are rejected. Production servers bind to the host network interface; development stays on loopback. Only known React routes receive the SPA shell; unknown paths and missing assets return HTTP 404.

The unused CRA template test was replaced with a targeted regression check for the actual app workflow. Axios is pinned to 1.21.0. React Router stays on its v6 line at 6.30.6; two reported v6 advisories remain and their reachable inputs require review before public deployment. Build dependencies remain a legacy toolchain; they are not part of the maintained Express runtime.
