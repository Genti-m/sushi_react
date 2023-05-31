import React from "react";
import PropTypes from "prop-types";
import en from '../../translations/en.json';
import it from '../../translations/it.json';

const FormattedMessage = ({ id }) => {
  const lang = 'en';
  if (lang === 'it' && it[id]) {
    return it[id];
  }
  if (en[id]) {
    return en[id];
  }
  return id;
};

// props validation
// determina di che tipo devono essere le props (cioè i dati in entrata)
FormattedMessage.propTypes = {
  id: PropTypes.string,
};

export default FormattedMessage;
