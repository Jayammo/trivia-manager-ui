import * as yup from 'yup';

export const yupSchema = yup.object().shape({
	title: yup.string().required('Title is required!'),
	startDate: yup.date().required('Start Date is required!'),
	duration: yup.number().required('Duration is required!'),
	locationName: yup.string().required('Location Name is required!'),
	location: yup.string().required('Location is required!'),
});
