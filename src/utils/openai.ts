import OpenAI from "openai";
import { OPEN_AI_API_KEY } from "./constants";

const openAI = new OpenAI({
   apiKey: OPEN_AI_API_KEY,
   dangerouslyAllowBrowser: true,
});

export default openAI;
