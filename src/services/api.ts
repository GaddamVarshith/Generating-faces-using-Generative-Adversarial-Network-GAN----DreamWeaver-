import { GeneratedImage } from '../types';

const API_KEY = import.meta.env.VITE_STABILITY_API_KEY;
const API_URL = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';

export class APIError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'APIError';
  }
}

export async function generateFace(prompt: string, referenceImage?: string): Promise<GeneratedImage[]> {
  if (!API_KEY) {
    throw new APIError('API key is not configured. Please set VITE_STABILITY_API_KEY in your environment.');
  }

  const enhancedPrompt = `${prompt}, maintaining exact ethnic features, skin tone, and facial characteristics, photorealistic, ultra high quality, 4k, detailed face, head and shoulders only`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: enhancedPrompt,
            weight: 1,
          },
          {
            text: "unrealistic, cartoon, anime, illustration, painting, drawing, artificial, fake looking",
            weight: -1,
          }
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 8,
        steps: 30,
        style_preset: "photographic",
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      if (error.message?.includes('balance')) {
        throw new APIError('Insufficient API credits. Please check your account balance.', 'INSUFFICIENT_BALANCE');
      }
      throw new APIError(error.message || 'Failed to generate image');
    }

    const data = await response.json();
    return data.artifacts.map((artifact: any) => ({
      url: `data:image/png;base64,${artifact.base64}`,
      id: artifact.seed.toString(),
    }));
  } catch (error) {
    if (error instanceof APIError) throw error;
    throw new APIError('Failed to connect to the API. Please try again later.');
  }
}