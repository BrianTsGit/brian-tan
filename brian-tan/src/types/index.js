import { shape, number, string, oneOf } from 'prop-types';

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
    size: string
});