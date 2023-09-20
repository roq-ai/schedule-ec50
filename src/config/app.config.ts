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
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Guest User', 'Administrator', 'Room Manager'],
  tenantName: 'COLAB',
  applicationName: 'SCHEDULE',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage users', 'Manage rooms', 'Manage reservations', 'Manage activities'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c3324070-b32c-4744-83e9-b7804af61b20',
};
