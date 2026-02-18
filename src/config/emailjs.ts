// Configuration EmailJS
// Pour configurer :
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Remplacez les valeurs ci-dessous avec vos propres clés

export interface EmailJSConfig {
  SERVICE_ID: string;
  TEMPLATE_ID: string;
  PUBLIC_KEY: string;
}

export const EMAILJS_CONFIG: EmailJSConfig = {
  SERVICE_ID: 'service_voe221u',  // Ex: 'service_abc1234'
  TEMPLATE_ID: 'template_uxm6csv', // Ex: 'template_xyz5678'
  PUBLIC_KEY: 'uvWdwiSgftK7f-w4w'   // Ex: 'abcdefgh123456789'
};

// Template suggéré pour EmailJS :
// Sujet: Nouveau message de {{from_name}}
// 
// Nom: {{from_name}}
// Email: {{from_email}}
// 
// Message:
// {{message}}
