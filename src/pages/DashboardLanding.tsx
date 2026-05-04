import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './DashboardLanding.css';

const DashboardLanding: React.FC = () => {
  const { language } = useLanguage();

  const content = language === 'fr'
    ? {
        kicker: 'Freelance cockpit',
        title: 'Dashboard perso',
        intro: 'Un dashboard complet pour piloter une activité freelance : clients, devis, projets, factures, comptabilité, maintenance et paramètres société dans une seule interface.',
        github: 'Voir le GitHub',
        back: 'Retour aux projets',
        screenLabel: 'Aperçus du dashboard',
        interfaceTitle: 'Interface freelance',
        featureTitle: 'Fonctionnalités',
        workflowTitle: 'Ce que l’application permet de faire',
        stackTitle: 'Stack & architecture',
        features: [
          {
            title: 'Dashboard d’activité',
            text: 'KPIs clients, devis, devis acceptés, projets actifs, chiffre signé et chiffre encaissé avec alertes d’urgence sur devis et projets.'
          },
          {
            title: 'Gestion clients',
            text: 'Création de fiches clients complètes avec entreprise, raison sociale, SIRET, contact, email, téléphone, adresse, notes et mini récap.'
          },
          {
            title: 'Devis & projets',
            text: 'Création de devis avec montants, réduction, TVA et statuts, puis liaison des projets aux clients et aux devis.'
          },
          {
            title: 'Factures & compta',
            text: 'Suivi des factures, détails imprimables, calcul HT/TVA/TTC, bilans mensuels et rapports annuels générables.'
          },
          {
            title: 'Maintenance',
            text: 'Les projets terminés basculent automatiquement dans une vue maintenance avec liens vers le site, GitHub et fiche projet.'
          },
          {
            title: 'Paramètres société',
            text: 'Configuration des informations légales, délais de paiement, pénalités et mentions utilisées dans les devis et factures.'
          },
          {
            title: 'Administration',
            text: 'Authentification avec espace admin, rôles admin/super admin et gestion des administrateurs.'
          },
          {
            title: 'Backend robuste',
            text: 'API NestJS, base PostgreSQL, Prisma, migrations, seed de démo et stack Docker pour lancer le projet complet.'
          }
        ],
        screens: [
          {
            title: 'Vue d’ensemble',
            text: 'KPIs, chiffre signé/encaissé, devis à relancer et projets proches de leur échéance.'
          },
          {
            title: 'Clients',
            text: 'Création, recherche, fiche détaillée et mini récap avec devis, projets et factures liés.'
          },
          {
            title: 'Devis & projets',
            text: 'Statuts, tri, recherche, lien client/devis/projet, dates de début et de fin.'
          },
          {
            title: 'Factures & compta',
            text: 'Factures filtrables, rapports mensuels/annuels imprimables et calculs comptables.'
          }
        ],
        workflow: [
          'Créer un client avec ses informations de société et de contact',
          'Émettre un devis avec montant, remise, TVA, dates et statut',
          'Créer un projet lié au client et éventuellement au devis',
          'Suivre les projets actifs depuis le dashboard avec alertes d’échéance',
          'Créer et suivre les factures, puis générer les documents imprimables',
          'Consulter les bilans mensuels et annuels dans la comptabilité',
          'Basculer les projets terminés dans la maintenance'
        ],
        stack: ['React', 'Vite', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'JWT/session admin']
      }
    : {
        kicker: 'Freelance cockpit',
        title: 'Personal Dashboard',
        intro: 'A complete dashboard to run a freelance activity: clients, quotes, projects, invoices, accounting, maintenance, and company settings in one interface.',
        github: 'View GitHub',
        back: 'Back to projects',
        screenLabel: 'Dashboard previews',
        interfaceTitle: 'Freelance interface',
        featureTitle: 'Features',
        workflowTitle: 'What the app helps you do',
        stackTitle: 'Stack & architecture',
        features: [
          {
            title: 'Activity dashboard',
            text: 'Client, quote, accepted quote, active project, signed revenue, and paid revenue KPIs with urgency alerts.'
          },
          {
            title: 'Client management',
            text: 'Complete client records with company, legal name, SIRET, contact, email, phone, address, notes, and recap.'
          },
          {
            title: 'Quotes & projects',
            text: 'Quote creation with amounts, discounts, VAT, statuses, then projects linked to clients and quotes.'
          },
          {
            title: 'Invoices & accounting',
            text: 'Invoice tracking, printable details, VAT totals, monthly summaries, and yearly reports.'
          },
          {
            title: 'Maintenance',
            text: 'Completed projects automatically move to a maintenance view with website, GitHub, and project detail links.'
          },
          {
            title: 'Company settings',
            text: 'Legal details, payment delays, penalties, and recovery fee settings reused in quotes and invoices.'
          },
          {
            title: 'Administration',
            text: 'Authentication with admin area, admin/super admin roles, and administrator management.'
          },
          {
            title: 'Solid backend',
            text: 'NestJS API, PostgreSQL database, Prisma, migrations, demo seed, and Docker stack.'
          }
        ],
        screens: [
          {
            title: 'Overview',
            text: 'KPIs, signed/paid revenue, quotes to follow up, and projects close to deadline.'
          },
          {
            title: 'Clients',
            text: 'Creation, search, detailed record, and recap with related quotes, projects, and invoices.'
          },
          {
            title: 'Quotes & projects',
            text: 'Statuses, sorting, search, client/quote/project linking, start dates, and deadlines.'
          },
          {
            title: 'Invoices & accounting',
            text: 'Filterable invoices, printable monthly/yearly reports, and accounting calculations.'
          }
        ],
        workflow: [
          'Create a client with company and contact information',
          'Issue a quote with amount, discount, VAT, dates, and status',
          'Create a project linked to the client and optionally to the quote',
          'Track active projects from the dashboard with deadline alerts',
          'Create and track invoices, then generate printable documents',
          'Review monthly and yearly accounting summaries',
          'Move completed projects into maintenance'
        ],
        stack: ['React', 'Vite', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'Docker', 'JWT/admin session']
      };

  return (
    <div className="dashboard-landing">
      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <p className="dashboard-kicker">{content.kicker}</p>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <div className="dashboard-actions">
            <a
              href="https://github.com/JordannM83/Dashboard-perso"
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-primary-link"
            >
              {content.github}
            </a>
            <Link to="/projects" className="dashboard-secondary-link">
              {content.back}
            </Link>
          </div>
        </div>

        <div className="crm-browser crm-browser-main" aria-label={content.screenLabel}>
          <div className="crm-window-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="crm-app-frame">
            <aside className="crm-sidebar">
              <strong>Freelance</strong>
              <span className="active" />
              <span />
              <span />
              <span />
            </aside>
            <div className="crm-dashboard-screen">
              <div className="crm-screen-header">
                <span>Dashboard</span>
                <small>Today</small>
              </div>
              <div className="crm-kpi-row">
                <div>
                  <small>Clients</small>
                  <strong>128</strong>
                </div>
                <div>
                  <small>Devis</small>
                  <strong>24</strong>
                </div>
                <div>
                  <small>Projets</small>
                  <strong>17</strong>
                </div>
              </div>
              <div className="crm-chart">
                <span style={{ height: '42%' }} />
                <span style={{ height: '70%' }} />
                <span style={{ height: '55%' }} />
                <span style={{ height: '88%' }} />
                <span style={{ height: '64%' }} />
              </div>
              <div className="crm-table">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-screens">
        <div className="section-heading">
          <p className="dashboard-kicker">{content.screenLabel}</p>
          <h2>{content.interfaceTitle}</h2>
        </div>

        {content.screens.map((screen, index) => (
          <article className="screen-card" key={screen.title}>
            <div className={`screen-mock screen-mock-${index + 1}`}>
              <div className="mock-header" />
              <div className={index === 2 ? 'pipeline-screen' : 'mock-list'}>
                {index === 2 ? (
                  <>
                    <div className="pipeline-column">
                      <span />
                      <span />
                    </div>
                    <div className="pipeline-column">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="pipeline-column">
                      <span />
                    </div>
                  </>
                ) : (
                  <>
                    <span />
                    <span />
                    <span />
                    <span />
                  </>
                )}
              </div>
            </div>
            <h3>{screen.title}</h3>
            <p>{screen.text}</p>
          </article>
        ))}
      </section>

      <section className="dashboard-feature-section">
        <div className="section-heading">
          <p className="dashboard-kicker">{content.featureTitle}</p>
          <h2>{content.workflowTitle}</h2>
        </div>
        <div className="dashboard-feature-grid">
          {content.features.map((feature) => (
            <article className="dashboard-feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dashboard-process">
        <div className="dashboard-process-card">
          <h2>{content.workflowTitle}</h2>
          <ol>
            {content.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="dashboard-process-card">
          <h2>{content.stackTitle}</h2>
          <div className="dashboard-stack">
            {content.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardLanding;
