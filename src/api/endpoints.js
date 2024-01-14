export const API ={
    // Authentication 
    SignUp : '/Auth/Signup', //post 
    Login : '/Auth/SignIn', //post 
    RefreshToken : '/Auth/TokenRefresh',  //post 
    RevokeToken : '/Auth/TokenRevoke',  //post 
    ChangePassword : '/api/Auth/ChangePassword',  //post 
    GetLoginUser : '/Auth/GetLoggedInUser', //get 
    GetProfile : '/Auth/UpdateProfilePicture', // patch 

    // User...... 
    PostUser : '/User/Create', //post 
    GetUser : '/User/GetAll', //get  
    GetSingleUser : '/User/GetById/{DocId}' , //get 
    DeleteUser : '/User/DeleteById/{DocId}', // delete 

    // Space Type 
    CreateSpaceType : '/SpaceType/Create' , // post 
    GetSpaceType : '/SpaceType/GetAll', //get 
    GetSingleSpaceType : '/SpaceType/GetById/{DocId}', //get 
    UpdateSpaceType : '/SpaceType/UpdateById/{DocId}', //patch 
    DeleteSpaceType : '/SpaceType/DeleteById/{DocId}', //delete

    //SpaceAccess Option 
    SpaceAccessCreate : '/SpaceAccessOption/Create', //post 
    GetSpaceAccessOption : '/SpaceAccessOption/GetAll', // get 
    GetSingleAccessOption : '/SpaceAccessOption/GetById/{DocId}', //get 
    UpdateAccessOption : '/SpaceAccessOption/UpdateById/{DocId}', //update-patch 
    DeleteAccessOption : '/SpaceAccessOption/DeleteById/{DocId}', //delete 

    // Storage  Condition Features 
    StorageConditionCreate : '/api/StorageConditionFeature/Create', //post 
    GetStorageCondition : '/api/StorageConditionFeature/GetAll', // get 
    DeleteStorageCondition : '/api/StorageConditionFeature/DeleteById', // delete 

    // Space Security Features 
    SpaceSecurityFeatureCreate : '/api/SpaceSecurityFeature/Create', //post 
    GetSpaceSecurityFeature : '/api/SpaceSecurityFeature/GetAll', //get 
    DeleteSpaceSecurityFeature : '/api/SpaceSecurityFeature/DeleteById/{DocId}', //delete 

    // Space Schedule Features  
    SpaceScheduleFeatureCreate : '/api/SpaceScheduleFeature/Create', //post 
    GetSpaceScheduleFeature : '/api/SpaceScheduleFeature/GetAll', //get 
    DeleteSpaceScheduleFeature: '/api/SpaceScheduleFeature/DeleteById/{DocId}', //delete 


    // Space For Rent 
    SpaceForRentCreate : '/api/SpaceForRent/Create', //post 
    GetSpaceForRent : '/api/SpaceForRent/GetAll', //get 
    GetSingleSpaceForRent: '/api/SpaceForRent/GetById/{DocId}', //get 
    UpdateSpaceForRent : '/api/SpaceForRent/UpdateById/{DocId}', //update
    DeleteSpaceForRent: '/api/SpaceForRent/DeleteById/{DocId}', //delete

    AddSpaceImage : '/api/SpaceForRent/AddSpaceImageById/{DocId}', //post 
    DeleteSpaceImage : '/api/SpaceForRent/DeleteSpaceImageById/{SpaceId}/{ImageId}', //delete 


}