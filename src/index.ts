import type { FalcoSendConfig, SubmissionPayload, SubmissionResponse } from './types.ts';

export class FalcoSend {
  private submissionKey: string;
  private url: string;

  constructor(config: FalcoSendConfig) {
    this.submissionKey = config.submissionKey;
    this.url = config.url || "https://api.falcosend.com/api/v1/submissions/create/";
  }

  /**
   * Submits form data to the FalcoSend API.
   * Automatically stringifies objects passed to the 'data' field.
   */
  async submit(payload: SubmissionPayload): Promise<SubmissionResponse> {
    const formattedData = typeof payload.data === 'object' 
      ? JSON.stringify(payload.data) 
      : payload.data;

    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-Submission-Key": this.submissionKey,
      },
      body: JSON.stringify({
        form_name: payload.form_name,
        data: formattedData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `Submission failed with status ${response.status}`);
    }

    return response.json();
  }
}

// Support for CDN/Plain HTML environments
if (typeof window !== "undefined") {
  (window as any).FalcoSend = FalcoSend;
}