// const BASE_URL = 'https://groom.tryngo-services.pk/api/';
import {Google_api_key, BASE_URL} from '@env';
const endPoints = {
  //Auth
  signUp: BASE_URL.toString() + 'mobilesignup',
  signUpOTP: BASE_URL + 'emailverify',
  login: BASE_URL + 'mobilelogin',
  editProfile: BASE_URL + 'updateuserinfo',
  checkusername: BASE_URL + 'checkusername',
  forgetPassword: BASE_URL + 'forgotpassword',
  forgetPasswordConfirmOTP: BASE_URL + 'forgotpasswordotp',
  newPassword: BASE_URL + 'newpassword',
  //   logout: BASE_URL + 'mobilelogout',
  //profile
  getuserinfo: BASE_URL + 'getuserinfo',

  // Catagory details
  getmainservices: BASE_URL + 'getmainservices',
  getallsubcats: BASE_URL + 'getallsubcats',
  getmainsubcats: BASE_URL + 'getmainsubcats',
  adduserrating: BASE_URL + 'adduserrating',
  getjobsbymaincats: BASE_URL + 'getjobsbymaincats',
  /// SERVICES PROVIDER JOB LISTING ARRAY FOR ACTIVE
  getspjobslist: BASE_URL + 'getspjobslist',
  // Job Listing Details
  getjobslist: BASE_URL + 'getjobslist',
  addjobs: BASE_URL + 'addjobs',
  getjobsbyrole: BASE_URL + 'getjobsbyrole',
  getjobdetails: BASE_URL + 'getjobdetails',
  addjobrequest: BASE_URL + 'addjobrequest',
  getjobrequestdetails: BASE_URL + 'getjobrequestdetails',
  ///get Questionsubcat
  getmainsubquestioncats: BASE_URL + 'getmainsubquestioncats',
  acceptJobRequest: 'addjobrequest',
  // get uset rating
  // Google_api_key: 'AIzaSyCB59pcScbhhVj5SD6-m1is6v0Qq3cGwT4',
  getmainservicequestion: BASE_URL + 'getmainservicequestion',
  getmainservicequestionoption: BASE_URL + 'getmainservicequestionoption',
  getquestionoptionactivities: BASE_URL + 'getquestionoptionactivities',
  getquestionoptionclassification: BASE_URL + 'getquestionoptionclassification',
  addOrUpdateAdress: BASE_URL + 'useraddress',
  deleteAdress: BASE_URL + 'deleteuseraddress',
  getAdress: BASE_URL + 'getuseraddress',
  addOrUpdateCard: BASE_URL + 'usercreditcard',
  deleteCard: BASE_URL + 'deleteusercreditcard',
  getCards: BASE_URL + 'getusercreditcard',

  /// Start Job By QR Code From User side
  usercheckqrcodejobstart: BASE_URL + 'usercheckqrcodejobstart',
  changejobstatus: BASE_URL + 'changejobstatus',

  ///Calulate Post Job Price

  getprice: BASE_URL + 'getjobprice',
};

export {endPoints};
