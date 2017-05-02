module.exports = function requiredIf(type, condition) {
  return function(props) {
    var test = condition(props) ? type.isRequired : type;
    return test.apply(this, arguments);
  };
};
