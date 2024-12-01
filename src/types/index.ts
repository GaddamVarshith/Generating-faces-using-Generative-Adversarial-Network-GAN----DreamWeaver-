export interface GenerationResponse {
  artifacts: Array<{
    base64: string;
    seed: number;
    finishReason: string;
  }>;
}

export interface ErrorResponse {
  message: string;
  code?: string;
}

export type GeneratedImage = {
  url: string;
  seed: number;
};