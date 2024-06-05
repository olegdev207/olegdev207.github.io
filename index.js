const API_URL = 'https://api.github.com/repos/oleksandr-danylchenko/street-fighter/contents/resources/api/fighters.json';
const SECURITY_HEADERS = {
  headers: {
    authorization: "token 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"
  }
};

const responsePromise = fetch(API_URL, SECURITY_HEADERS);

responsePromise
    .then(response => response.json())
    .then(file => {
      const fighters = JSON.parse(atob(file.content));
      const names = fighters.map(it => it.name);
      const nameStr = names.join('\n')
    });