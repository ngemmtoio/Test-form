export enum StepsForm {
  ENTER_USER_DATA = 'enter_user_data',
  ENTER_PASSWORD = 'enter_password',
  USER_DATA = 'user_data',
}

export let subTitleMap = {
  [StepsForm.ENTER_USER_DATA]: 'Initial info',
  [StepsForm.ENTER_PASSWORD]: 'Password screen',
  [StepsForm.USER_DATA]: 'Review screen',
};

export let dataUserFill = {
  name: '',
  email: '',
  country: '',
  phoneNumber: '',
};
