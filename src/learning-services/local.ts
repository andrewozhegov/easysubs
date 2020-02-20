class LocalDict {
  public color: string;

  constructor() {
    this.color = "#00AEFF";
  }
  public addWord(word: string, translate: string, _: string) {
    //const url = new URL("https://api.lingualeo.com/addword");
    //const params: any = { word: word, tword: translate };
    //Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fs.appendFileSync('/tmp/file.txt', `\n5\t${word}\t${translate}`);

    return new Promise((resolve, reject) => {});
    
    /*return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ contentScriptQuery: "getRequest", url: url.toString() }, response => {
        response.error_msg === ""
          ? resolve(chrome.i18n.getMessage("wordAddedToLinguaLeo"))
          : reject(chrome.i18n.getMessage("lingualeoError"));
      });
    });*/
  }
}

export default LocalDict;
