import { IntlProvider, FormattedMessage } from 'react-intl';
import Fr from '../translations/fr.json';
import En from '../translations/en.json';
import { useEffect, useState } from 'react';

console.log(navigator.language);
const locale = navigator.language;
const translationEnum = {
    "fr-FR": Fr,
    "en-US": En
}



export const Localisation = () => {
    const [currentValue, setCurrentValue] = useState({
        nom: 'xxx',
        prenom: 'yyyyy'
    });

    const onTextChange = ({ target: { value } }) => {
        setCurrentValue(value);
    }

    const onFormSubmit = form => {
        form.preventDefault();
        const formData = new FormData(form.target);
        localStorage.setItem('nom', formData.get("nom"));
        localStorage.setItem('prenom', formData.get("prenom"));
        setCurrentValue({
            nom: localStorage.getItem("nom"),
            prenom: localStorage.getItem("prenom")
        })
    }

    useEffect(() => {
        setCurrentValue({
            nom: localStorage.getItem("nom"),
            prenom: localStorage.getItem("prenom")
        })
    }, []);

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

        <h4>{currentValue.nom} {currentValue.prenom}</h4>
        <form onSubmit={onFormSubmit}>
            <div className="p-3">
                <input type="text" name="nom" className="form-control" />
            </div>
            <div className="p-3">
                <input type="text" name="prenom" className="form-control" />
            </div>
            <div className="p-3">
                <button className="btn btn-warning">Submit</button>
            </div>
        </form>

    </IntlProvider>
};

