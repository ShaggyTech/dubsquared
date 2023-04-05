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

declare module '#app' {
  interface PageMeta {
    title?: string
    description?: string
  }
}

export {}
