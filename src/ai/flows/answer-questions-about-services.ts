'use server';
/**
 * @fileOverview An AI agent that answers questions about Infonuagix's services.
 *
 * - answerQuestionsAboutServices - A function that answers questions about Infonuagix's services.
 * - AnswerQuestionsAboutServicesInput - The input type for the answerQuestionsAboutServices function.
 * - AnswerQuestionsAboutServicesOutput - The return type for the answerQuestionsAboutServices function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionsAboutServicesInputSchema = z.object({
  question: z.string().describe('The question about Infonuagix services.'),
});
export type AnswerQuestionsAboutServicesInput = z.infer<typeof AnswerQuestionsAboutServicesInputSchema>;

const AnswerQuestionsAboutServicesOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Infonuagix services.'),
});
export type AnswerQuestionsAboutServicesOutput = z.infer<typeof AnswerQuestionsAboutServicesOutputSchema>;

export async function answerQuestionsAboutServices(input: AnswerQuestionsAboutServicesInput): Promise<AnswerQuestionsAboutServicesOutput> {
  return answerQuestionsAboutServicesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionsAboutServicesPrompt',
  input: {schema: AnswerQuestionsAboutServicesInputSchema},
  output: {schema: AnswerQuestionsAboutServicesOutputSchema},
  prompt: `You are a chatbot for Infonuagix. Answer the following question about Infonuagix services:

Question: {{{question}}}

Infonuagix embraces vibe coding for chatbot, web and mobile development, providing a range of benefits to its clients:

- Quality code and speedy delivery
- Cost-effective solutions
- Nearshoring in the Eastern Standard Time (EST) zone
- Exceptional project management
- Dedicated product and client support
- Bilingual capabilities in English and French`,
});

const answerQuestionsAboutServicesFlow = ai.defineFlow(
  {
    name: 'answerQuestionsAboutServicesFlow',
    inputSchema: AnswerQuestionsAboutServicesInputSchema,
    outputSchema: AnswerQuestionsAboutServicesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
