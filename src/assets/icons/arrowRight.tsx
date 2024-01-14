import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'8'}
    ref={ref}
    viewBox={'0 0 6 8'}
    width={'6'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M0.726654 7.06L3.77999 4L0.726654 0.94L1.66665 0L5.66665 4L1.66665 8L0.726654 7.06Z'}
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
