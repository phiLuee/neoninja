# Verwenden Sie ein Node.js-Image als Basis
FROM node:22

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopieren Sie package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Kopieren Sie die package.json-Dateien der Workspaces
COPY packages/base-ui/package.json packages/base-ui/
COPY packages/demo/package.json packages/demo/

# Installieren Sie die Abhängigkeiten
RUN npm install

# Kopieren Sie den Rest des Anwendungsquellcodes in das Arbeitsverzeichnis
COPY . .

# Exponieren Sie den Port, auf dem die Anwendung läuft
EXPOSE 5173

# Starten Sie die Anwendung
CMD ["npm", "run", "dev", "--", "--host"]