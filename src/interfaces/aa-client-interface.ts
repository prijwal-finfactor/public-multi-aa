export interface AAClient {
  getConsentDetailsFromConsentHandle(): Promise<void>
  triggerOtp(): Promise<void>
  verifyOtp(otp: string): Promise<void>
  getAllLinkedAcc(): Promise<void>
  getFipList(): Promise<void>
  addIdentitfier(): Promise<void>
  addMobileNumber(): Promise<void>
  getAllAccounts(): Promise<void>
  triggerAccLinkingOtp(): Promise<void>
  verifyAccLinkingOTP(): Promise<void>
  grantConsentPermission(): Promise<void>
}
