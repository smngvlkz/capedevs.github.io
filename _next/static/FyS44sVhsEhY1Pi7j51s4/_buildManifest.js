self.__BUILD_MANIFEST =
    function(s) {
  return {
    __rewrites: {afterFiles: [], beforeFiles: [], fallback: []},
        "/": [ s, "static/chunks/pages/index-d282ee38e35a8c26.js" ],
        "/_error": [ "static/chunks/pages/_error-77823ddac6993d35.js" ],
        "/posts/[slug]":
            [
              "static/chunks/cb355538-671650ac643ac2ac.js", s,
              "static/chunks/31-955cf4b6ac93d361.js",
              "static/chunks/pages/posts/[slug]-7ec6047a256ba41a.js"
            ],
        sortedPages: [ "/", "/_app", "/_error", "/posts/[slug]" ]
  }
}("static/chunks/168-91e11c48c31997c5.js"),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();