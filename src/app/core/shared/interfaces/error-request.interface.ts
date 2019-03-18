export interface ErrorRequest {
  id: string;
  appId: string;
  name: string;
  user: string;
  time: string;
  url: string;
  status: string;
  message: string;
  stack: any;
}
