export type LeadType = 'publicite' | 'partenariat';

export interface LeadData {
  type: LeadType | null;
  budget: string;
  nom: string;
  entreprise: string;
  message: string;
}

export interface CreatorProfile {
  name: string;
  handle: string;
  tiktokCount: string;
  facebookCount: string;
  whatsappNumber: string;
}