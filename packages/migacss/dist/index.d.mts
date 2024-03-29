import React from 'react';

type PrefixedCSSProperties = {
    [P in keyof React.CSSProperties as P extends string ? `$${P}` : never]: React.CSSProperties[P];
};
type Miga = {
    [K in keyof React.ReactHTML]: React.FunctionComponent<React.ComponentProps<K> & PrefixedCSSProperties & {
        children?: React.ReactNode;
    }>;
};
declare const $: Miga;

export { $ };
