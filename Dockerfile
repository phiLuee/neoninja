# Verwenden Sie ein Node.js-Image als Basis
FROM node:22

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /neoninja

# Kopieren Sie das Startskript in das Arbeitsverzeichnis
COPY start.sh .


# Kopieren Sie package.json und package-lock.json in das Arbeitsverzeichnis
COPY package*.json ./

# Kopieren Sie die package.json-Dateien der Workspaces
COPY packages/base-ui/package.json packages/base-ui/
COPY packages/demo/package.json packages/demo/


# Geben Sie dem Startskript Ausführungsrechte
RUN chmod +x start.sh 

# Exponieren Sie den Port, auf dem die Anwendung läuft
EXPOSE 5173