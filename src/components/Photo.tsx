import type { ImgHTMLAttributes } from 'react';
import { fallbackSrc, srcSet, type Photo as PhotoData } from '../data/content';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'alt' | 'width' | 'height'> & {
  photo: PhotoData;
  sizes: string;
  priority?: boolean;
};

/** Serves optimized WebP variants with the original JPEG as fallback. */
export function Photo({ photo, sizes, priority = false, ...rest }: Props) {
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet(photo)} sizes={sizes} />
      <img
        src={fallbackSrc(photo)}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        {...rest}
      />
    </picture>
  );
}
