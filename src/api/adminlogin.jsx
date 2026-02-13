import API_EP_BOOK from "./endpoints";
import API from "./api";

const CaseStudyList = API_EP_BOOK.CASESTUDYLIST_API_EP;
const CaseStudyGet = API_EP_BOOK.CASESTUDYGET_API_EP;
const PortfolioCategoryList = API_EP_BOOK.PORTFOLIOCATEGORYLIST_API_EP;
const PortfolioCategoryGet = API_EP_BOOK.PORTFOLIOCATEGORYGET_API_EP;
const PortfolioList = API_EP_BOOK.PORTFOLIOLIST_API_EP;
const PortfolioGet = API_EP_BOOK.PORTFOLIOGET_API_EP;
const BannerLaptopList = API_EP_BOOK.BANNERLAPTOPLIST_API_EP;
const BannerMobileList = API_EP_BOOK.BANNERMOBILELIST_API_EP;
const ClientList = API_EP_BOOK.CLIENTLIST_API_EP;
const ServiceList = API_EP_BOOK.SERVICELIST_API_EP;
const ServiceGet = API_EP_BOOK.SERVICEGET_API_EP;
const KeyPlayersList = API_EP_BOOK.KEYPLAYERLIST_API_EP;
const HappyMomentList = API_EP_BOOK.HAPPYMOMENTLIST_API_EP;
const HappyMomentGet = API_EP_BOOK.HAPPYMOMENTGET_API_EP;
const HomeCaseStudyList = API_EP_BOOK.CASESTUDYHOMELIST_API_EP;
const ChooseUsList = API_EP_BOOK.CHOOSEUSLIST_API_EP;
const ContactUs = API_EP_BOOK.CONTACTUS_API_EP;
const LeaderShip = API_EP_BOOK.LEADERSHIPLIST_API_EP;
const ProductList = API_EP_BOOK.PRODUCTLIST_API_EP;
const ProductGet = API_EP_BOOK.PRODUCTGET_API_EP;

const LoginAPI = {
  casestudyList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyList, requestAPIData);
    return getResponse;
  },
  casestudyGet: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyGet, requestAPIData);
    return getResponse;
  },
  portfolioCategoryList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PortfolioCategoryList, requestAPIData);
    return getResponse;
  },
  portfolioCategoryGet: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PortfolioCategoryGet, requestAPIData);
    return getResponse;
  },
  portfolioList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PortfolioList, requestAPIData);
    return getResponse;
  },
  portfolioGet: function (id) {
    const url = PortfolioGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: PortfolioGet.method,
      authorization: PortfolioGet.authorization,
    };
    return API(requestAPIData);
  },
  bannerLaptopList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerLaptopList, requestAPIData);
    return getResponse;
  },
  bannerMobileList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerMobileList, requestAPIData);
    return getResponse;
  },
  clientList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ClientList, requestAPIData);
    return getResponse;
  },
  serviceList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ServiceList, requestAPIData);
    return getResponse;
  },
  serviceGet: function (id) {
    const url = ServiceGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ServiceGet.method,
      authorization: ServiceGet.authorization,
    };
    return API(requestAPIData);
  },
  keyPlayersList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(KeyPlayersList, requestAPIData);
    return getResponse;
  },
  happyMomentList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(HappyMomentList, requestAPIData);
    return getResponse;
  },
  happyMomentGet: function (id) {
    const url = HappyMomentGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: HappyMomentGet.method,
      authorization: HappyMomentGet.authorization,
    };
    return API(requestAPIData);
  },
  homeCaseStudyList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(HomeCaseStudyList, requestAPIData);
    return getResponse;
  },
  chooseUsList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ChooseUsList, requestAPIData);
    return getResponse;
  },
  contactUs: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ContactUs, requestAPIData);
    return getResponse;
  },
  leaderShip: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(LeaderShip, requestAPIData);
    return getResponse;
  },
    productList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductList, requestAPIData);
    return getResponse;
  },
  productGet: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductGet, requestAPIData);
    return getResponse;
  },
};

export default LoginAPI;
