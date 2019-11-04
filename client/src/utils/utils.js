/**
 * Used to get the list category object
 * @function :  getCategoryList
 * @param {Array} data - Movies list data.
 * @returns {Array} - all category list.
 */
export const getCategoryList = (data = []) => {
  return data.reduce((accum, item) => {
    item.categories.forEach(element => {
      const itemIndex = accum.findIndex(catgObj => catgObj.id === element.id);
      if (itemIndex === -1) {
        accum.push(element);
      }
    });
    return accum;
  }, []);
};

/**
 * Used to get the list of data grouped by category
 * @function :  filterDataByCategory
 * @param {Array} data - Movies list data.
 * @returns {Array} - Movies list data grouped by category.
 */
export const filterDataByCategory = (data = []) => {
  const catgList = getCategoryList(data);
  return catgList.reduce((accm, dataItem) => {
    const newDataList = data.filter(item => {
      const catgIndex = item.categories.findIndex(
        catgItem => dataItem.id === catgItem.id,
      );

      return catgIndex !== -1;
    });
    const dataObj = { ...dataItem };
    dataObj.data = newDataList;
    accm.push(dataObj);
    return accm;
  }, []);
};

/**
 * Used to get the all category present in a list as a coma separated string
 * @function :  generateCategory
 * @param {Array} categories - categories list data.
 * @returns {String} - coma separated categories string
 */
export const generateCategory = (categories = []) => {
  return categories.reduce((acc, item) => {
    return acc ? acc + ', ' + item.title : item.title;
  }, '');
};

/**
 * Used to set the data in local storage
 * @function :  setHistoryData
 * @param {String} key - key to set the data.
 * @param {Array} value - data to be store in local storage
 */
export const setHistoryData = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Used to get the data from local storage
 * @function :  getHistoryDataFromStorage
 * @param {String} key - key to set the data.
 * @returns {Array} - data retrived from local storage
 */
export const getHistoryDataFromStorage = key => {
  return JSON.parse(window.localStorage.getItem(key));
};

/**
 * Used to update the data in local storage with a given key
 * @function :  updateHistoryData
 * @param {String} key - key to upadte the data.
 * @param {Array} value - data to be store in local storage
 */
export const updateHistoryData = (key, value) => {
  const historyData = getHistoryDataFromStorage(key);
  if (historyData.findIndex(item => item.id === value.id) === -1) {
    historyData.push(value);
  }
  setHistoryData(key, historyData);
};
