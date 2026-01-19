
export enum AppMode {
  MAINTENANCE = 'MAINTENANCE',
  CHAT = 'CHAT',
  IMAGE = 'IMAGE',
  SPEECH = 'SPEECH'
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}
