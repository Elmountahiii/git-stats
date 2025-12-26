# Git Stats

A modern web application for visualizing GitHub user statistics. Search for any GitHub user and instantly explore their coding activity, repository insights, and contribution patterns through an interactive dashboard.

---

## Demo

**[Try it live](https://stats.elmountahi.dev/)**

![Git Stats Dashboard](./public/demo-screenshot.png)

---

## Features

- **User Search**: Look up any GitHub user by username
- **Contribution Statistics**: View total commits, contribution streaks, and activity rankings
- **Commit Activity Charts**: Visualize coding patterns over time with interactive charts
- **Language Breakdown**: See the programming languages used across repositories
- **Top Repositories**: Browse a user's most popular and actively maintained projects
- **Organization Membership**: View organizations the user belongs to
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons**: Lucide React
- **API**: GitHub GraphQL API

## Prerequisites

- Node.js 22 or later (LTS recommended)
- npm, yarn, pnpm, or bun
- GitHub Personal Access Token

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/git-stats.git
cd git-stats
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```bash
GITHUB_ACCESS_TOKEN=your_github_personal_access_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

To generate a GitHub Personal Access Token:

1. Go to [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select the following scopes: `read:user`, `read:org`, `repo`
4. Copy the generated token to your `.env.local` file

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server             |
| `npm run build` | Build the application for production     |
| `npm run start` | Start the production server              |
| `npm run lint`  | Run ESLint to check for code issues      |

## Docker

### Using Docker Compose (recommended)

```bash
# Create .env file with required variables
cp .env.example .env

# Build and run
docker compose up -d
```

### Using Docker directly

```bash
# Build the image
docker build -t git-stats .

# Run the container
docker run -p 3000:3000 \
  -e GITHUB_ACCESS_TOKEN=your_token \
  -e NEXT_PUBLIC_BASE_URL=http://localhost:3000 \
  git-stats
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
git-stats/
├── app/
│   ├── api/                 # API routes
│   │   ├── commits/         # Commit data endpoint
│   │   ├── languages/       # Language statistics endpoint
│   │   ├── organizations/   # User organizations endpoint
│   │   ├── repositories/    # Repository data endpoint
│   │   ├── stats/           # User statistics endpoint
│   │   └── users/           # User profile endpoint
│   ├── components/          # React components
│   │   ├── info-page/       # Dashboard page components
│   │   └── landing-page/    # Landing page components
│   ├── info/                # User statistics dashboard page
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Landing page
├── public/                  # Static assets
├── Dockerfile               # Docker configuration
├── docker-compose.yml       # Docker Compose configuration
└── package.json             # Project dependencies
```

## API Endpoints

| Endpoint                          | Description                        |
| --------------------------------- | ---------------------------------- |
| `GET /api/users?username=`        | Fetch user profile information     |
| `GET /api/stats?username=`        | Fetch user contribution statistics |
| `GET /api/commits?username=`      | Fetch commit activity data         |
| `GET /api/languages?username=`    | Fetch language usage statistics    |
| `GET /api/repositories?username=` | Fetch user repositories            |
| `GET /api/organizations?username=`| Fetch user organizations           |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
