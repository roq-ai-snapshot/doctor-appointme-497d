interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Healthcare Provider', 'Medical Staff', 'Insurance Provider'],
  tenantName: 'Clinic',
  applicationName: 'Doctor Appointment System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read clinic information',
    'Read appointment information',
    'Read insurance information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage clinic data',
    'Manage appointment data',
    'Manage healthcare provider data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b295cf40-bc08-42e9-839a-f211594e2e1d',
};
