import { shape, number, string, oneOf, bool } from 'prop-types';

export const yelpBusinessType = shape({
    yelp_id: string.isRequired,
    name: string.isRequired,
    image_url: string.isRequired,
    url: string.isRequired,
    review_count: number.isRequired,
    rating: number.isRequired,
    price: string.isRequired,
    location: shape({
        city: string,
        address1: string
    }).isRequired
});

export const roundThumbnailType = shape({
    _id: string,
    text: string.isRequired,
    image_url: string.isRequired,
    category: string
});

export const featureItemType = shape({
    _id: string,
    text: string.isRequired,
    image_url: string.isRequired,
    url: string.isRequired
});

export const titleCardType = shape({
    _id: string,
    headline: string.isRequired,
    image_url: string.isRequired,
    url: string.isRequired,
    creator: string.isRequired,
    category: string.isRequired,
    size: string
});

export const headlineFeedItemType = shape({
    _id: string,
    url: string.isRequired,
    headline: string.isRequired,
    description: string.isRequired,
    time_published: number.isRequired,
    image_url: string.isRequired
})

export const recommendationItemType = shape({
    isActive: bool,
    image_url: string.isRequired,
    category: string.isRequired
})

export const lookBookItemType = shape({
    _id: string.isRequired,
    image_url: string.isRequired,
    description: string.isRequired,
    url: string.isRequired,
    photo_count: number.isRequired
})