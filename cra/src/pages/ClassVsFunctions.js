//import { ParagrapheClass } from "../components/ParagrapheClass";
import { Paragraphe } from "../components/Paragraphe";


export const ClassVsFunctions = () => <>
    <h1>Class Vs Functions</h1>
    <h2>Functions</h2>
    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/componentbyfunction.png'} alt="" />
    <Paragraphe
        //text={"Le texte modifié"}
        //title={"Titre du texte"} 
        />
    <h2>Class</h2>
    <img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/componentbyclass.png'} alt="" />

</>;
