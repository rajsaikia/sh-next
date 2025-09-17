
# Blueprint

## Overview

This document outlines the architecture and development plan for this Next.js project. It is a blog application that allows users to view and filter blog posts by category.

## Project Architecture

*   `my-nextjs-app/`: Root directory.
    *   `.env.local`: Environment variables.
    *   `next.config.js`: Next.js configuration.
    *   `README.md`: Project documentation.
    *   `tsconfig.json`: TypeScript configuration.
    *   `public/`: Static assets (images, fonts, etc.).
    *   `src/`: Source code.
        *   `app/`: App Router (Next.js 13+).
            *   `(routes)/`: Route groups (e.g., dashboard, auth).
            *   `components/`: Reusable UI components.
                *   `ui/`: Atomic design (Button, Input, etc.).
            *   `features/`: Feature-based modules.
                *   `blog/`: The blog feature.
                    *   `components/`: Blog-specific components such as `BlogPage`, `BlogPostCard`, and `CategoryFilter`.
                    *   `services/`: API calls and data fetching. Contains the dummy data for the blog posts and categories.
        *   `lib/`: Shared utilities.
            *   `constants/`: Global constants.
            *   `styles/`: Global styles (CSS, SCSS, Tailwind).
            *   `types/`: Global TypeScript types.
        *   `config/`: App-wide configuration (env, theme, etc.).
        *   `middleware.ts`: Next.js middleware.

***

*This blueprint is a living document and will be updated as the project evolves.*
