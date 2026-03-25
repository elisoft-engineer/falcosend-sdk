export interface SubmissionPayload {
  form_name: string;
  data: string | Record<string, any>;
}

export interface FalcoSendConfig {
  submissionKey: string;
  url?: string;
}

export interface SubmissionResponse {
  id: string;
  form_name: string;
  created_at: string;
  [key: string]: any;
}