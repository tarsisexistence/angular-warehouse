import { TypedRoute } from '@routerkit/core';
export type TypedRoutes = {
    ROOT: TypedRoute<[
        '/'
    ]>;
    shop: {
        ROOT: TypedRoute<[
            '/',
            'shop'
        ]>;
        all: TypedRoute<[
            '/',
            'shop',
            'all'
        ]>;
    } & {
        [category: string]: TypedRoute<[
            '/',
            'shop',
            string
        ]>;
    };
    location: {
        ROOT: TypedRoute<[
            '/',
            'location'
        ]>;
        map: TypedRoute<[
            '/',
            'location',
            'map'
        ]>;
        stocklist: TypedRoute<[
            '/',
            'location',
            'stocklist'
        ]>;
    };
    'user-center': {
        [id: string]: TypedRoute<[
            '/',
            'user-center',
            string
        ]>;
    };
    cart: TypedRoute<[
        '/',
        'cart'
    ]>;
} & {
    [wildcard: string]: TypedRoute<[
        '/',
        string
    ]>;
};
