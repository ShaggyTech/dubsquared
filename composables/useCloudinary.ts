import { CLOUD_NAME, VERSION } from '~/utils/cloudinary'

interface Props {
  path: string
  id: string
  quality?: number
  width?: number
  height?: number
  dpr?: string
}

export const useCloudinary = ({
  path,
  id,
  quality,
  width,
  height,
  dpr,
}: Props): string => {
  const [fileName, extension] = path.split('.')
  const q = quality ? `,q_${quality}` : ',q_auto'
  const w = width ? `,w_${width}` : ''
  const h = height ? `,h_${height}` : ''
  const d = dpr ? `,dpr_${dpr}` : ''
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/c_scale${
    q + w + h + d
  }/${VERSION}/${fileName}_${id}.${extension}`
}

export const useCloudinaryPlaceholder = ({
  height,
  width,
}: {
  height?: number
  width?: number
}): string => {
  return useCloudinary({
    path: '/images/placeholders/placeholder-1080x810.webp',
    id: 'iwgwfp',
    height,
    width,
  })
}
