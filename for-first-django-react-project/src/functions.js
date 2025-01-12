export function getCookie(name) {
    const regex = new RegExp(`(?:(?:^|;\\s*)${name}=([^;]*))`);
    const match = document.cookie.match(regex);
    return match ? decodeURIComponent(match[1]) : null;
  }

export function getParrentModalBasis(){
  let nodeListModalBasis =document.querySelectorAll('.modal__basis');
  let elemBody =document.querySelector('body');
  let parentModalBasis = nodeListModalBasis[nodeListModalBasis.length - 1] ? nodeListModalBasis[nodeListModalBasis.length - 1] : elemBody;
  return parentModalBasis
}
  