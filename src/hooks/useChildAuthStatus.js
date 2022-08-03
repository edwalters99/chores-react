export const useChildAuthStatus = () => {
  return localStorage.getItem('childAuth') !== null;
};
