import * as yup from 'yup';

export const validationSchema = yup.object({
  broker: yup
    .string('Choose the broker')
    .oneOf(
      ['Freedom Finance', 'Interactive Brokers'],
      'choose the correct broker'
    )
    .required('Broker is required'),
  //   date: yup.date().required('Date is required'),
  ticker: yup.string('Enter your ticker').required('Ticker is required'),
  quantity: yup
    .number('Enter number')
    .positive('Enter a positive quantity')
    .integer('Enter a integer quantity')
    .required('Quantity is required'),
  cost: yup
    .number('Enter a number')
    .positive('Enter a positive number')
    .required('Cost is required'),
  brokerСommission: yup
    .number('Enter a number')
    .positive('Enter a positive number')
    .required('Brokerage fee is required'),
});
