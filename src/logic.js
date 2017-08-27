const { base64, unbase64 } = require('./utils');

const toGlobalId = (type, id) => base64([type, id].join(':'));

const fromGlobalId = globalId => {
  const unbasedGlobalId = unbase64(globalId);
  const delimiterPos = unbasedGlobalId.indexOf(':');
  return {
    type: unbasedGlobalId.substring(0, delimiterPos),
    id: unbasedGlobalId.substring(delimiterPos + 1),
  };
};

module.exports = { toGlobalId, fromGlobalId };
