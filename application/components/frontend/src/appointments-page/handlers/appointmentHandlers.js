/* eslint-disable import/prefer-default-export */
import RequestService from 'common/services/RequestService';

export const appointmentsList = () => RequestService.get(`/api/appointments/details/all`);