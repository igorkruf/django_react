export function getCookie(name) {
    const regex = new RegExp(`(?:(?:^|;\\s*)${name}=([^;]*))`);
    const match = document.cookie.match(regex);
    return match ? decodeURIComponent(match[1]) : null;
  }