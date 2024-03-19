export interface Orders {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    street: string;
    additionalInfo: string;
    pinCode: string;
    landmark: string;
    district: string;
    state: string;
    country: string;
    additionalMobile: string;
    termsAndConditions: boolean;
    updatedCartItems?:any;
    updatedBill?: any;
}
