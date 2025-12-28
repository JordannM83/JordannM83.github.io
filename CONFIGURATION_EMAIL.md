# 📧 Configuration du Formulaire de Contact

Le formulaire de contact utilise **EmailJS** pour envoyer des emails directement depuis le navigateur sans backend.

## 🚀 Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (jusqu'à 200 emails/mois)

### 2. Configurer un Service Email

1. Dans le dashboard EmailJS, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** (ex: `service_abc1234`)

### 3. Créer un Template d'Email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - Portfolio

Vous avez reçu un nouveau message depuis votre portfolio !

De: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. Notez le **Template ID** (ex: `template_xyz5678`)

### 4. Obtenir la Clé Publique

1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key** (ex: `abcdefgh123456789`)

### 5. Mettre à Jour la Configuration

Ouvrez le fichier `src/config/emailjs.js` et remplacez les valeurs :

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc1234',      // Votre Service ID
  TEMPLATE_ID: 'template_xyz5678',    // Votre Template ID
  PUBLIC_KEY: 'abcdefgh123456789'     // Votre Public Key
}
```

### 6. Tester

1. Lancez votre application : `npm run dev`
2. Allez sur la page Contact
3. Remplissez le formulaire
4. Vérifiez votre boîte mail !

## 🔧 Variables du Template

Les variables disponibles dans le template EmailJS :
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur
- `{{message}}` - Message de l'expéditeur
- `{{to_email}}` - Votre email (jordann.miso@gmail.com)

## 📝 Notes

- Le plan gratuit permet 200 emails/mois
- Les emails sont envoyés instantanément
- Vous recevrez une notification de succès/erreur
- Le formulaire se réinitialise automatiquement après envoi réussi

## 🆘 Problèmes Courants

**Le formulaire ne s'envoie pas**
- Vérifiez que vos clés EmailJS sont correctes
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que votre service email est bien connecté

**Je ne reçois pas les emails**
- Vérifiez vos spams
- Vérifiez que le template est correctement configuré
- Testez avec l'outil de test d'EmailJS

## 🔐 Sécurité

Les clés publiques EmailJS peuvent être exposées côté client. Pour plus de sécurité :
- Activez le captcha dans EmailJS (payant)
- Limitez les domaines autorisés dans les paramètres EmailJS
