export class AppSettings {

    // LAWYER ENDPOINTS
    public static API_ENDPOINT = 'http://127.0.0.1:6666/api';
    public static LAWYER_REGISTER_POST = AppSettings.API_ENDPOINT + '/lawyer/register';
    public static LAWYER_SAVE_DETAILS_POST = AppSettings.API_ENDPOINT + '/lawyer/saveDetails';
    public static LAWYER_UPLOAD_DOCUEMENTS_POST = AppSettings.API_ENDPOINT + '/lawyer/uploadDocuments/{lawyerId}';
    public static LAWYER_SEARCH_POST = AppSettings.API_ENDPOINT + '/lawyer/searchLawyers';
    public static LAWYER_CASES_GET = AppSettings.API_ENDPOINT + '/lawyer/getRelatedCases/{lawyerId}';
    public static LAWYER_CASES_STATUS_GET = AppSettings.API_ENDPOINT + '/lawyer/getLawyerCasesByStatus/{lawyerId}/{statusId}';
    public static LAWYER_BASIC_INFO_GET = AppSettings.API_ENDPOINT + '/lawyer/getBasicInfo/{lawyerId}';
    public static LAWYER_ALL_INFO_GET = AppSettings.API_ENDPOINT + '/lawyer/getAllInfo/{lawyerId}';
    public static LAWYER_EDIT_POST = AppSettings.API_ENDPOINT + '/lawyer/edit';

    //CASES ENDPOINTS
    public static CASES_ADD_POST = AppSettings.API_ENDPOINT + '/cases/add';
    public static CASES_DELETE_POST = AppSettings.API_ENDPOINT + '/cases/delete';
    public static CASES_EDIT_POST = AppSettings.API_ENDPOINT + '/cases/edit';
    public static CASES_GET = AppSettings.API_ENDPOINT + '/cases/get/{caseId}';
    public static CASES_LIST_GET = AppSettings.API_ENDPOINT + '/cases/listCases';

    //OFFICE ENDPOINTS
    public static OFFICE_REGISTER_POST = AppSettings.API_ENDPOINT + '/office/register';

    //QUESTION ENDPOINTS
    public static QUESTION_ADD_POST = AppSettings.API_ENDPOINT + '/question/addQuestion';
    public static QUESTION_GET = AppSettings.API_ENDPOINT + '/question/getQuestion/{questionId}';
    public static QUESTION_LIST_NEW_GET = AppSettings.API_ENDPOINT + '/question/listNewQuestions';
    public static QUESTION_LIST_OLD_GET = AppSettings.API_ENDPOINT + '/question/listOldQuestions';
    public static QUESTION_UPDATE_POST = AppSettings.API_ENDPOINT + '/question/updateQuestion';



}