import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
    [
        'inline-flex items-center justify-center',
        'font-[inherit] text-[inherit]',
        'border-0 outline-none',
        'cursor-pointer select-none',
        'transition-colors duration-200',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
    ].join(' '),
    {
        variants: {
            variant: {
                regular: '',
                primary: '',
                secondary: '',

                link: [
                    'h-9 w-9 rounded-full',
                    'hover:bg-[#e7ebdc]',
                    'focus-visible:outline-[#4d6500]',
                ].join(' '),
            },
        },
        defaultVariants: {
            variant: 'regular',
        },
    },
);

type OwnProps = {
    children: ReactNode;
    className?: string;
} & VariantProps<typeof buttonStyles>;

type PolymorphicProps<T extends ElementType> = {
    as?: T;
} & OwnProps &
    Omit<ComponentPropsWithoutRef<T>, keyof OwnProps | 'as'>;

export const Button = <T extends ElementType = 'button'>({
     as,
     children,
     className,
     variant,
     ...rest
}: PolymorphicProps<T>) => {
    const Component = as ?? 'button';

    return (
        <Component
            className={twMerge(buttonStyles({ variant }), className)}
            {...rest}
        >
            {children}
        </Component>
    );
};