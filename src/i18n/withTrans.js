import React, { Component } from 'react';
import i18next from './config';
import { I18nextProvider, withTranslation } from 'react-i18next';

export function withTrans(WrappedComponent) {
    WrappedComponent = withTranslation()(WrappedComponent);

    return class extends Component {
  
      // componentDidMount(){
      //   // initialize lang
      //   let localLanguage = localStorage.getItem("lang") 
      //   if(typeof localLanguage !== 'string') localLanguage = null
      //   const userLang = localStorage.getItem("lang") || navigator.language
      //   if (["en-US", "zh-TW", "jp"].includes(userLang) && userLang!=='en-US') {
      //     i18next.changeLanguage(userLang)
      //   } 
      // }
      render() {
        return (
          <I18nextProvider i18n={i18next}>
            <WrappedComponent {...this.props} language={i18next.language} />
          </I18nextProvider>
        );
      }
    }
}