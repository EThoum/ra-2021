import { Button } from "./buttons";

const Heart = () => <span>🎈</span>;

export const Paragraphe = (props) =>  <p>
    Edit <code>src/App.js</code> and save to reload.<br />
    <Button icon={<Heart />} outline={false} onClickHandler={props.onClickHandler}>
        {props.text}
    </Button>
</p>;