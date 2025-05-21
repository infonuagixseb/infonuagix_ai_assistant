// This file is machine-generated - edit with caution!

'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating an introductory message for Infonuagix.
 *
 * The flow uses a prompt to generate a welcome message highlighting Infonuagix's key offerings.
 * It exports the `generateIntroductoryMessage` function, along with the `GenerateIntroductoryMessageInput`
 * and `GenerateIntroductoryMessageOutput` types.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIntroductoryMessageInputSchema = z.object({
  userName: z
    .string()
    .describe('The name of the user to personalize the introductory message.'),
});
export type GenerateIntroductoryMessageInput = z.infer<typeof GenerateIntroductoryMessageInputSchema>;

const GenerateIntroductoryMessageOutputSchema = z.object({
  message: z.string().describe('The generated introductory message.'),
});
export type GenerateIntroductoryMessageOutput = z.infer<typeof GenerateIntroductoryMessageOutputSchema>;

export async function generateIntroductoryMessage(input: GenerateIntroductoryMessageInput): Promise<GenerateIntroductoryMessageOutput> {
  return generateIntroductoryMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIntroductoryMessagePrompt',
  input: {schema: GenerateIntroductoryMessageInputSchema},
  output: {schema: GenerateIntroductoryMessageOutputSchema},
  prompt: `Welcome to Infonuagix, {{userName}}! We specialize in vibe coding for chatbot, web and mobile development, offering quality code, speedy delivery, and cost-effective solutions. We also provide nearshoring in the EST zone, exceptional project management, dedicated product and client support, and bilingual capabilities in English and French. How can we help you today?`,
});

const generateIntroductoryMessageFlow = ai.defineFlow(
  {
    name: 'generateIntroductoryMessageFlow',
    inputSchema: GenerateIntroductoryMessageInputSchema,
    outputSchema: GenerateIntroductoryMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
