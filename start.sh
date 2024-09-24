#!/bin/bash

# Erhöhe die Inotify-Watcher-Limits
echo fs.inotify.max_user_watches=524288 | tee -a /etc/sysctl.conf && sysctl -p

# Installiere die Abhängigkeiten
npm install

# Starte die Anwendung
npm run dev