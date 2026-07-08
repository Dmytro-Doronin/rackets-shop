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
        <path d="M2.75 4.5h3.2l2.5 12.25h9.95l2.85-8.2H7.15" />
        <path d="M8.9 20.75h.02" />
        <path d="M18.15 20.75h.02" />
        <path d="M16.75 4.5h3.9" />
    </svg>
);
const SvgIcon = memo(forwardRef(SvgComponent)) as MemoExoticComponent<
    ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
>;

export default SvgIcon;
