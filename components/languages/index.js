import Cookie from 'js-cookie'

const language = Cookie.get('language') || 'tr';
const languagePack =  require(`./${language}/translation.json`);

export default languagePack;