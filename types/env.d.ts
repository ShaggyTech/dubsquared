// this is needed because Volar made a change in version 0.0.36 requiring html props be declared explicitly
// for native html elements
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
// for vue components
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}

// needed for Cloudflare wrangler env variables
declare global {
  interface GlobalSecrets {
    NUXT_SENDGRID_API_KEY: string
    NUXT_SENDGRID_FROM_EMAIL: string
    NUXT_SENDGRID_FROM_NAME: string
    NUXT_SENDGRID_TO_EMAIL: string
    NUXT_SENDGRID_TO_NAME: string
    NUXT_PUBLIC_COMPANY_EMAIL: string
    NUXT_PUBLIC_COMPANY_PHONE: string
  }
  type GS = typeof globalThis & GlobalSecrets
}

declare module '#app' {
  interface PageMeta {
    title?: string
    description?: string
  }
}

export {}
