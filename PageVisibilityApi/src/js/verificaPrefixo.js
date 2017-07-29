verificaPrefixo = () => {

    // Suporte para Opera 12.10 e Firefox 18 em diante 
    if (typeof document.hidden !== "undefined") {
      return "default";
    }
        
    if (typeof document.mozHidden !== "undefined") {
      return "moz";

    } else if (typeof document.msHidden !== "undefined") {
      return "ms";

    } else if (typeof document.webkitHidden !== "undefined") {
      return "webkit";
    }
}