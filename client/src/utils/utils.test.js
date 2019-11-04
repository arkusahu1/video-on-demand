import {
  generateCategory,
  filterDataByCategory,
  getCategoryList,
  updateHistoryData,
  getHistoryDataFromStorage,
} from './utils';
import mockData from '../../mockData/movieList';

describe('Utils function test', () => {
  it('getCategoryList function test with empty data', () => {
    expect(getCategoryList(undefined)).toHaveLength(0);
  });

  it('filterDataByCategory function test with data', () => {
    expect(filterDataByCategory(mockData.data[0].data)).toHaveLength(3);
  });

  it('filterDataByCategory function test with empty data', () => {
    expect(filterDataByCategory(undefined)).toHaveLength(0);
  });

  it('generateCategory function test', () => {
    const categories = [
      {
        title: 'Comedy',
        description: 'Comedy movies',
        id: 'movies-comedy',
      },
      {
        title: 'Drama',
        description: 'Drama movies',
        id: 'movies-drama',
      },
      {
        title: 'Romance',
        description: 'Romantic movies',
        id: 'movies-romance',
      },
    ];
    expect(generateCategory(categories)).toBe('Comedy, Drama, Romance');
  });

  it('generateCategory function test with empty data', () => {
    expect(generateCategory(undefined)).toBe('');
  });

  it('updateHistoryData function test with data', () => {
    const movieHistoryData = [
      {
        id: 'test id',
        images: [
          {
            url: 'test url',
            type: 'test type',
          },
        ],
      },
    ];
    localStorage.setItem('historyDataList', JSON.stringify(movieHistoryData));
    updateHistoryData('historyDataList', { id: 'test' });
    expect(getHistoryDataFromStorage('historyDataList')).toHaveLength(2);
  });

  it('updateHistoryData function test with data', () => {
    const movieHistoryData = [
      {
        id: 'test id',
        images: [
          {
            url: 'test url',
            type: 'test type',
          },
        ],
      },
    ];
    localStorage.setItem('historyDataList', JSON.stringify(movieHistoryData));
    updateHistoryData('historyDataList', movieHistoryData[0]);
    expect(getHistoryDataFromStorage('historyDataList')).toHaveLength(1);
  });
});
