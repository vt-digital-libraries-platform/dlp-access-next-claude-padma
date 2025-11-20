# Next.js Route Scaffolds - Deployment Summary

**Deployed:** November 7, 2025  
**Environment:** vtdlp-nxt-padma-docker (t3.small)  
**Base URL:** http://vtdlp-nxt-padma-docker.eba-2dhusd3a.us-east-1.elasticbeanstalk.com

## ✅ All Routes Created & Tested

| Route | Type | File | Status |
|-------|------|------|--------|
| `/collections` | Static | `pages/collections/index.js` | ✅ Working |
| `/collection/[customKey]` | Dynamic | `pages/collection/[customKey].js` | ✅ Working |
| `/search` | Static | `pages/search/index.js` | ✅ Working |
| `/archive/[customKey]` | Dynamic | `pages/archive/[customKey].js` | ✅ Working |
| `/siteAdmin` | Static | `pages/siteAdmin/index.js` | ✅ Working |
| `/siteAdmin/pre-ingest-check` | Nested | `pages/siteAdmin/pre-ingest-check.js` | ✅ Working |
| `/podcastDeposit` | Static | `pages/podcastDeposit/index.js` | ✅ Working |

## Test Results

```bash
# All routes verified with curl:
curl http://.../collections → <h1>Browse Collections</h1>
curl http://.../search → <h1>Search Page</h1>
curl http://.../archive/test → <h1>Archive Detail Page</h1>
curl http://.../siteAdmin → <h1>Site Admin Dashboard</h1>
curl http://.../siteAdmin/pre-ingest-check → <h1>Pre-Ingest Check</h1>
curl http://.../podcastDeposit → <h1>Podcast Deposit</h1>
```

## Next Steps (Migration Phase)

### Priority 1: Collection Detail Page
- Copy `CollectionsShowPage.tsx` logic from CRA
- Copy `useGetCollection` hook
- Copy child components (CollectionMetadataSection, CollectionItems, etc.)
- Test data loading with Amplify

### Priority 2: Collections Browse Page
- Copy `BrowseCollections` component
- Implement pagination
- Add collection cards with thumbnails

### Priority 3: Search Page
- Copy `SearchLoader` component
- Implement Elasticsearch/Amplify search
- Add filters and results display

### Priority 4: Archive Detail Page
- Copy `ArchivePage` component
- Copy `useGetArchive` hook
- Add media players and download links

### Priority 5: Admin Pages
- Copy admin components
- Add authentication checks
- Implement content management tools

### Priority 6: Podcast Deposit
- Copy form wizard
- Add file upload handlers
- Implement validation

## Deployment Info

- **Build Time:** ~2 minutes
- **Platform:** Docker on AL2023
- **Instance:** t3.small (~$0.02/hr)
- **Docker Image:** node:20-alpine (single-stage)
- **Health Check:** /api/healthz (200 OK)

## CRA vs Next.js Routing Comparison

### CRA (React Router)
- Manual route definitions in `App.js`
- Uses `<Route path="/collection/:customKey" element={...} />`
- Extract params with `useParams()`: `const { customKey } = useParams()`

### Next.js (File-based)
- Automatic route registration from file structure
- File `pages/collection/[customKey].js` creates route `/collection/:customKey`
- Extract params with `useRouter()`: `const { customKey } = router.query`

