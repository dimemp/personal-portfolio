# Personal portfolio

Source for **[dimosiaris.com](https://dimosiaris.com/)** — a static personal site and portfolio built with [Hugo](https://gohugo.io/). This repository is shared openly under the MIT License so others can learn from the implementation or adapt it for their own projects.

## Stack

- **Hugo** (Extended) — static site generator  
- **Custom layouts & assets** — HTML templates, CSS, and vanilla JavaScript  
- **GitHub Actions** — build and deploy to GitHub Pages on pushes to `main`

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (required if the project uses Hugo Pipes features that need Extended, e.g. Sass)

## Local development

Clone the repository, then from the project root:

```bash
hugo server
```

Open the URL Hugo prints (typically `http://localhost:1313/`) to preview the site with live reload.

## Production build

```bash
hugo --minify
```

Output is written to `public/`. The included workflow builds the same way and publishes `public` to GitHub Pages.

## Repository layout

| Path | Purpose |
|------|--------|
| `content/` | Markdown and front matter for pages |
| `layouts/` | Hugo templates and partials |
| `assets/` | CSS, JavaScript, and other processed assets |
| `static/` | Files copied as-is to the site root |
| `hugo.toml` | Site configuration |

## Deployment

On every push to `main`, GitHub Actions builds the site and deploys it to GitHub Pages. The canonical workflow is [`.github/workflows/hugo.yaml`](.github/workflows/hugo.yaml); it is reproduced below for convenience.

Configure **Settings → Pages → Build and deployment** to use **GitHub Actions** (not a branch) if you fork this repository.

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true
      - name: Build
        run: hugo --minify
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## License

This project is licensed under the **MIT License** — see [`LICENSE`](LICENSE) for the full text. You may use, modify, and distribute the code according to those terms; attribution is preserved in the license file.

If you fork this for your own portfolio, replace personal content, imagery, and configuration (including `baseURL` and metadata in `hugo.toml`) with your own.

## Acknowledgments

Built and maintained by [Dimitris Dimosiaris](https://dimosiaris.com/).