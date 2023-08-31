import clsx from 'clsx'

import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'

export const MDXComponents = {
  img: function Img({ className, ...props }) {
    return (
      <div
        className={clsx(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className,
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    )
  },
  Typography({ className, ...props }) {
    return <div className={clsx('typography', className)} {...props} />
  }
}
