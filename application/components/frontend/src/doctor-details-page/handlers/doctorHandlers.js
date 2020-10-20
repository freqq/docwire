import RequestService from 'common/services/RequestService';

export const doctorDetails = doctorId => RequestService.get(`/api/users/details/${doctorId}`);

export const createReview = reviewData => RequestService.post(`/api/users/review`, reviewData);
