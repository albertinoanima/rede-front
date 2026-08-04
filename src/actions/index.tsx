import { destroyCookie, parseCookies, setCookie } from "nookies";


const storage = typeof localStorage !== "undefined" ? localStorage : null;


export const setSomeCookie = (key: string, value: string) => {
  setCookie(null, key, value, {
    path: '/',
    secure: true, // Typically should be true if sameSite is 'None'
    sameSite: 'None',
    maxAge: 24 * 60 * 60 // 1 day in seconds
  });
}

export const getSomeCookie = (ctx: any, cookieName: string) => {
  const cookies = parseCookies(ctx);
  return cookies[cookieName];
}


export const removeSomeCookie = (ctx: any, key: string) => {
  destroyCookie(ctx, key);
}


export const setSomeDataToLocalStorage = (key: string, value: string) => {
  storage?.setItem(key, value);
};


export const removeSomeDataLocalStorage = (key: string) => {
  storage?.removeItem(key);
}


export const getSomeDataLocalStorage = (key: string) => {
  return storage?.getItem(key);
}


export const saveLastRegisterStep = (stepPath: string) => {
  storage?.setItem("step", stepPath);
};


export const getLastRegisterStep = () => {
  const stepPath = storage?.getItem("step");
  if (stepPath) {
    return stepPath;
  }

  return "/welcome/step-1";
};


export const validateEmail = (email: string) => {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Test the email against the regex
  return emailRegex.test(email);
};


export const ensureHttps = (url: string): string => {
  if (!url || typeof url !== "string") return "";
  const cleanUrl = url.trim();

  // Se já começa com https:// ou http://, retorna intacto
  if (/^https?:\/\//i.test(cleanUrl)) {
    return cleanUrl;
  }

  // Se começa com // (URL relativa ao protocolo), mantém o formato
  if (cleanUrl.startsWith("//")) {
    return "https:" + cleanUrl;
  }

  // Caso contrário, adiciona https://
  return "https://" + cleanUrl.replace(/^\/+/, "");
};


export const linkify = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s<]+)/g;
    if (!text || text.length === 0) return "";

    return text.replace(
        urlRegex,
        (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="underline text-rede-yellow hover:opacity-80">${url}</a>`
    );
};