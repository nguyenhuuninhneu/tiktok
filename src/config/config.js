const config = {
    rootLink: "http://localhost:57238",
    //rootLink: "https://feed.roughgroup.com",
    version: 1,
    //shop: OTGetUrlParameter("shop"),
    shop: 'codonqua.myshopify.com',
    admin: OTGetUrlParameter("admin"),
    hmac: window.location.href.split("&hmac=")[1],
    apiKey: '63bab6830fe1160c3640ef292dadba83'
  };
  function OTGetUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined
          ? true
          : decodeURIComponent(sParameterName[1]);
      }
    }
  }
  export default config;
  