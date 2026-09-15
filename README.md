# Dazzlon — Complexity. Engineered.

The production website for Dazzlon, an enterprise technology consulting and custom engineering firm.

## Project structure

```
.
├── assets/
│   └── images/        # Production image assets
├── css/               # Site and transition styles
├── js/                # Navigation, page content, and interactions
├── index.html         # Homepage
├── service-*.html     # Service routes
├── technology-*.html  # Technology routes
├── industry-*.html    # Industry routes
└── vercel.json        # Hosting configuration
```

All public HTML routes stay at the repository root so their production URLs remain stable.

## Local preview

Serve the repository with any static HTTP server and open `http://localhost:4173`.

```bash
npx serve . -l 4173
```

## Technology

Semantic HTML, modern CSS, and vanilla JavaScript. No runtime framework or package installation is required.

© 2026 Dazzlon Computer Services, Inc. All rights reserved.
