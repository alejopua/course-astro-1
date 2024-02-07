---
title: 'Contenido de la página'
layout: '../../layouts/Layout.astro'
---

# Contenido de la página

Este es el contenido de la página.

lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac libero nec nunc tincidunt aliquam

``` javascript
 function getPosts() {
  const posts = import.meta.globEager('../pages/**/*.md')
  return Object.keys(posts).map((path) => {
    const [, slug] = path.match(/\.\/pages\/(.*?).md$/)
    const { metadata } = posts[path]
    return {
      slug,
      metadata,
    }
  })
```