import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';

console.log(navigator.language);
const locale = navigator.language;
const translationEnum = {
    "fr-FR": Fr,
    "en-US": En
}

export const Localisation = () => <IntlProvider
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
</IntlProvider>;

