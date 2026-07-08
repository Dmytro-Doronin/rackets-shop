import {
    type Ref,
    type SVGProps,
    forwardRef,
    memo,
    type MemoExoticComponent,
    type ForwardRefExoticComponent,
} from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        aria-hidden="true"
        {...props}
        ref={ref}
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="9.25" />
        <circle cx="12" cy="9" r="3" />
        <path d="M6.9 18.45c1.15-2.05 2.85-3.08 5.1-3.08s3.95 1.03 5.1 3.08" />
    </svg>
);
const SvgIcon = memo(forwardRef(SvgComponent)) as MemoExoticComponent<
    ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
>;

export default SvgIcon;
