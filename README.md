# JO Prediction App

## Description
L'application **JO Prediction App** a pour objectif de fournir des prédictions sur les résultats des Jeux Olympiques 2024, ainsi que des informations générales et des faits intéressants sur les Jeux Olympiques. Elle permet aux utilisateurs de consulter les pays participants, les hôtes des Jeux, les années des compétitions, et de faire des prédictions sur les médailles.

## Fonctionnalités
- Affichage des pays participants aux Jeux Olympiques.
- Informations sur les hôtes des Jeux Olympiques.
- Liste des années des compétitions.
- Prédictions sur les médailles d'or, d'argent et de bronze pour les Jeux Olympiques 2024.
- Faits intéressants sur les Jeux Olympiques.

## Technologies Utilisées
- **Backend :** Flask, PostgreSQL, psycopg2, joblib
- **Frontend :** React, Material-UI, Vite, Axios, Chart.js, Recharts
- **Autres :** dotenv, ThreadedConnectionPool

## Prérequis
- **Node.js** (version 14 ou supérieure)
- **Python** (version 3.7 ou supérieure)
- **PostgreSQL**
- **Yarn** ou **npm**

## Installation
1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/jo-prediction-app.git
    cd jo-prediction-app
    ```

2. Installez les dépendances du frontend :
    ```sh
    yarn install
    ```
    ou
    ```sh
    npm install
    ```

3. Installez les dépendances du backend :
    ```sh
    pip install -r requirements.txt
    ```

4. Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet et en y ajoutant les variables suivantes :
    ```
    VITE_API_URL=http://hackathon_jo_2024.find-auto-part.com
    DB_HOST=votre_hote
    DB_NAME=nom_de_la_base
    DB_USER=utilisateur
    DB_PASS=mot_de_passe
    ```

## Démarrage
1. Démarrez le backend :
    ```sh
    python app.py
    ```

2. Démarrez le frontend :
    ```sh
    yarn dev
    ```
    ou
    ```sh
    npm run dev
    ```

## Structure du Projet

src/
├── assets/
├── components/
│ ├── Header.jsx
│ └── ...
├── pages/
│ ├── Analysis.jsx
│ ├── HomePage.jsx
│ ├── OlympicFacts.jsx
│ └── Predictions.jsx
├── App.jsx
├── main.jsx
├── theme.js
.env
.eslintrc.cjs
package.json
vite.config.js
yarn.lock


### Code Backend (app.py)
Le code backend gère les routes pour obtenir les informations sur les pays, les hôtes, les années et les prédictions de médailles. Il utilise un pool de connexions pour optimiser les connexions à la base de données PostgreSQL.

### Code Frontend

#### App.jsx
Le fichier `App.jsx` configure les routes principales de l'application en utilisant `react-router-dom`. Voici une brève explication du code :

```jsx
import { Container, CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Analysis from "./pages/Analysis";
import HomePage from "./pages/HomePage";
import OlympicFacts from "./pages/OlympicFacts";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container
        sx={{ width: "100%", maxWidth: "none" }}
        xl={{ maxWidth: "none" }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/facts" element={<OlympicFacts />} />
          <Route path="/predictions" element={<Predictions />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
```

1. Router Configuration : Utilise react-router-dom pour définir les routes de l'application.
2. Material-UI : Utilise CssBaseline et Container pour la mise en page et le style.
3. Routes : Définit les différentes pages de l'application (HomePage, Analysis, OlympicFacts, Predictions) avec leurs chemins respectifs.
main.jsx

## Le fichier main.jsx initialise l'application React :

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
```

1. React Initialization : Initialise l'application en utilisant createRoot de React 18.
2. ThemeProvider : Utilise Material-UI pour appliquer un thème global à l'application.
3. CssBaseline : Assure une base CSS cohérente entre les navigateurs.

## Dépendances

### Dependencies
- @emotion/react : Utilisé pour le stylisme CSS-in-JS avec Material-UI.
- @emotion/styled : Utilisé pour créer des composants stylisés avec Material-UI.
- @fontsource/material-icons : Fournit des icônes Material-UI.
- @mui/icons-material : Collection d'icônes pour Material-UI.
- @mui/material : Composants de l'interface utilisateur de Material-UI.
- axios : Bibliothèque pour effectuer des requêtes HTTP.
- chart.js : Bibliothèque pour créer des graphiques.
fontsource-roboto : Police Roboto pour l'application.
- react : Bibliothèque principale pour construire l'interface utilisateur.
- react-chartjs-2 : Composants React pour Chart.js.
- react-dom : Fournit des méthodes spécifiques au DOM pour React.
- react-infinite-scroll-component : Composant pour le défilement infini.
- react-router-dom : Gestion des routes dans l'application React.
- recharts : Bibliothèque de graphiques pour React.
- typed.js : Bibliothèque pour créer des animations de texte typé.

### DevDependencies
- @types/react : Définitions TypeScript pour React.
- @types/react-dom : Définitions TypeScript pour React DOM.
- @vitejs/plugin-react : Plugin Vite pour React.
- eslint : Linter pour JavaScript.
- eslint-plugin-react : Plugin ESLint pour React.
- eslint-plugin-react-hooks : Plugin ESLint pour les hooks React.

