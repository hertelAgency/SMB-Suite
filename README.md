# SMB-Suite Web

> Die All-in-One Business Management Suite für kleine und mittlere Unternehmen

Eine moderne, leistungsstarke Webanwendung zur Verwaltung von Kunden, Projekten, Rechnungen und Angeboten.

## 🚀 Features

- **Dashboard** - Übersichtliches Business Cockpit mit KPIs
- **Kundenverwaltung** - Verwaltung von Kunden und Ansprechpartnern
- **Projektmanagement** - Projekte mit Tasks und Zeiterfassung
- **Rechnungen & Angebote** - Erstellen und verwalten von Rechnungen
- **Teamverwaltung** - Nutzerverwaltung mit Rollen
- **Responsive Design** - Optimiert für Desktop und Mobile

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) mit RTK Query
- **Styling**: SCSS mit CSS Modules
- **Data Fetching**: Axios & RTK Query
- **Charts**: [Recharts](https://recharts.org/)
- **Validation**: [Zod](https://zod.dev/)
- **Tables**: [TanStack Table](https://tanstack.com/table)

## 📋 Voraussetzungen

- Node.js 20.x oder höher
- npm oder yarn
- Backend-API läuft auf `http://localhost:3001` (oder konfigurierbar via `.env`)

## 🏗️ Installation

1. **Repository klonen**
```bash
git clone https://github.com/hertelAgency/SMB-Suite.git
cd SMB-Suite/Web
```

2. **Dependencies installieren**
```bash
npm install
```

3. **Environment Variables konfigurieren**
```bash
cp .env.example .env
```

Bearbeiten Sie `.env` und setzen Sie:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. **Development Server starten**
```bash
npm run dev
```

Die Anwendung ist nun verfügbar unter [http://localhost:3000](http://localhost:3000)

## 📜 Verfügbare Scripts

| Script | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet den Development Server auf Port 3000 |
| `npm run build` | Erstellt einen Production Build |
| `npm run start` | Startet den Production Server |
| `npm run lint` | Führt ESLint aus |
| `npm run analyze` | Analysiert die Bundle-Größe |
| `npm run type-check` | Überprüft TypeScript-Typen ohne Build |

## 📁 Projektstruktur

```
Web/
├── app/                    # Next.js App Router Pages
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Dashboard
│   ├── clients/           # Kundenverwaltung
│   ├── projects/          # Projektmanagement
│   ├── invoices/          # Rechnungen
│   ├── quotes/            # Angebote
│   ├── team/              # Teamverwaltung
│   └── login/             # Login & Registrierung
├── components/            # React Komponenten
│   ├── layout/           # Layout-Komponenten (Sidebar, Topbar)
│   ├── charts/           # Chart-Komponenten
│   ├── projects/         # Projekt-spezifische Komponenten
│   └── ui/               # Wiederverwendbare UI-Komponenten
├── store/                # Redux Store
│   ├── slices/           # Redux Slices & API Endpoints
│   └── api/              # RTK Query Base API
├── lib/                  # Utility-Funktionen
│   ├── api.ts            # Axios Instance
│   ├── auth.ts           # Auth Helpers
│   └── env.ts            # Environment Validation
├── type/                 # TypeScript Type Definitionen
├── styles/               # SCSS Styles
└── middleware.ts         # Next.js Middleware (Security Headers)
```

## 🔒 Sicherheit

Das Projekt implementiert mehrere Security Best Practices:

- **Environment Validation**: Zod-basierte Validierung aller Umgebungsvariablen
- **Security Headers**: CSP, HSTS, X-Frame-Options, etc.
- **Authentication**: JWT-basierte Authentifizierung mit Token Refresh
- **Input Validation**: Client-seitige Validierung mit TypeScript
- **Secure Links**: `rel="noopener noreferrer"` für externe Links

## 🎨 Styling

Das Projekt verwendet SCSS mit einer modularen Architektur:

- **Tokens**: Design-Tokens für Farben, Spacing, etc.
- **Variables**: SCSS-Variablen für Theming
- **Mixins**: Wiederverwendbare Style-Patterns
- **Component Styles**: Gekapselte Komponenten-Styles

### Theme anpassen

Bearbeiten Sie `styles/_tokens.scss` für globale Design-Änderungen:

```scss
// Farben
--color-primary: #4a90e2;
--color-accent: #00d4ff;
--color-background: #0b0d12;
```

## 🔄 State Management

Redux Toolkit mit RTK Query für API-Calls:

```typescript
// Beispiel: API Hook verwenden
const { data: clients, isLoading } = useGetClientsQuery();
```

### API Slices

- `authApi` - Login & Registrierung
- `clientsApi` - Kundenverwaltung
- `projectsApi` - Projektmanagement
- `invoicesApi` - Rechnungsverwaltung
- `quotesApi` - Angebotsverwaltung
- `usersApi` - Benutzerverwaltung
- `taskApi` - Task-Management

## 🌐 API Integration

Die Anwendung kommuniziert mit einer REST-API. Endpoints werden automatisch authentifiziert:

```typescript
// baseApi fügt automatisch den Bearer Token hinzu
prepareHeaders: (headers, { getState }) => {
  const token = (getState() as RootState).auth.accessToken;
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
}
```

## 📊 Performance

Implementierte Performance-Optimierungen:

- ✅ Next.js Compression (gzip/brotli)
- ✅ Optimiertes Code-Splitting
- ✅ Image-Optimierung (AVIF/WebP)
- ✅ Tree-shaking
- ✅ Bundle-Analyse verfügbar

### Bundle analysieren

```bash
npm run analyze
```

## ♿ Accessibility

- Semantic HTML mit ARIA-Labels
- Keyboard-Navigation Support
- Screen Reader optimiert
- WCAG 2.1 Best Practices

## 🧪 Testing

*(Noch zu implementieren)*

Geplant:
- Unit Tests mit Jest
- Component Tests mit React Testing Library
- E2E Tests mit Playwright

## 📦 Deployment

### Production Build

```bash
npm run build
npm run start
```

### Vercel Deployment

```bash
vercel deploy
```

### Docker (optional)

```dockerfile
# Beispiel Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork das Repository
2. Erstellen Sie einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Coding Standards

- **TypeScript**: Strict Mode aktiviert
- **Linting**: ESLint mit Next.js Config
- **Formatting**: Prettier (empfohlen)
- **Commits**: Conventional Commits

## 🐛 Bekannte Probleme

Siehe [Issues](https://github.com/hertelAgency/SMB-Suite/issues) für aktuelle Bugs und Feature Requests.

## 📄 Lizenz

Proprietary - Alle Rechte vorbehalten.

## 👥 Team

Entwickelt von [hertelAgency](https://github.com/hertelAgency)

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues: [SMB-Suite Issues](https://github.com/hertelAgency/SMB-Suite/issues)
- Email: support@example.com

---

**Version**: 0.1.0  
**Letztes Update**: November 2025
