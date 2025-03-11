import React from "react"

// We want to have UI only components so we can use different frameworks. For now, I'm having issues getting the types to match, but the basic functionality works fine. So, when using this feature, just tell TS it's ok by saying `Image as ImageProp`, etc.

// See `node_modules/next/dist/client/image-component.d.ts`.
export type ImageProp = React.ForwardRefExoticComponent<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > &
  React.RefAttributes<HTMLImageElement | null>
>

// See `node_modules/next/dist/client/link.d.ts`.
export type LinkProp = React.ForwardRefExoticComponent<
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  { children?: React.ReactNode | undefined } &
  React.RefAttributes<HTMLAnchorElement>
>
