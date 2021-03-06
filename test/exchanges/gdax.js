import * as assert from 'assert';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import gdax from '../../dist/exchanges/gdax';

describe('Retrieving GDAX data', () => {
  let data = [];

  before(async () => {
    try {
      data = await gdax.fetchData(null);
    } catch (err) {
      console.error(err);
    }
  });

  describe('Fetch response', () => {
    it('should return data', () => {
      assert.equal(isEmpty(data), false);
    });

    it('should be an array of string', () => {
      assert.equal(typeof(get(data, '[0]')), 'string');
    });
  });
});
