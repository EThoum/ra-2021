import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';
import { useState } from 'react';

console.log(navigator.language);
const locale = navigator.language;
const translationEnum = {
    "fr-FR": Fr,
    "en-US": En
}


export const Localisation = () => {
    const [currentValue, setCurrentValue] = useState('');

    const onTextChange = ({ target: { value } }) => {
        setCurrentValue(value);
    }
    return <IntlProvider
        messages={translationEnum[locale]}
        {...{ locale }}
        defaultLocale="en">

        <h1>Localisation</h1>
        <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, :::yyyyMMdd}"
            values={{ ts: Date.now() }} />
        <br />
        <FormattedMessage
            id="helloReact"
            defaultMessage="Hello {nom}"
            values={{ nom: "Elo" }} />
        <br />
        <FormattedMessage
            id="toto"
            defaultMessage="toto par défaut" />

        <h4>{currentValue}</h4>

        <form>
            <input type="text" onChange={onTextChange} />
        </form>

    </IntlProvider>
};

