# Personal Project Hub

Aplicație web statică, responsive, pentru organizarea proiectelor personale.

## Pornire

Varianta simplă:
- deschide `index.html` în browser.

Recomandat:
- în VS Code instalează extensia **Live Server**
- click dreapta pe `index.html` → **Open with Live Server**

## Unde adaugi proiecte

Editează doar `config.js`.

### Proiect în meniul de sus

Adaugă un obiect în `topMenu`:

```js
{
  id: "noul-proiect",
  label: "Noul proiect",
  icon: "★",
  description: "Descriere...",
  tags: ["Tag1", "Tag2"],
  links: [
    { label: "GitHub", url: "https://github.com/..." }
  ]
}
```

### Proiect într-un meniu lateral

Adaugă în `sideMenus > items`:

```js
{
  id: "proiect-x",
  label: "Proiect X",
  description: "Descriere...",
  tags: ["Personal"]
}
```

## Structură

- `index.html` – layout
- `styles.css` – design desktop/mobile + dark mode
- `config.js` – toate meniurile și proiectele
- `app.js` – logica de navigare/randare

## Pasul următor recomandat

Dacă vrei conținut mai bogat pe fiecare proiect, putem trece la:
- pagini `.md` (Markdown) per proiect;
- formular de adăugare/editare;
- salvare în `localStorage`;
- backend + bază de date;
- autentificare;
- integrare GitHub API.


## Proiectele GITHUB

Pentru fiecare proiect din grupul `GITHUB`, folosește:

```js
{
  id: "nume-proiect",
  label: "Nume Proiect",
  description: "Descriere...",
  tags: ["GitHub", "Web"],
  githubUrl: "https://github.com/user/repository",
  pageUrl: "https://user.github.io/repository/"
}
```

- `githubUrl` apare ca buton în partea de sus.
- `pageUrl` este încărcat direct în zona principală prin iframe.
- Dacă `pageUrl` este gol, aplicația afișează un mesaj de configurare.

Exemplul `Arbore Genealogic` este deja configurat.
