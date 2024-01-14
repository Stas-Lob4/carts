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
      d={'M5.27331 7.06L2.21998 4L5.27331 0.94L4.33331 0L0.333313 4L4.33331 8L5.27331 7.06Z'}
      fill={'white'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
