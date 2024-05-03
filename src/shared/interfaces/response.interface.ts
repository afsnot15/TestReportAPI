export interface IResponse<T> {
  message: string | null | undefined;
  timestamp: Date;
  data: T | null | undefined;
}
