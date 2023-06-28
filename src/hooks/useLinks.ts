interface IUseLinks {
  (url: string, currentHost: string): boolean;
}

const useLinks: IUseLinks = (url, currentHost) => {
  try {
    const host = new URL(url).host;
    return currentHost !== host;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default useLinks;
