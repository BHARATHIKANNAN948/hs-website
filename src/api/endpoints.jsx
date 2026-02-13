let endpoints = {
  CASESTUDYLIST: "user_view/caselist",
  CASESTUDYGET: "user_view/casegeting",
  PORTFOLIOCATEGORYLIST: "user_view/categorylist",
  PORTFOLIOCATEGORYGET: "user_view/portlist",
  PORTFOLIOGET: "user_view/portgeting/:id",
  BANNERLAPTOPLIST: "user_view/bannerimageListLaptop",
  BANNERMOBILELIST: "user_view/bannerimageListmobile",
  CLIENTLIST: "user_view/listclientimg",
  SERVICELIST: "user_view/servicelist",
  SERVICEGET: "user_view/servicegetdetails/:id",
  KEYPLAYERLIST: "user_view/teamlist",
  LEADERSHIPLIST: "user_view/leadershiplist",
  HAPPYMOMENTLIST: "user_view/happymomentimglist",
  HAPPYMOMENTGET: "user_view/happymomentget/:id",
  CASESTUDYHOMELIST: "user_view/casehomelist",
  CHOOSEUSLIST: "user_view/mobileimagelist",
  CONTACTUS: "contact_us/create",
  PRODUCTLIST: "user_view/productlist",
  PRODUCTGET: "user_view/productgetdetails"
};

let API_EP_BOOK = {
  CASESTUDYLIST_API_EP: {
    url: endpoints.CASESTUDYLIST,
    method: "POST",
    authorization: false,
  },
  CASESTUDYGET_API_EP: {
    url: endpoints.CASESTUDYGET,
    method: "POST",
    authorization: true,
  },
  PORTFOLIOCATEGORYLIST_API_EP: {
    url: endpoints.PORTFOLIOCATEGORYLIST,
    method: "POST",
    authorization: false,
  },
  PORTFOLIOCATEGORYGET_API_EP: {
    url: endpoints.PORTFOLIOCATEGORYGET,
    method: "POST",
    authorization: true,
  },
  PORTFOLIOGET_API_EP: {
    url: endpoints.PORTFOLIOGET,
    method: "GET",
    authorization: true,
  },
  BANNERLAPTOPLIST_API_EP: {
    url: endpoints.BANNERLAPTOPLIST,
    method: "POST",
    authorization: true,
  },
  BANNERMOBILELIST_API_EP: {
    url: endpoints.BANNERMOBILELIST,
    method: "POST",
    authorization: true,
  },
  CLIENTLIST_API_EP: {
    url: endpoints.CLIENTLIST,
    method: "POST",
    authorization: true,
  },
  SERVICELIST_API_EP: {
    url: endpoints.SERVICELIST,
    method: "POST",
    authorization: true,
  },
  SERVICEGET_API_EP: {
    url: endpoints.SERVICEGET,
    method: "GET",
    authorization: true,
  },
  KEYPLAYERLIST_API_EP: {
    url: endpoints.KEYPLAYERLIST,
    method: "POST",
    authorization: true,
  },
  HAPPYMOMENTLIST_API_EP: {
    url: endpoints.HAPPYMOMENTLIST,
    method: "POST",
    authorization: true,
  },
  HAPPYMOMENTGET_API_EP: {
    url: endpoints.HAPPYMOMENTGET,
    method: "GET",
    authorization: true,
  },
  CASESTUDYHOMELIST_API_EP: {
    url: endpoints.CASESTUDYHOMELIST,
    method: "POST",
    authorization: true,
  },
  CHOOSEUSLIST_API_EP: {
    url: endpoints.CHOOSEUSLIST,
    method: "POST",
    authorization: true,
  },
  CONTACTUS_API_EP: {
    url: endpoints.CONTACTUS,
    method: "POST",
    authorization: true,
  },
  LEADERSHIPLIST_API_EP: {
    url: endpoints.LEADERSHIPLIST,
    method: "POST",
    authorization: true,
  },
  PRODUCTLIST_API_EP: {
    url: endpoints.PRODUCTLIST,
    method: "POST",
    authorization: false,
  },
  PRODUCTGET_API_EP: {
    url: endpoints.PRODUCTGET,
    method: "POST",
    authorization: true,
  },
};
export default API_EP_BOOK;
