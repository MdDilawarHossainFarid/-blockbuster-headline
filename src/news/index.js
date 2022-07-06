import axios from "../utils/axios";

export const newsCategory = {
  technology: "technology",
  science: "science",
  business: "business",
};

const MAX_ITEM_PER_PAGE = 10;

export default class News {
  constructor(category) {
    this._category = category;
    this._searchTerm = "";
    this._pageSize = MAX_ITEM_PER_PAGE;
    this._currentPage = 1;
    this._totalPage = 1;
  }

  async getNews() {
    try {
      const { data } = await axios.get(this._getURL());
      console.log(data);
      this._totalPage = Math.ceil(data);
    } catch (e) {
      throw new Error(e);
    }
  }

  next() {}

  pre() {}

  setCurrentPage() {}

  changeCategory() {}

  search() {}

  _getURL() {
    let url = "/?";
    if (this._category) {
      url += `category=${this.category}`;
    }
    if (this._searchTerm) {
      url += `&q=${this._searchTerm}`;
    }
    if (this._pageSize) {
      url += `&pageSize=${this._pageSize}`;
    }
    if (this._currentPage) {
      url += `&page=${this._currentPage}`;
    }

    return url;
  }
}
