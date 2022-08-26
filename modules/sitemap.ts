import { mkdirSync, writeFileSync } from 'node:fs'
import { Readable } from 'node:stream'
import { dirname } from 'node:path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'sitemap',
    version: '0.0.1',
    configKey: 'sitemap',
    compatibility: { nuxt: '^3.0.0' },
  },
  defaults: {
    hostname: 'https://dubsquared.com',
    dynamicRoutes: [],
  },
  setup(options, nuxt) {
    const generateSitemap = async (routes: any) => {
      // const sitemapRoutes = routes.map((route) => route.path);
      const sitemapRoutes: string[] = [
        ...routes
          .filter((route: any) => !route.path.includes(':'))
          .map((route: any) => route.path),
        ...(await options.dynamicRoutes),
      ]

      // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
      const stream = new SitemapStream({ hostname: options.hostname })
      return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(
        (data: any) => data.toString()
      )
    }

    const createSitemapFile = (sitemap: any, filepath: any) => {
      const dirPath = dirname(filepath)
      mkdirSync(dirPath, { recursive: true })
      writeFileSync(filepath, sitemap)
    }

    const resolver = createResolver(import.meta.url)
    const filePath = resolver.resolve(
      nuxt.options.srcDir,
      'node_modules/.cache/.sitemap/sitemap.xml'
    )

    nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || []
    nuxt.options.nitro.publicAssets.push({
      baseURL: '/',
      dir: dirname(filePath),
    })

    nuxt.hook('pages:extend', async (pages) => {
      const sitemap = await generateSitemap(pages)
      createSitemapFile(sitemap, filePath)
    })
  },
})
