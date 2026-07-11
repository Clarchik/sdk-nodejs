export type LiqPayLanguage = 'ru' | 'uk' | 'en';
export type LiqPayStringValue = string | number | boolean;

export interface LiqPayParams {
  version?: number | string;
  action?: LiqPayStringValue;
  amount?: number | string;
  currency?: LiqPayStringValue;
  description?: LiqPayStringValue;
  language?: LiqPayLanguage | string;
  public_key?: string;
  [key: string]: unknown;
}

export interface LiqPayPreparedParams extends LiqPayParams {
  version: number;
  action: string;
  amount: number;
  currency: string;
  description: string;
  public_key: string;
}

export interface LiqPayFormObject {
  data: string;
  signature: string;
}

declare class LiqPay {
  host: string;
  availableLanguages: LiqPayLanguage[];
  buttonTranslations: Record<LiqPayLanguage, string>;

  constructor(public_key: string, private_key: string);

  api<TResponse = unknown>(path: string, params: LiqPayParams): Promise<TResponse>;
  cnb_form(params: LiqPayParams): string;
  cnb_signature(params: LiqPayParams): string;
  cnb_params(params: LiqPayParams): LiqPayPreparedParams;
  str_to_sign(str: string): string;
  cnb_object(params: LiqPayParams): LiqPayFormObject;
}

export { LiqPay };
export default LiqPay;
