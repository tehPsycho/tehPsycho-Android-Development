# Android + Wear OS Development Repo

This repository is structured to support:

- Shared/common Android and Wear OS assets that can be reused across projects.
- Individually organized watch face projects.
- Individually organized privacy statements/policies for each watch face.

## Repository Structure

```text
.
├── common/                              # Shared resources used by multiple projects
│   ├── design-tokens/                   # Colors, typography, spacing conventions
│   ├── docs/                            # Shared technical docs/checklists
│   └── templates/                       # Reusable starter templates/snippets
├── watchfaces/                          # One folder per watch face project
│   ├── _template/                       # Copy this to start a new watch face
│   │   ├── README.md
│   │   ├── android-studio/
│   │   └── privacy/
│   └── neon-orbit-watchface/            # Your 2nd and newest watch face
│       ├── README.md
│       ├── android-studio/              # Connect Android Studio project here
│       │   └── .gitkeep
│       └── privacy/
│           └── PRIVACY_POLICY.md
├── legal/                               # Published privacy policy artifacts
│   ├── vintage-mustang-watch-privacy-policy.html
│   └── neon-orbit-watchface-privacy-policy.html
└── .gitkeep
```

## How to Start a New Watch Face

1. Copy `watchfaces/_template` to `watchfaces/<your-watchface-slug>`.
2. Open Android Studio and create/import your watch face app.
3. Place the Android Studio project inside `watchfaces/<your-watchface-slug>/android-studio`.
4. Update that watch face's `README.md` and `privacy/PRIVACY_POLICY.md`.
5. (Optional) Export a public HTML policy into `legal/`.

## Connecting Your Newest Watch Face from Android Studio

For your second/newest watch face (`neon-orbit-watchface`):

1. In Android Studio, choose **Open** (existing project) or **New Project**.
2. Set/select project location:
   `.../tehPsycho-Android-Development/watchfaces/neon-orbit-watchface/android-studio`
3. Initialize modules as normal (Wear OS app/watch face service).
4. Commit from repo root so project and privacy docs stay together.

## Naming Recommendations

- Use lowercase kebab-case folder names (example: `neon-orbit-watchface`).
- Keep privacy statements near each project in `privacy/`.
- Keep publish-ready legal pages in `legal/`.
