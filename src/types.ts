export enum BuildType {
  STAGING = "STAGING",
  SANDBOX = "SANDBOX",
  PRODUCTION = "PRODUCTION",
}

export enum ModalType {
  WIDGET = "WIDGET",
  ONBOARDING = "ONBOARDING",
}

export enum OrderStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

export enum AuthType {
  PHONE = "Phone",
  EMAIL = "Email",
  GAUTH = "GAuth",
}

export interface OktoContextType {
  isLoggedIn: boolean;
  authenticate: (
    idToken: string,
    callback: (result: any, error: any) => void,
  ) => void;
  authenticateWithUserId: (
    userId: string,
    jwtToken: string,
    callback: (result: any, error: any) => void,
  ) => void;
  logOut: () => void;
  getPortfolio(): Promise<PortfolioData>;
  getSupportedNetworks: () => Promise<NetworkData>;
  getSupportedTokens: () => Promise<TokensData>;
  getUserDetails: () => Promise<User>;
  getWallets: () => Promise<WalletData>;
  orderHistory: (query: Partial<OrderQuery>) => Promise<OrderData>;
  getNftOrderDetails(
    query: Partial<NftOrderDetailsQuery>,
  ): Promise<NftOrderDetailsData>;
  getRawTransactionStatus(
    query: RawTransactionStatusQuery,
  ): Promise<RawTransactionStatusData>;
  createWallet: () => Promise<WalletData>;
  transferTokens: (data: TransferTokens) => Promise<TransferTokensData>;
  transferTokensWithJobStatus: (data: TransferTokens) => Promise<Order>;
  transferNft: (data: TransferNft) => Promise<TransferNftData>;
  transferNftWithJobStatus(data: TransferNft): Promise<NftOrderDetails>;
  executeRawTransaction: (
    data: ExecuteRawTransaction,
  ) => Promise<ExecuteRawTransactionData>;
  executeRawTransactionWithJobStatus(
    data: ExecuteRawTransaction,
  ): Promise<RawTransactionStatus>;
  showWidgetModal: () => void;
  showOnboardingModal: (
    primaryAuth?: AuthType,
    title?: string,
    subtitle?: string,
    iconUrl?: string,
  ) => void;
  closeModal: () => void;
  getTheme: () => Theme;
  setTheme: (theme: Partial<Theme>) => void;
  sendEmailOTP: (email: string) => Promise<SendOTPResponse>;
  verifyEmailOTP: (
    email: string,
    otp: string,
    token: string,
  ) => Promise<boolean>;
  sendPhoneOTP: (
    phoneNumber: string,
    countryShortName: string,
  ) => Promise<SendOTPResponse>;
  verifyPhoneOTP: (
    phoneNumber: string,
    countryShortName: string,
    otp: string,
    token: string,
  ) => Promise<boolean>;
  readContractData: (network_name: string, data: any) => Promise<any>;
}

export interface ApiResponse<T> {
  data: T;
  status: string;
}

export type Callback<T> = (result: T | null, error: Error | null) => void;

export interface AuthDetails {
  authToken: string;
  refreshToken: string;
  deviceToken: string;
}

export interface Network {
  network_name: string;
  chain_id: string;
}

export interface NetworkData {
  network: Network[];
}

export interface NftOrderDetailsQuery {
  page: number;
  size: number;
  order_id: string;
}

export interface NftOrderDetails {
  explorer_smart_contract_url: string;
  description: string;
  type: string;
  collection_id: string;
  collection_name: string;
  nft_token_id: string;
  token_uri: string;
  id: string;
  image: string;
  collection_address: string;
  collection_image: string;
  network_name: string;
  network_id: string;
  nft_name: string;
}

export interface NftOrderDetailsData {
  count: number;
  nfts: NftOrderDetails[];
}

export interface OrderQuery {
  offset: number;
  limit: number;
  order_id: string;
  order_state: string;
}

export interface Order {
  order_id: string;
  network_name: string;
  order_type: string;
  status: string;
  transaction_hash: string;
}

export interface OrderData {
  total: number;
  jobs: Order[];
}

export interface Portfolio {
  token_name: string;
  token_image: string;
  token_address: string;
  network_name: string;
  quantity: string;
  amount_in_inr: string;
}

export interface PortfolioData {
  tokens: Portfolio[];
  total: number;
}

export interface Token {
  token_name: string;
  token_address: string;
  network_name: string;
}

export interface TokensData {
  tokens: Token[];
}

export interface User {
  email: string;
  user_id: string;
  created_at: string;
  freezed: string;
  freeze_reason: string;
}

export interface Wallet {
  network_name: string;
  address: string;
  success: boolean;
}

export interface WalletData {
  wallets: Wallet[];
}

export interface RawTransactionStatusQuery {
  order_id: string;
}

export interface RawTransactionStatus {
  order_id: string;
  network_name: string;
  status: string;
  transaction_hash: string;
}

export interface RawTransactionStatusData {
  total: number;
  jobs: RawTransactionStatus[];
}

export interface TransferTokens {
  network_name: string;
  token_address: string;
  quantity: string;
  recipient_address: string;
}

export interface TransferTokensData {
  orderId: string;
}

export interface TransferNft {
  operation_type: string;
  network_name: string;
  collection_address: string;
  collection_name: string;
  quantity: string;
  recipient_address: string;
  nft_address: string;
}

export interface TransferNftData {
  order_id: string;
}

export interface ExecuteRawTransaction {
  network_name: string;
  transaction: object;
}

export interface ExecuteRawTransactionData {
  jobId: string;
}

export interface Theme {
  textPrimaryColor: string;
  textSecondaryColor: string;
  textTertiaryColor: string;
  accent1Color: string;
  accent2Color: string;
  strokeBorderColor: string;
  strokeDividerColor: string;
  surfaceColor: string;
  backgroundColor: string;
}

export interface ModalData {
  theme: Theme;
  authToken: string;
  environment: string;
}

export interface BrandData {
  title: string;
  subtitle: string;
  iconUrl: string;
}

export interface OnboardingModalData {
  theme: Theme;
  apiKey: string;
  environment: string;
  primaryAuthType: AuthType;
  brandTitle: string;
  brandSubtitle: string;
  brandIconUrl: string;
}

export interface InjectData {
  textPrimaryColor: string;
  textSecondaryColor: string;
  textTertiaryColor: string;
  accent1Color: string;
  accent2Color: string;
  strokeBorderColor: string;
  strokeDividerColor: string;
  surfaceColor: string;
  backgroundColor: string;
  ENVIRONMENT: string;
  authToken: string;
}

export interface SendOTPResponse {
  status: string;
  message: string;
  code: number;
  token: string;
  trace_id: string;
}

export interface VerifyEmailOTPRequest {
  email: string;
  otp: string;
  token: string;
}

export interface OTPAuthResponse {
  auth_token: string;
  message: string;
  refresh_auth_token: string;
  device_token: string;
  trace_id: string;
}

export type ContractReadData = {
  contractAddress: string;
  abi: any;
  args: Record<string, any>;
};
